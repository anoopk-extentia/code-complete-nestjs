import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'name' })
export class Name {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 12 })
  text: string;
}
