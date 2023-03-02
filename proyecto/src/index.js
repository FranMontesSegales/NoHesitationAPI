const { app } = require('./app');
const config = require('./config');
const { logger } = require('./utils');

const { port } = config;

app.listen(port, () => {
  logger.info(`Example app listening on ${port}`);
});
