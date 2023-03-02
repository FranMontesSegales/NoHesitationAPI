const boosservice= require('../service/mongdbservice/item')
async function createItem(req, res){
    const iten = await itemservice.createItem(req.body);
    return res.send(iten);
}

module.exports = {
    createItem
};