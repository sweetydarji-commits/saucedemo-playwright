import { test } from '@playwright/test';
import { loginAsStandardUser } from '../../utils/testSetup.js';
import InventoryPage from '../../pages/InventoryPage.js';

test.describe('Inventory Module', () => {

  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {


    inventoryPage = new InventoryPage(page);
     await loginAsStandardUser(page);
    

    
  });

  test('@smoke Verify Inventory Page Title', async () => {

    await inventoryPage.verifyInventoryPage();
  });

  test('@regression Add Multiple Products', async () => {

    await inventoryPage.addMultipleProducts(2);

    await inventoryPage.verifyCartCount(2);
  });

  test('@regression Verify Product Sorting Dropdown', async () => {

    await inventoryPage.verifySortDropdownVisible();

    await inventoryPage.sortProducts('za');
  });

});