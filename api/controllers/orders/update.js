module.exports = {
  friendlyName: 'Update order status',
  description: 'Updates the status of an existing order.',

  inputs: {
    id: {
      type: 'string',
      required: true,
      description: 'The ID of the order to update.'
    },
    status: {
      type: 'string',
      required: true,
      isIn: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      description: 'The new status for the order.'
    }
  },

  exits: {
    success: {
      description: 'Order status updated successfully.'
    },
    notFound: {
      description: 'Order not found.',
      responseType: 'notFound'
    }
  },

  fn: async function ({ id, status }, exits) {
    const updatedOrder = await Order.updateOne({ id }).set({ status });

    if (!updatedOrder) {
      return exits.notFound({ message: 'Order not found.' });
    }

    return exits.success(updatedOrder);
  }
};