// pages/SignupPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
    readonly page: Page;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly signupButton: Locator;
    readonly titleMrs: Locator;
    readonly passwordField: Locator;
    readonly daysDropdown: Locator;
    readonly monthsDropdown: Locator;
    readonly yearsDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly optinCheckbox: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly addressField: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipCodeField: Locator;
    readonly mobileNumberField: Locator;
    readonly createAccountButton: Locator;
    readonly successMsg: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // initialize locators AFTER this.page is set
        this.nameField = page.locator('input[data-qa="signup-name"]');
        this.emailField = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');
        this.titleMrs = page.locator('#id_gender2');
        this.passwordField = this.page.locator('xpath=//input[@id="password"]');
        this.daysDropdown = page.locator('#days');
        this.monthsDropdown = page.locator('#months');
        this.yearsDropdown = page.locator('#years');
        this.newsletterCheckbox = page.locator('xpath=//input[@name="newsletter"]');
        this.optinCheckbox = page.locator('xpath=//input[@name="optin"]');
        this.firstNameField = page.locator('xpath=//input[@name="first_name"]');
        this.lastNameField = page.locator('#last_name');
        this.addressField = page.locator('#address1');
        this.stateField = page.locator('#state');
        this.cityField = page.locator('#city');
        this.zipCodeField = page.locator('#zipcode');
        this.mobileNumberField = page.locator('#mobile_number');
        this.createAccountButton = page.locator('button[data-qa="create-account"]');
        this.successMsg = page.locator('h2:has-text("Account Created!")');
        this.continueButton = page.locator('a[data-qa="continue-button"]');
    }

    async enterSignupDetails(name: string, email: string) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.signupButton.click();
        await this.page.locator('text=Enter Account Information').waitFor({ timeout: 10000 });
    }

    async fillAccountInformation(password: string, day: string, month: string, year: string, firstName: string, lastName: string, address: string,state: string, city: string, zipCode: string, mobileNumber: string) {
        await this.titleMrs.check();
        await this.passwordField.fill(password);
        await this.daysDropdown.selectOption(day);
        await this.monthsDropdown.selectOption(month);
        await this.yearsDropdown.selectOption(year);
        await this.newsletterCheckbox.check();
        await this.optinCheckbox.check();
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.addressField.fill(address);
        await this.stateField.fill(state);
        await this.cityField.fill(city);
        await this.zipCodeField.fill(zipCode);
        await this.mobileNumberField.fill(mobileNumber);        
    }

    async createAccount() {
        await this.createAccountButton.click();
    }

    async verifyAccountCreated() {
        // increase timeout to handle slow transitions or ads
        await expect.soft(this.successMsg).toBeVisible({ timeout: 20000 });

        // ensure Continue button is ready before clicking
        await this.continueButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.continueButton.click();
    }

}
