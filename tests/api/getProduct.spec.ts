import { test, expect, request } from '@playwright/test';

test.describe('AutoamationExercise - Get Product API', () => {

    test('GET /api/productsList - Verify product list returns 200', async ({ request }) => {

        const response = await request.get('https://automationexercise.com/api/productsList');

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        console.log(responseBody);

        expect(responseBody).toHaveProperty('products');

        expect(Array.isArray(responseBody.products)).toBe(true);
    });

test('POST-api/productlist : should retrn 405 for invalid method', async ({ request }) => {

const response = await request.post('https://automationexercise.com/api/productsList');
expect(response.status()).toBe(405);
 const text = await response.text();
  console.log('Response:', text);
  expect(text).toContain('This request method is not supported');
});







































});