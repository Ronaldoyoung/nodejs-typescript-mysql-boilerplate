import * as express from 'express';
import Logger from './loaders/logger';
import config from '@/config';

async function startServer() {
  const app: express.Application = express();

  app.listen(8000, () => {
    Logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `)
  })
    .on('error', err => {
      Logger.error(err);
  })
}

startServer();