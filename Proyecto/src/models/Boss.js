const { Schema, model, Types } = require('mongoose');

const bossesSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  Deathblow: String,
  usefulTools: String,
  image: String,
  localization:  { type: Types.ObjectId, ref: 'Zone' },
  item: { type: Types.ObjectId, ref: 'Item' },
});

module.exports = model('Boss', bossesSchema);