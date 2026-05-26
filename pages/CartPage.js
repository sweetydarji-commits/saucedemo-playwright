// pages/CartPage.js

import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartLink = page.locator('.shopping_cart_link');
    this.cartItems = page.locator('.cart_item');
    this.removeButton = page.locator('button:has-text("Remove")');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async verifyCartItemsCount(count) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async removeProduct() {
    await this.removeButton.first().click();
  }
}