async function createZone(req, res){
    const zone = await new Zone(req.body);
    return res.send(zone);
}

module.exports = {
    createZone
};