const zoneService = require('./zone');
const bossService = require('./boss');
const characterService = require('./character');
const itemService = require('./item');

module.exports = {
    ...zoneService,
    ...bossService,
    ...characterService,
    ...itemService,
}