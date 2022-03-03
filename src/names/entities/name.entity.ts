import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('name')
export class Name {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 12 })
  text!: string;

  @Column({ type: 'varchar', length: 10, nullable: true, default: null })
  role?: string;

  @Column({ nullable: true, default: null })
  user_id: string;

  @ManyToOne(() => User, (user: User) => user.names, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
