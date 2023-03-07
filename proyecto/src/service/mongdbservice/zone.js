const { Zone } = require('../../models')

async function createZone(body) {
   const zona = await new Zone(body).save()
   return  zona;

}

async function editZone(body) {
   const { name, ...editado } = body;
   const zoneActualizado = await Boss.findOneAndUpdate({ name },editado);
   return zoneActualizado;
}

async function deleteZone(name) {
   const deletedZone = await Zone.deleteOne(name);
   return deletedZone;
 
}

function getZone(filters) {
   return Zone.find(filters);
 
}

module.exports = {
    createZone,
    editZone,
    deleteZone,
    getZone
}