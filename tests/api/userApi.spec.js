import { test, expect } from '@playwright/test';

 


/* login test using API request

test('Login API : Valid Login', async ({ request }) => {

  const response = await request.post('https://dummyjson.com/auth/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    json: {   // ✅ IMPORTANT CHANGE
      username: 'kminchelle',
      password: '0lelplR'
    }
  });

  console.log('STATUS:', response.status());
  console.log('BODY:', await response.text());

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('token');
});


*/


test('simple GET', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);
});
