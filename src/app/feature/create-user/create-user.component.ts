import { Component, Inject } from '@angular/core';
import { User } from './domains/user';
import { UserRepository } from './domains/user.repository';
import { USER_REPOSITORY } from './repositories/repository.module';

@Component({
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  message = '';

  constructor(
    @Inject(USER_REPOSITORY) private userRepository: UserRepository,
  ) { }

  async createUser() {
    const user = new User('alex', 'alex@gmail.com', 38);
    const result = await this.userRepository.create(user);
    this.message = result?.message || '';
  }
}