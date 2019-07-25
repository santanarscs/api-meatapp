import 'dotenv/config';
import express from 'express';
// import path from 'path';
// import Youch from 'youch';
import 'express-async-errors';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.excepitionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  excepitionHandler() {}
}
export default new App().server;
