
const  Boss  = require('../../models/Boss')

async function createBoss(body) {
    return new Boss(body).save()
}

module.exports = {createBoss};
