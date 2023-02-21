const { Schema, model, types } = require('mongoose');

const checkPointSchema = new Schema({
  name: String, 
}, {_id: false});

const zonesSchema = new Schema({
  name: String,
  description: String,
  idolsOfTheSculptor: String,
  checkPoints: [checkPointSchema],

});

module.exports = model('zone', zonesSchema);