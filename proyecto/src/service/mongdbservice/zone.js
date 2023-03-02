const { Zone } = require('../../models/Zone')

async function createZone(body) {
    return new Zone(body).save()
}

module.exports = {createZone}