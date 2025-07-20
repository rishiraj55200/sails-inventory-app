module.exports = {
  friendlyName: 'Destroy product',
  description: 'Delete a product by ID.',

  inputs: {
    id: { type: 'string', required: true }
  },
  
  exits: {
    success: {
      description: 'Product deleted successfully.',
      responseType: 'ok'
    },
    notFound: {
      responseType: 'notFound'
    }
  },
  
  fn: async function ({id}, exits) {
    const deletedProduct = await Product.destroyOne({ id });
    if (!deletedProduct) {
      return exits.notFound();
    }
    return exits.success({ message: 'Product deleted.'});
  }
};