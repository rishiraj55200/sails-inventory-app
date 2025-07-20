module.exports = {
  friendlyName: 'Find orders',
  description: 'Find all orders.',
  
  fn: async function (_, exits) {
    const orders = await Order.find().populate('customer');
    return exits.success(orders);
  }
};