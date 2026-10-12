export const testing_params = {
  TEST_URL: process.env.TEST_URL ?? 'http://localhost',
  TEST_PORT: process.env.TEST_PORT ?? '8080',
  TEST_PATH: process.env.TEST_PATH ?? '',

  get TEST_URL_NORMALIZED() {
    const testUrl = this.TEST_URL;
    if (/^https?:\/\//i.test(testUrl)) {
      return testUrl;
    }
    return `http://${testUrl}`;
  },
  
  get TEST_ROOT_URL() {
    return `${this.TEST_URL_NORMALIZED}:${this.TEST_PORT}${this.TEST_PATH.replace(/\/$/, '')}`;
  }
};
