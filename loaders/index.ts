import * as express from 'express';
import Logger from './logger'

export default async ({ expressApp }: { expressApp: express.Application }) => {
  Logger.info('DB loaded and connected! Not Yet!!');
}