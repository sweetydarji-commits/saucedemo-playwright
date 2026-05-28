import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/ABC.js';
import { users } from '../../test-data/userData.js';

test.describe('Inventory Module', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );
  });

  test('@smoke Verify Inventory Page Title', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.verifyInventoryPageLoaded();
  });

  test('@regression Add Multiple Products', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addMultipleProducts();

    await inventoryPage.verifyCartCount(2);
  });

  test('@regression Verify Product Sorting Dropdown', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortProducts('za');

    await inventoryPage.verifyProductsVisible();
  });

});