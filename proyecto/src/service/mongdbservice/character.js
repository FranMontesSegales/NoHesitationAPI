const { Character } = require('../../models')

async function createCharacter(body) {
    return new Character(body).save()
}

module.exports = {createCharacter}