const Handler1 = async ({ event, mongo, UserModel }) => {
  await mongo.connect();

  const { body } = event;

  const newUser = await UserModel.create({
    name: body.name,
    email: body.email,
  });

  return { data: newUser };
};

module.exports = Handler1;
