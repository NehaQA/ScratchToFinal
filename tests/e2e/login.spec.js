import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../utils/testData';
import { test, expect } from '../../fixtures/auth.fixture';

test('valid login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  //await loginPage.login('testuser', 'password');
console.log(await page.url());
console.log(users.validUser.username);
console.log(users.validUser.password);

  
  await loginPage.login(users.validUser.username, users.validUser.password);
  await expect(page).toHaveURL(/logged-in-successfully/);
});

/* Login through API using fixttur 
// test('example', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL('/dashboard');
}); */