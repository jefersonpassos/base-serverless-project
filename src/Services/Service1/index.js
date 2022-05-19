
const Service1 = async ({ dependencies }) => {

  const helloWorld = () => `Test service 1', ${dependencies}`;

  return { helloWorld };
};

module.exports = Service1;
