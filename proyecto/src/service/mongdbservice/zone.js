const { Zone } = require('../../models')

async function createZone(body) {
   const zona = await new Zone(body).save()
   return  zona;
}



module.exports = {
    createZone,
   // deleteZone,
}