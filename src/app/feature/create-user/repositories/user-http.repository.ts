import { User } from '../domains/user';
import { UserRepository } from '../domains/user.repository';
import { HttpClient } from '@angular/common/http'
import { lastValueFrom, map } from 'rxjs';
import { Response } from '../domains/response';
import { UserResponseAdapter, UserResponseDto } from './user-response.adapter';
import { environment } from 'src/environments/environment';

export class UserHttpRepository implements UserRepository {
  constructor(
    private http: HttpClient,
  ) { }

  create(user: User): Promise<Response | undefined> {
    return lastValueFrom(this.http.post<UserResponseDto>(`${environment.apiBase}/d159e747-fea1-4ac6-8332-88be4c14179e`, user)
      .pipe(
        map(data => new UserResponseAdapter(data))
      ));
  }
}