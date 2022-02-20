import { getRepository } from 'typeorm';
import Hours from '../models/Hour';

interface Request {
  startHour: string;
  endHour: string;
}
class CreateHoursService {
  async execute({ startHour, endHour }: Request): Promise<Hours> {
    const hoursRepository = getRepository(Hours);

    const hour = hoursRepository.create({
      startHour,
      endHour,
    });

    await hoursRepository.save(hour);

    return hour;
  }
}

export default CreateHoursService;
