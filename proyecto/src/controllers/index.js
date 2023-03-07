const zoneController = require('./zone');
const bossController = require('./boss');
const characterController = require('./character');
const itemController = require('./item');

module.exports = {
  ...zoneController,
  ...bossController,
  ...characterController,
  ...itemController,
}
  