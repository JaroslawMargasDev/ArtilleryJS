// @ts-check
const  { test } = require('@playwright/test');
import {testLogin} from './commands/login.js';

test('test', async ({ page }) => {
 await testLogin(page);
});
