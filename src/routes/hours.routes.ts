import { Router } from 'express';
import CreateHoursService from '../services/CreateHoursService';

const hoursRouter = Router();

hoursRouter.get('/', (request, response) =>
  response.json({ message: 'Get All hours' }),
);

interface hourCreate {
  startHour: string;
  endHour: string;
}
hoursRouter.post('/', async (request, response) => {
  try {
    const { startHour, endHour } = request.body;
    const createHour = new CreateHoursService();

    const hour: hourCreate = await createHour.execute({
      startHour,
      endHour,
    });

    return response.send(hour);
  } catch (err) {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    }
    return true;
  }
});

export default hoursRouter;
