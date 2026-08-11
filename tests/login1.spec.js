import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

    // 1. Open login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Enter username
    await page.locator('#username').fill('student');

    // 3. Enter password
    await page.locator('#password').fill('Password123');

    // 4. Click Submit button
    await page.locator('#submit').click();

    // 5. Verify successful login
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');

    console.log('Login successful');

});