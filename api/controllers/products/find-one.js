module.exports = {
  friendlyName: 'Find one product',
  description: 'Find a single product by its ID.',

  inputs: {
    id: { type: 'string', required: true }
  },

  exits: {
    success: {
      description: 'Product found.'
    },
    notFound: {
      description: 'No product with that ID was found.',
      responseType: 'notFound'
    }
  },
  
  fn: async function ({id}, exits) {
    const product = await Product.findOne({ id });
    if (!product) {
      return exits.notFound();
    }
    return exits.success(product);
  }
};