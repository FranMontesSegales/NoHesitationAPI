const boosservice= require('../service/mongdbservice/boss')
const {logger} = require('../utils/logger')


async function createBoss(req, res){
    const boss = await boosservice.createBoss(req.body);
    return res.send({boss});

}

async function editBoss(req, res, next) {
    try {

        const boss = await boosservice.editBoss(req.body);
        res.status(200).send(boss);

    } catch (error) {
        error.status = 409;
        next(error);
    }
}

async function deleteBoss(req, res, next) {
    try {
      const deletedBoss = await boosservice.deleteBoss(req.params);
      res.status(200).send(deletedBoss);
      logger.info('Boss eliminado');
    } catch (error) {
      error.statusCode = 404;
      logger.error('Boss no encontrado');
      next(error);
    }
}

async function getBoss(req, res,) {
    try {
      const boss = await boosservice.getBoss();
      return res.status(201).send(boss);
    } catch (error) {
      return res.estatus(200).send("Boss no encontrado");
    }
  }

module.exports = {
    createBoss,
    editBoss,
    deleteBoss,
    getBoss
};