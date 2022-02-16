import { ApiProperty } from '@nestjs/swagger';
export class CreateNameDto {
  @ApiProperty()
  text: string;
}
