const itemservice= require('../service/mongdbservice/item')

async function createItem(req, res){
    const iten = await itemservice.createItem(req.body);
    return res.send({iten});
}

async function editItem(req, res, next) {
    try {

        const item = await itemservice.editItem(req.body);
        res.status(200).send(item);

    } catch (error) {
        error.status = 409;
        next(error);
    }
}

async function deleteItem(req, res, next) {
    try {
      const deletedItem = await itemservice.deleteItem(req.params);
      res.status(200).send(deleteItem);
      logger.info('Item eliminado');
    } catch (error) {
      error.statusCode = 404;
      logger.error('Item no encontrado');
      next(error);
    }
}

async function getItem(req, res,) {
    try {
      const item = await itemservice.getItem();
      return res.status(201).send(item);
    } catch (error) {
      return res.estatus(200).send("Item no encontrado");
    }
  }

module.exports = {
    createItem,
    editItem,
    deleteItem,
    getItem
};