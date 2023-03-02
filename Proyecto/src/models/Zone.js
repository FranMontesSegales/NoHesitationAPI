const { Schema, model} = require('mongoose');

const checkPointSchema = new Schema({
  name: String, 
  image: String,
}, {_id: false});

const zonesSchema = new Schema({
  name: String,
  description: String,
  image: String,
  checkPoints: [checkPointSchema],
});

module.exports = model('zone', zonesSchema);