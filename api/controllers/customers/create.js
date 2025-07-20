module.exports = {
  friendlyName: 'Create customer',
  description: 'Creates a new customer.',
  
  inputs: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, isEmail: true },
    address: { type: 'string', required: true }
  },

  exits: {
    success: {
      responseType: 'created'
    },
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },

  fn: async function (inputs, exits) {
    const newCustomer = await Customer.create(inputs)
      .intercept('E_UNIQUE', 'emailAlreadyInUse')
      .fetch();
    return exits.success(newCustomer);
  }
};