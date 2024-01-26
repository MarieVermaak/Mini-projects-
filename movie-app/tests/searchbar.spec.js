const { test, expect } = require('@playwright/test');

test('has searchbar', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  const searchBar = await page.locator("#search").all()
  expect(searchBar.length).toBe(1);
})

test('searchbar is editable', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  const searchBar = await page.locator("#search").first()
  await expect(searchBar).toBeEditable();
})