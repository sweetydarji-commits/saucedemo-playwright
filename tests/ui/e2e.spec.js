// tests/e2e.spec.js

import { test } from '@playwright/test';
import { loginAsStandardUser } from '../../utils/testSetup.js';

import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/ABC.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

test.describe('Complete E2E Flow', () => {

  test('@smoke Complete Purchase Flow', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginAsStandardUser(page);

    await inventoryPage.addMultipleProducts(2);

    await cartPage.openCart();

    await checkoutPage.completeCheckout(
      'Sweety',
      'Darji',
      '380001'
    );

    await checkoutPage.verifyOrderSuccess();
  });

});