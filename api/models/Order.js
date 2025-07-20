module.exports = {
  attributes: {
    // Association
    customer: {
      model: 'customer',
      required: true
    },
    
    products: {
      type: 'json', // Stores an array of { productId, quantity, price }
      required: true
    },
    
    totalAmount: {
      type: 'number',
      required: true
    },

    status: {
      type: 'string',
      isIn: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      defaultsTo: 'Pending'
    },

    orderDate: {
      type: 'string',
      columnType: 'datetime',
      autoCreatedAt: true,
    },
  },
};