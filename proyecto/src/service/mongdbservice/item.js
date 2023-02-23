const { Item } = require('../../models')

async function createItem(body) {
    return new Item(body).save()
}

module.exports = {createItem}