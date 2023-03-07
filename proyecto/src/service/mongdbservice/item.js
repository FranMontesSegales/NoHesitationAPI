const { Item } = require('../../models')

async function createItem(body) {
    const objeto = await new Item(body).save()
    return  objeto;
}

async function editItem(body) {
    const { name, ...editado } = body;
    const itemActualizado = await Item.findOneAndUpdate({ name },editado);
    return itemActualizado;
}

async function deleteItem(name) {
    const deletedItem = await Item.deleteOne(name);
    return deletedItem;
  
}

function getItem(filters) {
    return Item.find(filters);
  
}

module.exports = {
    createItem,
    editItem,
    deleteItem,
    getItem
}