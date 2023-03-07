const mongoose = require('mongoose');
const { logger } = require('../utils');

module.exports = async config => {
  mongoose.set('strictQuery', false);
  const {
    user, pass, host, port
  } = config;
await mongoose.connect(`mongodb+srv://root:example@cluster0.w1jp5x4.mongodb.net/NoHesitationAPI?retryWrites=true&w=majority`);
  logger.info('PAA TOMA CARNAL DALE AGUACATE!');
};