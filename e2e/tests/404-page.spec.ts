import { test, expect } from '@playwright/test';

test.describe('the error page', () => {
  test('renders the error in the title and a link back to the landing page', async ({ page }) => {
    await page.goto('/whatever');

    await expect(page).toHaveTitle(/404 Error/);
    await expect(page.getByRole('heading', { name: '404 Error' })).toBeVisible();

    const link = page.getByRole('link', { name: 'Take me somewhere legit' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/');
  });
});
