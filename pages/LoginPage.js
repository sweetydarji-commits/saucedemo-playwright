// pages/LoginPage.js

import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async gotoLoginPage() {
  await this.page.goto(process.env.BASE_URL);
}

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

await this.loginButton.waitFor({ state: 'visible' });

await this.loginButton.click({ force: true });

await this.page.waitForLoadState('networkidle');
  }

  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyErrorMessage(message) {
    await expect(this.errorMessage).toContainText(message);
  }
}