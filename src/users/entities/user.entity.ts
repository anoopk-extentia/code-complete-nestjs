import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

import { Name } from '../../names/entities/name.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @OneToMany(() => Name, (names: Name) => names.user)
  names: Name[];
}
