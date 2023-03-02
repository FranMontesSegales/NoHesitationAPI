const { Schema, model, Types } = require('mongoose');


const itemsSchema = new Schema({
  name: String,
  description: String,
  image: String,
  localization:  { type: Types.ObjectId, ref: 'Zone' },
  type: String,
});

module.exports = model('Item', itemsSchema);