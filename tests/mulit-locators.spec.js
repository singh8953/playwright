import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 // let title = page.getByTitle();

  const links = await page.$$('a');
  let j=0;
  for(let i of links) {
   // console.log(i);
   let g = await i.textContent();
   console.log(j + " --  "+g);
   j++;
  }

  console.log(links.length);

});