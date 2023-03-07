const { Schema, model, Types } = require('mongoose');


const charactersSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  localization:  { type: Types.ObjectId, ref: 'Zone' },
  item:  { type: Types.ObjectId, ref: 'Item' },
});

module.exports = model('Character', charactersSchema);