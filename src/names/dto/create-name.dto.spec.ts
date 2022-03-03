import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateNameDto } from './create-name.dto';

describe('Create Name Dto', () => {
  it('requires [text] property', async () => {
    const data = {
      role: 'role',
      user_id: '1',
    };
    const dto = plainToClass(CreateNameDto, data);
    const errors = await validate(dto);
    expect(errors).toHaveLength(1);
    const [error] = errors;
    expect(error).toBeInstanceOf(ValidationError);
    expect(error.property).toBe('text');
    expect(errors.length).not.toBe(0);
    expect(stringified(errors)).toContain(`text must be string`);
  });

  it('succeeds with a valid payload', async () => {
    const data = {
      text: 'text',
      role: 'role',
    };
    const dto = plainToClass(CreateNameDto, data);
    const errors = await validate(dto);
    const [error] = errors;

    expect(error).toBeInstanceOf(ValidationError);
    expect(errors.length).not.toBe(0);
    expect(error.constraints).toHaveProperty('isLength');
  });
});
export function stringified(errors: ValidationError[]): string {
  return JSON.stringify(errors);
}
