const { Zone } = require('../../models')

async function createZone(body) {
    return new Zone(body).save()
}

module.exports = {createZone}