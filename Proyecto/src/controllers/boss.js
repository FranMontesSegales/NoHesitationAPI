const boosservice= require('../service/mongdbservice/boss')
async function createBoss(req, res){
    const boss = await boosservice.createBoss(req.body);
    return res.send(boss);
}

module.exports = {
    createBoss
};