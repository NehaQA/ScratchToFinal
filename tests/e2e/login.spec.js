import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../testdata/testData';
import { test, expect } from '../../fixtures/auth.fixture';

import {readExcel} from '../../utils/excelUtil.js';
const testData = readExcel('testdata/testdata.xlsx', 'LoginData');

// test using data driven approach with excel file
 // loop through data
testData.forEach((data,index)=>{
test(`Login test ${index +1}`,async({page})=> {
  const loginPage = new LoginPage(page);
await loginPage.navigate();

    await loginPage.login(
      data.username,
      data.password.toString()
    );

    await expect(page).toHaveURL(/logged-in-successfully/);
  });

;
});
// Below test was taking data fron json file but now we are taking data from excel file

/*test('valid login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  //await loginPage.login('testuser', 'password');
console.log(await page.url());
console.log(users.validUser.username);
console.log(users.validUser.password);

  
  await loginPage.login(users.validUser.username, users.validUser.password);
  await expect(page).toHaveURL(/logged-in-successfully/);
}); */






/* Login through API using fixttur 
// test('example', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL('/dashboard');
}); */