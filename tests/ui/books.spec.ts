import { test, expect } from '@playwright/test';

test.describe('Book Store Application', () => {

  test('powinien poprawnie załadować główną stronę z książkami', async ({ page }) => {
    // Nawigacja do strony
    await page.goto('/books');

    // Weryfikacja adresu URL
    await expect(page).toHaveURL(/.*books/);

    // Szukanie po linku z konkretnym tekstem
    const bookStoreLink = page.getByRole('link', { name: 'Book Store', exact: true });
    await expect(bookStoreLink).toBeVisible();

    // Weryfikacja, czy wyszukiwarka jest widoczna
    const searchInput = page.locator('#searchBox');
    await expect(searchInput).toBeVisible();

    // Weryfikacja, czy tabela z danymi (książkami) załadowała się na stronie
    const booksTable = page.locator('.books-wrapper').getByRole('table')
    await expect(booksTable).toBeVisible();
  });

});
