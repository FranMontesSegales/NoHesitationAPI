const boosservice= require('../service/mongdbservice/zone')
async function createZone(req, res){
    const zone = await zoneservice.createZone(req.body);
    return res.send(zone);
}

module.exports = {
    createZone
};