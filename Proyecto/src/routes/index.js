const express = require('express');

const { createBoss, editBoss, deleteBoss, getBoss} = require('../controllers/boss');
const { createCharacter,editCharacter, deleteCharacter, getCharacter} = require('../controllers/character');
const { createItem, editItem, deleteItem, getItem} = require('../controllers/item');
const { createZone, editZone, deleteZone, getZone } = require('../controllers/zone');

const router = express.Router();

//  BOSS
router.get('/boss', getBoss);
router.post('/boss', createBoss);
router.put('/boss/:name', editBoss);
router.delete('/boss/:name', deleteBoss);

//  CHARACTER
router.get('/character', getCharacter);
router.post('/character', createCharacter);
router.put('/character/:name', editCharacter);
router.delete('/character/:name', deleteCharacter);

//  ITEM
router.get('/item', getItem);
router.post('/item', createItem);
router.put('/item/:name', editItem);
router.delete('/item/:name', deleteItem);


//  ZONE
router.get('/zone', getZone);
router.post('/zone', createZone);
router.put('/zone/:name', editZone);
router.delete('/zone/:name', deleteZone);



module.exports = router;
