module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    price: { type: 'number', required: true },
    stockQuantity: { type: 'number', required: true, defaultsTo: 0 },
  },
};