const express = require('express');

const server = express();
const loaders = require('./loaders');
const config = require('./config');
const { logger } = require('./utils');
const app = express();

const { port } = config;

loaders.init(app, config);
server.listen(port, () => {
  logger.info(`Example app listening on ${port}`);
});

module.exports= { app }
