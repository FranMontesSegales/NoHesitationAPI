const { Item } = require('../../models/Item')

async function createItem(body) {
    return new Item(body).save()
}

module.exports = {createItem}