import { test } from '@playwright/test';
import { loginAsStandardUser } from '../../utils/testSetup.js';
import { InventoryPage } from '../../pages/ABC.js';
import { CartPage } from '../../pages/CartPage.js';

test.describe('Cart Module', () => {

  test('@smoke Add Product To Cart', async ({ page }) => {

    test.setTimeout(60000);

    
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

   await loginAsStandardUser(page);

    
    await page.waitForLoadState('networkidle');

    await inventoryPage.addFirstProductToCart();

    await cartPage.openCart();

    await cartPage.verifyCartItemsCount(1);
  });

  test('@regression Remove Product From Cart', async ({ page }) => {

    test.setTimeout(60000);

  
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

   await loginAsStandardUser(page);

  

    await page.waitForLoadState('networkidle');

    await inventoryPage.addFirstProductToCart();

    await cartPage.openCart();

    await cartPage.removeProduct();

    await cartPage.verifyCartItemsCount(0);
  });
});