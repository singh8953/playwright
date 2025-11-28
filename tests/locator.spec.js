import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 // let title = page.getByTitle();
    //let title1 = page.title();
  //console.log("Displaying title",title1);
  //await expect(page).toHaveTitle("STORE");
  //await expect(page).toHaveURL("https://www.demoblaze.com/");


//xpath selector
  //a[contains(text(),'Forget password?')]
  //a[@id='sign2']
  //a[@text()='Forget password?']  >> check this one

  //csss selector
  //#id 
  //.className

  //await page.locator('.btn .btn-secondary').click()

  // await page.locator('#signin2').fill()
//await page.fill('xpath','content')
//await page.locator('.class="xyz abc"').click()
//button[@onclick='register()']
//await page.locator('//button[@onclick="register()"]').click()


  //await page.click('#signin2');
  await page.waitForTimeout(2000);
  
  

});