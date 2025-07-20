module.exports = {
  friendlyName: 'Find customers',
  description: 'Find all customers.',
  
  fn: async function (_, exits) {
    const customers = await Customer.find();
    return exits.success(customers);
  }
};