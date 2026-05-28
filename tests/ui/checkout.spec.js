// tests/checkout.spec.js

import { test } from '@playwright/test';

import { loginAsStandardUser } from '../../utils/testSetup.js';
import { InventoryPage } from '../../pages/inventoryPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

test.describe('Checkout Module', () => {

  test('@smoke Successful Checkout', async ({ page }) => {

    
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);



  await loginAsStandardUser(page);

    await inventoryPage.addFirstProductToCart();

    await cartPage.openCart();

    await checkoutPage.completeCheckout(
      'Sweety',
      'Darji',
      '380001'
    );

    await checkoutPage.verifyOrderSuccess();
  });
});