import { test, expect } from '@playwright/test';

test('Get Users API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  console.log('STATUS:', response.status());

  const text = await response.text();

  console.log('BODY:', text);

  expect(response.status()).toBe(200);
});