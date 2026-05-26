// pages/CheckoutPage.js

import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async completeCheckout(first, last, zip) {
    await this.checkoutButton.click();

    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);

    await this.continueButton.click();
    await this.finishButton.click();
  }

  async verifyOrderSuccess() {
    await expect(this.completeHeader).toHaveText(
      'Thank you for your order!'
    );
  }
}