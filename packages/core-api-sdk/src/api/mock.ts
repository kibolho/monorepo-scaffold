export class Mock {
  public async getMockData(): Promise<string> {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    sleep(1000);
    return 'Mocked Response';
  }
}
