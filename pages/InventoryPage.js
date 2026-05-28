import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('.title');

    this.backpackAddBtn = page.locator('#add-to-cart-sauce-labs-backpack');
    this.bikeLightAddBtn = page.locator('#add-to-cart-sauce-labs-bike-light');

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.sortDropdown = page.locator('[data-test="product-sort-container"]');

    this.inventoryItems = page.locator('.inventory_item_name');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.backpackAddBtn.click();
  }

  async addBikeLightToCart() {
    await this.bikeLightAddBtn.click();
  }

  async addMultipleProducts() {
    await this.addBackpackToCart();
    await this.addBikeLightToCart();
  }

  async verifyCartCount(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async sortProducts(option) {
    await this.sortDropdown.selectOption(option);
  }

  async verifyProductsVisible() {
    await expect(this.inventoryItems.first()).toBeVisible();
  }
}