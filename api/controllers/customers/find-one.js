module.exports = {
  friendlyName: 'Find customer orders',
  description: 'Find all orders for a specific customer.',

  inputs: {
    id: {
      type: 'string',
      required: true,
      description: 'The ID of the customer.'
    }
  },

  exits: {
    success: {
      description: 'Found orders successfully.'
    },
    notFound: {
      description: 'Customer not found.',
      responseType: 'notFound'
    }
  },

  fn: async function ({ id }, exits) {
    const customer = await Customer.findOne({ id });
    if (!customer) {
      return exits.notFound({ message: 'Customer not found.' });
    }

    const orders = await Order.find({ customer: id });
    return exits.success(orders);
  }
};