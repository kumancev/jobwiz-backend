import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Email address' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string
  @ApiProperty({ example: '12345678', description: 'Password' })
  @IsString({ message: 'Should be a string' })
  @Length(4, 14, { message: 'Password must be at least 4 and no more than 14' })
  readonly password: string
}
