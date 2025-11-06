// tests/api/getBrands.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Automation Exercise - Brands API', () => {

  test('GET /api/brandsList - should return all brands with status 200', async ({ request }) => {

    // Step 1: Send GET request
    const response = await request.get('https://automationexercise.com/api/brandsList');

    // Step 2: Validate HTTP status code
    expect(response.status()).toBe(200);

    // Step 3: Parse JSON body
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);

    // Step 4: Validate response structure
    expect(responseBody).toHaveProperty('brands');
    expect(Array.isArray(responseBody.brands)).toBeTruthy();

    // Step 5: Optional — validate brand data fields
    if (responseBody.brands.length > 0) {
      const firstBrand = responseBody.brands[0];
      expect(firstBrand).toHaveProperty('id');
      expect(firstBrand).toHaveProperty('brand');
    }
  });

});
