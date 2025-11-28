import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  // let title = page.getByTitle();
  let title1 = page.title();
  console.log("Displaying title",title1);
  await expect(await page.locator("#name")).toBeVisible();
  await expect(await page.locator("#name")).toBeEmpty();
  await expect(await page.locator("#name")).toBeEditable();
  await expect(await page.locator("#name")).toBeEnabled();
  await page.locator("#name").fill("nids");
  await page.waitForTimeout(3000);
  // await expect(await page.locator("#name")).toContainText("nids");


  // validate radio button
  await page.locator('#male').check();
  await expect(await page.locator('#male')).toBeChecked();

  await page.waitForTimeout(3000);

  



});