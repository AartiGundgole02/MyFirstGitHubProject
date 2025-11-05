// pages/HomePage.ts
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly homeBanner: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators after assigning page
        this.signupLoginLink = page.locator('a[href="/login"]');
        this.homeBanner = page.locator('#slider');
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/', {
            waitUntil: 'domcontentloaded', // faster, avoids load hang
            timeout: 60000, // optional:
        })
        await this.page.getByRole('heading', { name: 'AutomationExercise' }).waitFor();
    }

    async verifyHomePageVisible() {
        await expect.soft(this.homeBanner).toBeVisible();
    }

    async clickSignupLogin() {
        await this.signupLoginLink.click();
    }
}
