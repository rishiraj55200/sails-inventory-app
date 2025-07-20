module.exports = {
  friendlyName: 'Find products',
  description: 'Find all products.',
  
  fn: async function (_, exits) {
    const products = await Product.find();
    return exits.success(products);
  }
};