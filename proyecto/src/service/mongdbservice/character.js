const { Character } = require('../../models')

async function createCharacter(body) {
    const personje = await new Character(body).save()
   return  personje;
}
async function editCharacter(body) {
    const { name, ...editado } = body;
    const characterActualizado = await Character.findOneAndUpdate({ name },editado);
    return characterActualizado;
}

async function deleteCharacter(name) {
    const deleteCharacter = await Character.deleteOne(name);
    return deleteCharacter;
  
}

function getCharacter(filters) {
    return Character.find(filters);
  
}

module.exports = {
    createCharacter,
    deleteCharacter,
    editCharacter,
    getCharacter
};