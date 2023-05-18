const { connect } = require('mongoose');

const mongoConnect = async () => {
  try {
    connect(process.env.MONGO_STRING);
    console.log('MongoDB connected'.bgCyan);
  } catch (error) {
    console.log(error);
  }
};

//---- export the mongo db connection ----
module.exports = mongoConnect;
