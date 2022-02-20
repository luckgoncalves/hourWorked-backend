import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hours')
class Hour {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  startHour: string;

  @Column()
  endHour: string;
}

export default Hour;
