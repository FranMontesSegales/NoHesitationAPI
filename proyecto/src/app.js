const express = require('express');

const loaders = require('./loaders');
const config = require('./config');
const { logger } = require('./utils');

const app = express();

loaders.init(app, config);

module.exports= { app }
