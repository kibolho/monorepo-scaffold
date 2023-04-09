type RequestConfig = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: HeadersInit;
  body?: any;
};

export class HttpClient {
  private baseUrl: string;
  private headers?: HeadersInit;

  constructor(baseUrl: string, headers?: HeadersInit) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }

  public async setBearerToken(token: string): Promise<void> {
    this.headers = {
      ...this.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  public async get<T>(path: string, config?: RequestConfig): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: {
        ...this.headers,
        ...config?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  }

  public async post<T>(path: string, config?: RequestConfig): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        ...this.headers,
        ...config?.headers,
      },
      body: JSON.stringify(config?.body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  }

  public async put<T>(path: string, config?: RequestConfig): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'PUT',
      headers: {
        ...this.headers,
        ...config?.headers,
      },
      body: JSON.stringify(config?.body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  }

  public async delete<T>(path: string, config?: RequestConfig): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'DELETE',
      headers: {
        ...this.headers,
        ...config?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  }
}
