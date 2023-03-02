const { Character } = require('../../models/Character')

async function createCharacter(body) {
    return new Character(body).save()
}

module.exports = {createCharacter}