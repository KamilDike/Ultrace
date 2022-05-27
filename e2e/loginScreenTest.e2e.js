describe('login screen test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have app name text', async () => {
    await expect(element(by.text('Ultrace'))).toBeVisible();
  });

  it('should have google provider text', async () => {
    await expect(element(by.text('Sign in with Google'))).toBeVisible();
  });

  it('should have apple provider text', async () => {
    await expect(element(by.text('Sign in with Apple'))).toBeVisible();
  });

  it('should have continue text', async () => {
    await expect(element(by.text('Continue as guest'))).toBeVisible();
  });
});
