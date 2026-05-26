// tests/logout.spec.js

import { test, expect } from '@playwright/test';

import { loginAsStandardUser } from '../utils/testSetup.js';
import { MenuPage } from '../pages/MenuPage.js';

test.describe('Logout Module', () => {

  test('@smoke Verify User Logout', async ({ page }) => {

    
    const menuPage = new MenuPage(page);

    await loginAsStandardUser(page);

   
    await menuPage.logout();

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/'
    );
  });
});