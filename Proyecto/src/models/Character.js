const { Schema, model, types } = require('mongoose');


const charactersSchema = new Schema({
  name: String,
  description: String,
  localization:  [{ type: types.ObjectId, ref: 'Zone' }],
  locDescription: String,
  item:  [{ type: types.ObjectId, ref: 'Item' },]

});

module.exports = model('character', charactersSchema);