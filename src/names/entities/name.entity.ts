import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('name')
export class Name {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'varchar', length: 12 })
  text!: string;

  @Column({ type: 'varchar', length: 10, nullable: true, default: null })
  role?: string;
}
