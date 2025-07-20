module.exports = {
  friendlyName: 'Create order',
  description: 'Places a new order for a customer.',

  inputs: {
    customer: {
      type: 'string',
      required: true,
      description: 'The ID of the customer placing the order.'
    },
    products: {
      type: 'ref',
      required: true,
      description: 'An array of products to order.',
      example: '[{ "productId": "someId", "quantity": 2 }]'
    }
  },

  exits: {
    success: {
      description: 'Order placed successfully.',
      responseType: 'created'
    },
    badRequest: {
      description: 'Invalid request.',
      responseType: 'badRequest'
    },
    notFound: {
      description: 'One or more products were not found, or customer not found.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {
    if (!inputs.products || !Array.isArray(inputs.products) || inputs.products.length === 0) {
      return exits.badRequest({ message: 'Products array is required and cannot be empty.' });
    }

    // Verify customer exists
    const customer = await Customer.findOne({ id: inputs.customer });
    if (!customer) {
      return exits.notFound({ message: 'Customer not found.' });
    }

    let totalAmount = 0;
    const orderProductDetails = [];

    for (const item of inputs.products) {
      const product = await Product.findOne({ id: item.productId });

      if (!product) {
        return exits.notFound({ message: `Product with ID ${item.productId} not found.` });
      }

      if (product.stockQuantity < item.quantity) {
        return exits.badRequest({ message: `Not enough stock for ${product.name}. Available: ${product.stockQuantity}, Requested: ${item.quantity}` });
      }

      // Add to total and prepare for order details
      totalAmount += product.price * item.quantity;
      orderProductDetails.push({
        productId: product.id,
        name: product.name,
        quantity: item.quantity,
        price: product.price
      });

      // Decrement stock (in a real app, use transactions here)
      await Product.updateOne({ id: item.productId }).set({
        stockQuantity: product.stockQuantity - item.quantity
      });
    }

    // Create the order
    const newOrder = await Order.create({
      customer: inputs.customer,
      products: orderProductDetails,
      totalAmount: totalAmount,
      status: 'Pending'
    }).fetch();

    return exits.success(newOrder);
  }
};