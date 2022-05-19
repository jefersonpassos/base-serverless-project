
module.exports = () => ({
  after: async request => {
    request.response = await {
      statusCode: request.response?.statusCode || 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(request.response.data),
    };
  },
  onError: async request => {
    request.response = await {
      statusCode: request.error?.statusCode || 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: request.error?.message || request.error || 'Error',
      }),
    };
  },
});
