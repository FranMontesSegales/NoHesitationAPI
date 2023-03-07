const characterervice = require('../service/mongdbservice/character');
const {logger} = require('../utils/logger')


async function createCharacter(req, res){
    const character = await  characterervice.createCharacter(req.body);
    return res.send({character});
}

async function editCharacter(req, res, next) {
    try {
        
        const character = await characterervice.editCharacter(req.body);
        res.status(200).send(character);
        
    } catch (error) {
        error.status = 409;
        next(error);
    }
}

async function deleteCharacter(req, res, next) {
    try {
      const deleteCharacter = await characterervice.deleteCharacter(req.params);
      res.status(200).send(deleteCharacter);
      logger.info('Character eliminado');
    } catch (error) {
      error.statusCode = 404;
      logger.error('Character no encontrado');
      next(error);
    }
}

async function getCharacter(req, res,) {
    try {
      const character = await characterervice.getCharacter();
      return res.status(201).send(character);
    } catch (error) {
      return res.estatus(200).send("Boss no encontrado");
    }
  }

module.exports = {
    createCharacter,
    deleteCharacter,
    editCharacter,
    getCharacter

};