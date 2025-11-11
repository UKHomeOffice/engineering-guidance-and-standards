export const testing_params = {
  TEST_URL: process.env.TEST_URL ?? 'http://localhost',
  TEST_PORT: process.env.TEST_PORT ?? '8080',
  TEST_PATH: process.env.TEST_PATH ?? '',
  
  get TEST_ROOT_URL() {
    return `${this.TEST_URL}:${this.TEST_PORT}${this.TEST_PATH.replace(/\/$/, '')}`;
  }
};
