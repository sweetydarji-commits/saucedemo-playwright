import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async gotoLoginPage() {
    await this.page.goto('/');
  }

  async login(username, password) {
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);

  await Promise.all([
    this.page.waitForURL('**/inventory.html'),
    this.loginButton.click()
  ]);
}

  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}