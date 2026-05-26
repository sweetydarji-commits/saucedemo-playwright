import { test } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
import LoginPage from '../pages/LoginPage.js';
import { users } from '../test-data/userData.js';

test.describe('Login Module', () => {

  test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

   await loginPage.login(
   users.standard.username,
   users.standard.password
   );

    await loginPage.verifySuccessfulLogin();
  });

});