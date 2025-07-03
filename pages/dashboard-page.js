const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.productsText = page.getByText('Products');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
  }

  async expectCanAccessDashboard() {
    await expect(this.productsText).toBeVisible();
    await expect(this.menuButton).toBeVisible();
    await expect(this.logoutLink).toBeVisible();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}

module.exports = { DashboardPage };
