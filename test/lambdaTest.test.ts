import {Browser, Page, chromium} from "playwright";
let page : Page
let browser: Browser

beforeAll(async () => {
  browser = await chromium.launch({
    headless: false
})
});

beforeEach(async () => {
    //page = await browser.newPage();
    await page.goto('https://www.lambdatest.com/selenium-playground/');
});

describe('Test Scenarios',()=>{

test('Input Form Demo Webpage', async () => {

  await page.getByRole('link', { name: 'Input Form Submit' }).click();
  await page.getByPlaceholder('Name', { exact: true }).fill('Testing');
  await page.getByPlaceholder('Email', { exact: true }).fill('testing@gmail.com');
  await page.getByPlaceholder('Password').fill('Testing123');
  await page.getByPlaceholder('Company').fill('Testing ');
  await page.getByPlaceholder('Website').fill('testing ');
  await page.getByRole('combobox').selectOption('AE');
  await page.getByPlaceholder('City').fill('Dubai');
  await page.getByPlaceholder('Address 1').fill('Dubai');
  await page.getByPlaceholder('Address 2').fill('Dubai');
  await page.getByPlaceholder('State').fill('Dubai');
  await page.getByPlaceholder('Zip code').fill('00000');
  await page.getByRole('button', { name: 'Submit' }).click();
  const message = await page.locator("//p[contains(@class,'success-msg hidden')]").textContent();
  expect(message).toContain("Thanks for contacting us, we will get back to you shortly.")
});

test('Verify Page title of Playwright Testing webpage', async ()=> {
        await page.getByRole('link' ,{ name:'Platform'}).hover();
        await page.getByRole('link',{name : 'Playwright Playwright Testing'}).click();
        expect(await page.title()).toEqual("Playwright Testing on Cloud | Automate Playwright Tests With LambdaTest");
      });
});

afterEach(async () => {
    await page.close();
});

afterAll(async () => {
    await browser.close();
});
  
