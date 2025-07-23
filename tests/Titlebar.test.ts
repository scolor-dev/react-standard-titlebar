import { test, expect } from '@playwright/test';

test('Titlebar shows the title', async ({ page }) => {
  await page.goto('http://localhost:6006'); // Storybookで起動してる想定
  await expect(page.locator('.titlebar__logo')).toHaveText('My App');
});