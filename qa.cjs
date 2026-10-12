const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs');
const path=require('path');
(async()=>{const browser=await chromium.launch({headless:true,channel:"chrome"});const page=await browser.newPage();const base=process.env.QA_URL||'http://localhost:3013';const errors=[];page.on('pageerror',e=>errors.push(e.message));let count=0;
await page.setViewportSize({width:390,height:844});await page.goto(base);await page.getByRole('button',{name:'Open menu'}).click();await page.getByRole('navigation').getByRole('link',{name:'About',exact:true}).click();await page.waitForURL('**/about');await page.goto(base);await page.getByRole('tab',{name:/Prayer/}).click();if(!(await page.getByRole('tabpanel').innerText()).includes('Solution Is In Prayer'))throw Error('Journey tab failed');
await page.goto(base+'/teachings');await page.getByLabel('Search teachings').fill('rooted');if(await page.locator('.library-grid>a').count()!==1)throw Error('Search');await page.getByLabel('Search teachings').fill('zzzz');await page.getByRole('button',{name:'Reset filters'}).click();await page.getByLabel('Category').selectOption('Prophetic Messages');if(await page.locator('.library-grid>a').count()!==1)throw Error('Category');
await page.goto(base+'/prayer-requests');await page.getByLabel('Your prayer request').fill('QA request for review only');await page.getByRole('checkbox').check();await page.getByRole('button',{name:'Review my request'}).click();const href=await page.getByRole('link',{name:'Continue to WhatsApp'}).getAttribute('href');if(!href.startsWith('https://wa.me/263789750904?text='))throw Error('Wrong handoff');
await page.goto(base+'/events/not-published');if(!(await page.locator('h1').innerText()).includes('back home'))throw Error('404');
await page.setViewportSize({width:1440,height:1000});await page.goto(base);await page.locator('img').evaluateAll(async imgs=>Promise.all(imgs.map(async i=>{i.loading='eager';await i.decode().catch(()=>{})})));await page.waitForTimeout(900);await page.screenshot({path:path.resolve('../desktop.png'),fullPage:true});await page.setViewportSize({width:390,height:844});await page.goto(base);await page.screenshot({path:path.resolve('../mobile.png'),fullPage:true});
await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base);if(await page.locator('.reveal').first().evaluate(e=>getComputedStyle(e).opacity)!=='1')throw Error('Reduced motion');if(errors.length)throw Error(errors.join('\n'));console.log(JSON.stringify({base,checks:count,interactions:'menu, journey, search, filters, prayer review, handoff URL, unpublished event, reduced motion',errors}));await browser.close()})().catch(e=>{console.error(e);process.exit(1)});







