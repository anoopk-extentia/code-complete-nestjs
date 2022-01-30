import { PartialType } from '@nestjs/mapped-types';
import { CreateNameDto } from './create-name.dto';

export class UpdateNameDto extends PartialType(CreateNameDto) {}
