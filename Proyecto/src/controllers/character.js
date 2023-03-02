const mongodbService = require('../service/mongdbservice');
async function createCharacter(req, res){
    const character = await  mongodbService.createCharacter(req.body);
    return res.send(character);
}

module.exports = {
    createCharacter
};