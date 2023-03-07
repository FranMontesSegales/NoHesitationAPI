const { Item } = require('../../models')

async function createItem(body) {
    const objeto = await new Item(body).save()
    return  objeto;
}

async function DeleteItem(itemId) {
    const idItem = new ObjectId(itemId)
    return new deleteOne(idItem)
}

module.exports = {
    createItem,
    DeleteItem,
}