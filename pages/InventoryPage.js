import { expect } from '@playwright/test';

export default class InventoryPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator('.title');
    this.addToCartButtons = page.locator('.btn_inventory');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('.product_sort_container');
  }

  async verifyInventoryPage() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async addMultipleProducts(count) {
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async verifyCartCount(count) {
    await expect(this.shoppingCartBadge).toHaveText(count.toString());
  }

  async sortProducts(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }

  async verifySortDropdownVisible() {
    await expect(this.sortDropdown).toBeVisible();
  }
}