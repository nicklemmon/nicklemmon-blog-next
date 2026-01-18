import { test, expect } from '@playwright/test';

test.describe('The index page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders with relevant heading and page title', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: /A frontend engineering leader driven to create accessible user interfaces at scale/,
      })
    ).toBeVisible();
    await expect(page).toHaveTitle('Nick Lemmon, frontend engineering leader');
  });

  test('renders the correct links', async ({ page }) => {
    // Banner section
    const banner = page.getByRole('banner');
    await expect(banner.getByRole('link', { name: 'Nick Lemmon' })).toHaveAttribute('href', '/');

    // Main section
    const main = page.getByRole('main');

    await expect(
      main.getByRole('link', { name: 'Nick Lemmon on GitHub (Opens in a new tab)' })
    ).toBeVisible();
    await expect(
      main.getByRole('link', { name: 'Nick Lemmon on GitHub (Opens in a new tab)' })
    ).toHaveAttribute('href', 'https://github.com/nicklemmon');

    await expect(
      main.getByRole('link', { name: 'Nick Lemmon on LinkedIn (Opens in a new tab)' })
    ).toBeVisible();
    await expect(
      main.getByRole('link', { name: 'Nick Lemmon on LinkedIn (Opens in a new tab)' })
    ).toHaveAttribute('href', 'https://linkedin.com/in/nicklemmon');

    // Article cards - a maximum of four should render and none should have an empty href
    const articleCards = main.locator('[data-id="article-card"]');
    await expect(articleCards).toHaveCount(4);

    // Verify none have empty href (check each card)
    const count = await articleCards.count();
    for (let i = 0; i < count; i++) {
      await expect(articleCards.nth(i)).not.toHaveAttribute('href', '');
    }

    await expect(main.getByRole('link', { name: 'Archives' })).toBeVisible();
    await expect(main.getByRole('link', { name: 'Archives' })).toHaveAttribute('href', '/archives');

    // Footer (contentinfo) section
    const footer = page.getByRole('contentinfo');

    await expect(
      footer.getByRole('link', { name: 'Nick Lemmon on GitHub (Opens in a new tab)' })
    ).toHaveAttribute('href', 'https://github.com/nicklemmon');
    await expect(
      footer.getByRole('link', { name: 'Nick Lemmon on LinkedIn (Opens in a new tab)' })
    ).toHaveAttribute('href', 'https://linkedin.com/in/nicklemmon');
  });
});
