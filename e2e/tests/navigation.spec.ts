import { test, expect } from '@playwright/test';

test.describe('The navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens and renders navigation links', async ({ page }) => {
    const banner = page.getByRole('banner');
    await banner.getByRole('button', { name: 'Open Menu' }).click();

    const nav = banner.getByRole('navigation');
    await expect(nav.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    await expect(nav.getByRole('link', { name: 'Archives' })).toHaveAttribute('href', '/archives');
    await expect(nav.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
  });

  test('closes the navigation when a link to the current page is clicked', async ({ page }) => {
    const banner = page.getByRole('banner');
    await banner.getByRole('button', { name: 'Open Menu' }).click();

    await page.getByRole('link', { name: 'Home' }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByRole('navigation')).not.toBeVisible();
  });

  test('closes when clicking the close button', async ({ page }) => {
    const banner = page.getByRole('banner');
    await banner.getByRole('button', { name: 'Open Menu' }).click();

    const closeButton = banner.getByRole('button', { name: 'Close Menu' });
    await expect(closeButton).toBeVisible();
    await closeButton.click();

    await expect(page.getByRole('navigation')).not.toBeVisible();
    await expect(banner.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  });

  test('closes when the user hits the "esc" key', async ({ page }) => {
    const banner = page.getByRole('banner');
    await banner.getByRole('button', { name: 'Open Menu' }).click();

    await page.keyboard.press('Escape');

    await expect(page.getByRole('navigation')).not.toBeVisible();
  });
});
