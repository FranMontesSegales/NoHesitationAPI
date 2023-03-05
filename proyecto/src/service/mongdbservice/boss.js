
const  Boss  = require('../../models/Boss')

async function createBoss(body) {
    return new Boss(body).save()
}

async function deleteBoss(bossId) {
    const idBoss = new ObjectId(bossId)
    return new deleteOne(idBoss)
}

module.exports = {createBoss,
    deleteBoss,
};
