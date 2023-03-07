const characterervice = require('../service/mongdbservice/character');

async function createCharacter(req, res){
    const character = await  characterervice.createCharacter(req.body);
    return res.send({character});
}

async function deleteCharacter(req, res){
    const characterId = req.params;
    try{
        const eliminar = await characterervice.deleteCharacter(characterId)
        return res.status(200).send(eliminar);
    } catch(err){
        return res.status(200).send("Boss no encontrado");
    }
}

module.exports = {
    createCharacter,
    deleteCharacter,
};