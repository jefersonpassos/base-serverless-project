module.exports = {
  register: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
        required: ['email', 'name', 'password', 'orgId'],
        properties: {
          name: { type: 'string', minLength: 1 },
          email: { type: 'string', minLength: 1 },
          password: { type: 'string', minLength: 1 },
          phone: { type: 'string', minLength: 1 },
        },
      },
    },
  },
  auth: {
    type: 'object',
    properties: {
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', minLength: 1 },
          password: { type: 'string', minLength: 1 },
        },
      },
    },
  },
};
