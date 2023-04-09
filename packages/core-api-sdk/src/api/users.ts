import { User } from '../types';
import { HttpClient } from './shared/http-client';

export class Users {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async getAll(): Promise<User[]> {
    return this.httpClient.get<User[]>('/users');
  }

  public async getById(id: number): Promise<User> {
    return this.httpClient.get<User>(`/users/${id}`);
  }
}
