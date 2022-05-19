module.exports = () => ({
  before: handler => {
    handler.context.callbackWaitsForEmptyEventLoop = false;
    handler.event.body = JSON.parse(handler.event.body);
  },
});
