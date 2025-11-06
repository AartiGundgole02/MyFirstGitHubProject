// tests/api/searchProduct.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Automation Exercise - Search Product API', () => {

  test('POST /api/searchProduct - should return products related to search keyword', async ({ request }) => {

    // Step 1: Send POST request with form data
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
      form: { search_product: 'top' } // keyword can be 'top', 'tshirt', 'jean', etc.
    });

    // Step 2: Verify status code
    expect(response.status()).toBe(200);

    // Step 3: Parse JSON response
    const responseBody = await response.json();
    console.log('Search Response:', responseBody);

    // Step 4: Validate structure
    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody.products)).toBeTruthy();

    // Step 5: Optional — Check if product names contain the keyword
    const keyword = 'top';
    const matchingProducts = responseBody.products.filter((p: any) =>
      p.name.toLowerCase().includes(keyword)
    );

    console.log(`Products found for "${keyword}":`, matchingProducts.length);
    expect(matchingProducts.length).toBeGreaterThan(0);
  });

});
