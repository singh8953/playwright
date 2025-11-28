import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 // let title = page.getByTitle();
    let title1 = page.title();
  console.log("Displaying title",title1);
  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL("https://www.demoblaze.com/");

});