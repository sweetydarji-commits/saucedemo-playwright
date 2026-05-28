import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('.title');

    this.backpackAddBtn = page.locator(
      '#add-to-cart-sauce-labs-backpack'
    );

    this.bikeLightAddBtn = page.locator(
      '#add-to-cart-sauce-labs-bike-light'
    );

    this.sortDropdown = page.locator(
      '[data-test="product-sort-container"]'
    );

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.inventoryItems = page.locator('.inventory_item');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.backpackAddBtn.click();
  }

  async addFirstProductToCart() {
    await this.backpackAddBtn.click();
  }

  async addMultipleProducts() {
    await this.backpackAddBtn.click();
    await this.bikeLightAddBtn.click();
  }

  async verifyCartCount(count) {
    await expect(this.cartBadge).toHaveText(count.toString());
  }

  async sortProducts(value) {
    await this.sortDropdown.selectOption(value);
  }

  async verifyProductsVisible() {
    await expect(this.inventoryItems.first()).toBeVisible();
  }
}