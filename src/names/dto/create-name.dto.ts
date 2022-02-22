import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString } from 'class-validator';

export class CreateNameDto {
  @ApiProperty()
  @Length(10, 20)
  @IsString({ message: 'text must be string' })
  text: string;

  @ApiProperty({ required: true })
  @IsString({ always: true })
  role: string;
}
