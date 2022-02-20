import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hours')
class Hours {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  startHour: string;

  @Column()
  endHour: string;
}

export default Hours;
