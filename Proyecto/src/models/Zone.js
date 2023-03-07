const { Schema, model} = require('mongoose');

const zonesSchema = new Schema({
  name: String,
  description: String,
  image: String,
});

module.exports = model('Zone', zonesSchema);