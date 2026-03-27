import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../utils/testData';


test('valid login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  //await loginPage.login('testuser', 'password');

  await loginPage.login(users.validUser.username, users.validUser.password);
  await expect(page).toHaveURL(/logged-in-successfully/);
});