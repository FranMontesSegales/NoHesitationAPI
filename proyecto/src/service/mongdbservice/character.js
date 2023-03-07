const { Character } = require('../../models')

async function createCharacter(body) {
    const personje = await new Character(body).save()
   return  personje;
}

async function deleteCharacter(characterId) {
    const idCharacter = new ObjectId(characterId)
    return new deleteOne(idCharacter)
}

module.exports = {
    createCharacter,
    deleteCharacter,
};