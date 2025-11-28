

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    console.log("hey");
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Cart' }).click();
});
 
