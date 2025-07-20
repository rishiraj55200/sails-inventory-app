module.exports = {
  friendlyName: 'Update product',
  description: 'Update a product by ID.',

  inputs: {
    id: { type: 'string', required: true },
    name: { type: 'string' },
    description: { type: 'string' },
    price: { type: 'number' },
    stockQuantity: { type: 'number' }
  },
  
  exits: {
    success: {
      description: 'Product updated successfully.'
    },
    notFound: {
      responseType: 'notFound'
    }
  },
  
  fn: async function (inputs, exits) {
    const updatedProduct = await Product.updateOne({ id: inputs.id }).set(inputs);
    if (!updatedProduct) {
      return exits.notFound();
    }
    return exits.success(updatedProduct);
  }
};