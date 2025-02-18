// @ts-check
const {expect} = require('@playwright/test');

async function testLogin( page )
{
  await page.goto('https://commitquality.com/');
  await page.getByTestId('navbar-login').click();
  await page.getByTestId('username-textbox').fill('test');
  await page.getByTestId('password-textbox').fill('test');
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('navbar-logout')).toBeVisible();
}

module.exports = {testLogin};