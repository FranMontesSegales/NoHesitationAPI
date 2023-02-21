const { Schema, model, types } = require('mongoose');


const itemsSchema = new Schema({
  name: String,
  description: String,
  localization:  { type: types.ObjectId, ref: 'Zone' },
  type: String,
});

module.exports = model('Item', itemsSchema);