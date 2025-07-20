module.exports = {
  friendlyName: 'Find one order',
  description: 'Find a single order by its ID.',

  inputs: {
    id: { type: 'string', required: true }
  },

  exits: {
    success: {
      description: 'Order found.'
    },
    notFound: {
      description: 'No order with that ID was found.',
      responseType: 'notFound'
    }
  },
  
  fn: async function ({id}, exits) {
    const order = await Order.findOne({ id }).populate('customer');
    if (!order) {
      return exits.notFound();
    }
    return exits.success(order);
  }
};