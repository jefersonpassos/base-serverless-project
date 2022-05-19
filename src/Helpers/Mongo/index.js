
let conn = null;

const Mongo = ({ config, mongoose }) => {
  const connect = async () => {
    if (!conn) {
      conn = mongoose.connect(config.mongo.uri, {
        serverSelectionTimeoutMS: 5000,
      }).then(() => mongoose);

      await conn;
    }

    return conn;
  };

  return { connect };
};

module.exports = Mongo;
