import LoginPage from '../pages/LoginPage.js';
import { users } from '../test-data/userData.js';

export async function loginAsStandardUser(page) {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  console.log("USER:", process.env.SAUCE_USERNAME);
  console.log("PASS:", process.env.PASSWORD);

  await loginPage.login(
    users.standard.username,
    users.standard.password
  );
}