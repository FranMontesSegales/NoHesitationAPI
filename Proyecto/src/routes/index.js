const express = require('express');

const { createBoss } = require('../controllers/boss');
const { editBoss } = require('../controllers/boss');
const { deleteBoss } = require('../controllers/boss');


const { createCharacter } = require('../controllers/character');
const { createItem } = require('../controllers/item');
const { createZone } = require('../controllers/zone');

const router = express.Router();

//router.post('', getBoss);
router.post('/boss', createBoss);
router.put('boss/:name', editBoss);
router.delete('/:name', deleteBoss);


router.post('/character', createCharacter);
router.post('/item', createItem);
router.post('/zone', createZone);





module.exports = router;
