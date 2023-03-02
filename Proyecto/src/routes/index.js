const express = require('express');

const { bienvenida } = require('../controllers');
const { createBoss } = require('../controllers/boss');
const { createCharacter } = require('../controllers/character');
const { createItem } = require('../controllers/item');
const { createZone } = require('../controllers/zone');


const router = express.Router();
router.get('/inicio', bienvenida);

router.post('/boss', createBoss);
router.post('/character', createCharacter);
router.post('/item', createItem);
router.post('/zone', createZone);


module.exports = router;
