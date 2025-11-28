import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const dataOfAlt = await page.getByAltText("company-branding");

  //expect logo is visible
  await expect(dataOfAlt).toBeVisible();

  //get by placeholder mainy for input text box
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.waitForTimeout(2000);


  await page.getByRole('button', { type : "submit"}).click();
  await page.waitForTimeout(4000);

  const dataOfAlt11 = await page.getByAltText("client brand banner");

  //expect logo is visible
  await expect(dataOfAlt11).toBeVisible();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  await page.waitForTimeout(4000);


});