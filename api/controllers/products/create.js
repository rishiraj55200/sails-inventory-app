module.exports = {
  friendlyName: 'Create product',
  description: 'Creates a new product in the inventory.',
  
  inputs: {
    name: { type: 'string', required: true, description: 'Name of the product.' },
    description: { type: 'string', required: true },
    price: { type: 'number', required: true },
    stockQuantity: { type: 'number', required: true }
  },

  exits: {
    success: {
      description: 'New product was created successfully.',
      responseType: 'created'
    },
    badRequest: {
      description: 'The request was invalid.',
      responseType: 'badRequest'
    }
  },

  fn: async function (inputs, exits) {
    try {
      const newProduct = await Product.create(inputs).fetch();
      return exits.success(newProduct);
    } catch (error) {
      return exits.badRequest({ message: 'Failed to create product.', error: error.message });
    }
  }
};