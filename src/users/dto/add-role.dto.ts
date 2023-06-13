import { IsNumber, IsString } from 'class-validator'

export class AddRoleDto {
  @IsString({ message: 'Should be a string' })
  readonly name: string
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number
}
