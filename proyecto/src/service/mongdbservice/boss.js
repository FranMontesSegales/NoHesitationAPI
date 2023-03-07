const  { Boss }  = require('../../models')

async function createBoss(body) {
    const jefe = await new Boss(body).save()
    return  jefe;

}

async function editBoss(body) {
    const { name, ...editado } = body;
    const bossActualizado = await Boss.findOneAndUpdate({ name },editado);
    return bossActualizado;
}

async function deleteBoss(name) {
    const deletedBoss = await Boss.deleteOne(name);
    return deletedBoss;
  
}

function getBoss(filters) {
    return Boss.find(filters);
  
}
module.exports = {
    createBoss,
    editBoss,
    deleteBoss,
    getBoss
};