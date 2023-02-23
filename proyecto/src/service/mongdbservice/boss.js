
const { Boss } = require('../../models')

async function createBoss(body) {
    return new Boss(body).save()
}

module.exports = {createBoss};
