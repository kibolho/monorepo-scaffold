import { HttpClient } from './shared/http-client';

export class Auth {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async setToken(token: string) {
    return this.httpClient.setBearerToken(token);
  }
}
