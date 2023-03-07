const itemservice= require('../service/mongdbservice/item')

async function createItem(req, res){
    const iten = await itemservice.createItem(req.body);
    return res.send({iten});
}

async function deleteItem(req, res){
    const itemId = req.params;
    try{
        const eliminar = await itemservice.deleteItem(itemId)
        return res.status(200).send(eliminar);
    } catch(err){
        return res.status(200).send("Boss no encontrado");
    }
}

module.exports = {
    createItem,
    deleteItem,
};