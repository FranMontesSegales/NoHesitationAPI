const mongoose = require('mongoose');
const { logger } = require('../utils');

module.exports = async config => {
  mongoose.set('strictQuery', false);
  const {
    user, pass,
  } = config;
  await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.w1jp5x4.mongodb.net/?retryWrites=true&w=majority`);
  logger.info('CONECTADO!');
};