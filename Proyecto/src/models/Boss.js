const { Schema, model, Types } = require('mongoose');

const bossesSchema = new Schema({
  name: String,
  description: String,
  localization:  { type: Types.ObjectId, ref: 'Zone' },
  item: { type: Types.ObjectId, ref: 'Item' },
});

module.exports = model('Boss', bossesSchema);