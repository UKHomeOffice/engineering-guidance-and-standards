export const testing_params = {
  TEST_URL: process.env.TEST_URL ?? 'http://127.0.0.1',
  TEST_PORT: process.env.TEST_PORT ?? '8080',
  TEST_PATH: process.env.TEST_PATH ?? '',

  get NORMALIZED_TEST_URL() {
    return /^https?:\/\//i.test(this.TEST_URL) ? this.TEST_URL : `http://${this.TEST_URL}`;
  },
  
  get TEST_ROOT_URL() {
    return `${this.NORMALIZED_TEST_URL}:${this.TEST_PORT}${this.TEST_PATH.replace(/\/$/, '')}`;
  }
};
