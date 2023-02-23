const express = require('express');

const { bienvenida } = require('../controllers');
const { createBoss } = require('../controllers/boss');

const router = express.Router();

router.get('/inicio', bienvenida);
router.post('/boss', createBoss);


module.exports = router;
