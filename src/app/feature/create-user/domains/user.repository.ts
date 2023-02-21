import { Response } from './response';
import { User } from './user';

export interface UserRepository {
  create(user: User): Promise<Response | undefined>;
}