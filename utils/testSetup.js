import LoginPage from '../pages/LoginPage.js';
import { users } from '../test-data/userData.js';

export async function loginAsStandardUser(page) {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    users.standard.username,
    users.standard.password
  );
}