const boosservice= require('../service/mongdbservice/boss')

async function createBoss(req, res){
    const boss = await boosservice.createBoss(req.body);
    return res.send(boss);
}

async function deleteBoss(req, res){
    const bossId = req.params;
    try{
        const eliminar = await boosservice.deleteBoss(bossId)
        return res.status(200).send(eliminar);
    } catch(err){
        return res.status(200).send("Boss no encontrado");
    }
}

module.exports = {
    createBoss,
    deleteBoss,
};