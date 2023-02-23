require('dotenv').config();
const port = 3000;

const mongodb= {
  user: process.env.MONGUITO_USUARIO,
  pass: process.env.MONGUITO_BATTLEPASS,
}

module.exports = {
  port,
  mongodb
};