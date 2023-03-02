const { Schema, model, Types } = require('mongoose');


const charactersSchema = new Schema({
  name: String,
  description: String,
  image: String,
  localization:  [{ type: Types.ObjectId, ref: 'Zone' }],
  locDescription: String,
  item:  [{ type: Types.ObjectId, ref: 'Item' }],
});

module.exports = model('character', charactersSchema);