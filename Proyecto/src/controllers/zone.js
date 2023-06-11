const zoneservice= require('../service/mongdbservice/zone')

async function createZone(req, res){
    const zone = await zoneservice.createZone(req.body);
    return res.send({zone});
 
 }
 
 async function editZone(req, res, next) {
    try {
        const zone = await zoneservice.editZone(req.body);
        res.status(200).send(zone);
    } catch (error) {
        error.status = 409;
        next(error);
    }
 }
 
 async function deleteZone(req, res, next) {
    try {
      const deletedZone = await zoneservice.deleteZone(req.params);
      res.status(200).send(deletedZone);
      logger.info('Zone eliminado');
    } catch (error) {
      error.statusCode = 404;
      logger.error('Zone no encontrado');
      next(error);
    }
 }
 
 async function getZone(req, res,) {
    try {
      const zone = await zoneservice.getZone();
      return res.status(201).send(zone);
    } catch (error) {
      return res.estatus(200).send("Zone no encontrado");
    }
  }

module.exports = {
    createZone,
    editZone,
    deleteZone,
    getZone
};