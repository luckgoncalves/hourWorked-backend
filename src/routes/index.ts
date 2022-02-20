import { Router } from 'express';
import hoursRouter from './hours.routes';

const routes = Router();

routes.use('/hours', hoursRouter);

export default routes;
