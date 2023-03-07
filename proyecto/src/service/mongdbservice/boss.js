const  { Boss }  = require('../../models')

async function createBoss(body) {
    const jefe = await new Boss(body).save()
    return  jefe;

}

async function editBoss(body) {
    const { name, ...editado } = body;
    const bossActualizado = await Boss.findOneAndUpdate(
      { name },
      editado
    );
    return bossActualizado;
}

async function deleteBoss(name) {
    const filter = { name: name };
    const deletedBoss = await Boss.deleteOne(filter);
    return deletedBoss;
  
}

function getAllBoss(filters) {
    return Boss.find(filters);
  
}
module.exports = {
    createBoss,
    editBoss,
    deleteBoss,
    getAllBoss
};