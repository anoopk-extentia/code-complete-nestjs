import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
}
