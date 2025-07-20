module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, isEmail: true, unique: true },
    address: { type: 'string', required: true },
    
    // Association
    orders: {
      collection: 'order',
      via: 'customer'
    }
  },
};