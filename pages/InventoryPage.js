class InventoryPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('.title');

    this.backpackAddBtn = page.locator('#add-to-cart-sauce-labs-backpack');

    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.backpackAddBtn.click();
  }

  // ADD THIS METHOD
  async addFirstProductToCart() {
    await this.backpackAddBtn.click();
  }
}