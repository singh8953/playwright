import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('has title', async ({ page }) => {
   await page.goto('https://www.demoblaze.com/');
   // let title = page.getByTitle();
    let title1 = page.title();
   console.log("Displaying title",title1);
   await expect(page).toHaveTitle("STORE");
   await expect(page).toHaveURL("https://www.demoblaze.com/");
   await page.waitForTimeout(4000);
   await page.locator("//a[@id='login2']").click();
   await page.waitForTimeout(1000);
   //incorrect login its not working
   /*

    await page.locator('#loginusername').fill('nids8953Rhhh');
    await page.waitForTimeout(1000);
    await page.locator('#loginpassword').fill('nids8953hhhdsfsdfds');

    //await page.locator(".btn.btn-primary").click();
    //await page.locator("button[onclick='logIn()']").click();

    //login
    await page.locator("//button[normalize-space()='Log in']").click();*/


   //close
   // await page.locator("div[id='logInModal'] div[class='modal-footer'] button:nth-child(1)").click();


    await page.waitForTimeout(1000);



   //     await page.locator("//a[@id='login2']").click();
    await page.waitForTimeout(1000);
    await page.locator('#loginusername').fill('nids8953R');
    await page.waitForTimeout(1000);
    await page.locator('#loginpassword').fill('nids8953');
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForTimeout(3000);

    await expect(page.locator("#nameofuser")).toHaveText("Welcome nids8953R");



    ///await expect(page.locator("#nameofuser")).isVisible();
    // await popup.click('#login-btn');
    // await popup.locator('.btn .btn-secondary').click(); 
   
  

   /* await page.locator("(//a[normalize-space()='Laptops'])[1]").click();
    await page.waitForTimeout(2000);
    await page.locator("a:has-text('MacBook'):has-text('air')").click();
    await page.waitForTimeout(2000);
    await page.locator(".btn.btn-success.btn-lg").click()
    await page.waitForTimeout(2000);*/

      //a[contains(text(),'Forget password?')]
    await page.locator("#cartur").click();
    await page.waitForTimeout(2000);

// Check if the table body exists
const tbody = page.locator('#tbodyid');
console.log('tbody exists:', await tbody.count() > 0);

// Check if any rows exist with different selectors
const rows1 = page.locator('tr');
console.log('All tr elements:', await rows1.count());

const rows2 = page.locator('#tbodyid tr');
console.log('Rows in tbody:', await rows2.count());

const rows3 = page.locator('table tr');
console.log('Rows in table:', await rows3.count());

/*
let i=0
while(page.locator("#tbodyid tr"))
{
         console.log("Hey");
         const cell = page.locator(`#tbodyid tr:nth-child(${i}) td:nth-child(1)`);
          console.log("ceel info", cell.count);
          i++;

}*/

for (let i = 1; i <= await rows2.count(); i++) {
  const cell = await page.locator(`#tbodyid tr:nth-child(${i}) td:nth-child(2)`);
  console.log("cell info", await cell.textContent());
  await page.waitForTimeout(1000)
  const text = await cell.textContent();
  text.includes("Nexon");

}

});

