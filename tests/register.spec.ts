// tests/RegisterAndDeleteAccount.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';
import { AccountPage } from '../pages/AccountPage';

test.describe('AutomationExercise - User Registration Flow', () => {

  test('Register, verify login, and delete user account', async ({ page }) => {

    // Initialize Page Objects
    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);
    const accountPage = new AccountPage(page);

    // Step 1: Navigate to home page
    await test.step('Navigate to home page', async () => {
      await homePage.navigate();
      await homePage.verifyHomePageVisible();
    });

    // Step 2: Go to Signup/Login page
    await test.step('Go to Signup/Login page', async () => {
      await homePage.clickSignupLogin();
    });

    // Step 3: Enter signup details
    const randomEmail = `aarti_${Date.now()}@mailinator.com`;
    await test.step('Enter signup details', async () => {
      await signupPage.enterSignupDetails('Aarti', randomEmail);
    });

    // Step 4: Fill account information
    await test.step('Fill account information', async () => {
      await signupPage.fillAccountInformation('Test@123', '10', '10', '1998', 'Aarti', 'Gundgole', '123 Main St', 'Maharashtra', 'Pune','411028','8786241111' );
    });

    // Step 5: Create account and verify success
    await test.step('Create account and verify success', async () => {
      await signupPage.createAccount();
      await signupPage.verifyAccountCreated();
    });

    // Step 6: Verify user is logged in
    await test.step('Verify user is logged in', async () => {
      await accountPage.verifyLoggedIn();
    });

    // Step 7: Delete account and verify deletion
    await test.step('Delete account and verify deletion', async () => {
      await accountPage.deleteAccount();
      await accountPage.verifyAccountDeleted();
    });
  });
});
