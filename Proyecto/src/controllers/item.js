async function createItem(req, res){
    const iten = await new Item(req.body);
    return res.send(iten);
}

module.exports = {
    createItem
};