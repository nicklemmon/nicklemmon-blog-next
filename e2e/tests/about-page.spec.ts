import { test, expect } from '@playwright/test';

test.describe('The about page', () => {
  test('renders with a relevant heading and page title', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('heading', { name: 'About', level: 1 })).toBeVisible();
    await expect(page).toHaveTitle(/About/);
  });

  test('renders with an image of me', async ({ page }) => {
    await page.goto('/about');

    await expect(page.getByRole('img', { name: 'Nick Lemmon' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
  });
});
