import { Response } from '../domains/response';

export interface UserResponseDto {
  message: string;
}

export class UserResponseAdapter implements Response {
  message: string;

  constructor(userResponseDto: UserResponseDto) {
    this.message = userResponseDto.message;
  }
}