// pages/AccountPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class AccountPage {
  readonly page: Page;
  readonly loggedInAs: Locator;
  readonly deleteAccountButton: Locator;
  readonly accountDeletedText: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators after assigning page
    this.loggedInAs = page.locator('a:has-text("Logged in as")');
    this.deleteAccountButton = page.locator('a[href="/delete_account"]');
    this.accountDeletedText = page.locator('h2:has-text("Account Deleted!")');
  }

  async verifyLoggedIn() {
    await expect.soft(this.loggedInAs).toBeVisible();
  }

  async deleteAccount() {
    await this.deleteAccountButton.click();
  }

  async verifyAccountDeleted() {
    await expect.soft(this.accountDeletedText).toBeVisible();
  }
}
