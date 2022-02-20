import { Router } from 'express';
import hoursRouter from './hours.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/hours', hoursRouter);

routes.use('/users', usersRouter);

export default routes;
