const boosservice= require('../service/mongdbservice/character')
async function createCharacter(req, res){
    const character = await  characterservice.createCharacter(req.body);
    return res.send(character);
}

module.exports = {
    createCharacter
};