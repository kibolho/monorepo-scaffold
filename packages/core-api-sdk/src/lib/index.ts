import { ApiClient } from '../api/client';

export class Library {
  api: ApiClient;

  constructor(accessToken: string) {
    this.api = new ApiClient();
    this.api.auth.setToken(accessToken);
  }
}

export const CoreSDK = (accessToken: string) => new Library(accessToken);

export type ICoreSDK = ReturnType<typeof CoreSDK>;
