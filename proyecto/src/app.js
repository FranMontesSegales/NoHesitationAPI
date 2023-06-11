const express = require('express');
const cors = require('cors');
const loaders = require('./loaders');
const config = require('./config');
const { logger } = require('./utils');

const app = express();

// Habilitar CORS
app.use(cors());

loaders.init(app, config);

module.exports= { app }
