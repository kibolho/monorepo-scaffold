import { HttpClient } from './shared/http-client';
import { Auth } from './auth';
import { Users } from './users';
import { Mock } from './mock';

export class ApiClient extends HttpClient {
  public auth: Auth;
  public users: Users;
  public mock: Mock;

  constructor() {
    super('https://api.link');

    this.auth = new Auth(this);
    this.users = new Users(this);
    this.mock = new Mock();
  }
}
