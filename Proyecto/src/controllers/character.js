async function createCharacter(req, res){
    const character = await new Character(req.body);
    return res.send(character);
}

module.exports = {
    createCharacter
};