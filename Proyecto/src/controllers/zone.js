const zoneservice= require('../service/mongdbservice/zone')

async function createZone(req, res){
    const zone = await zoneservice.createZone(req.body);
    return res.send({zone});
}

async function deleteZone(req, res){
    const itemId = req.params;
    try{
        const eliminar = await zoneservice.deleteZone(itemId)
        return res.status(200).send(eliminar);
    } catch(err){
        return res.status(200).send("Zona no encontrado");
    }
}

module.exports = {
    createZone,
    deleteZone,
};