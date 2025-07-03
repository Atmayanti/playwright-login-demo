import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { DashboardPage } from '../pages/dashboard-page';

test.describe('Login Scenarios', () => {
  const { loginTestData } = require('./fixtures/login-data');
  for (const data of loginTestData) {
    test(`${data.testCase}`, async ({ page }) => {
      const Login = new LoginPage(page);
      const Dashboard = new DashboardPage(page);

      //before login step
      await Login.goToLoginPage();
      await Login.login(data.username, data.password);

      //login validation
      if (data.isValid) {
        await Dashboard.expectCanAccessDashboard();
        console.log("can login");
      } else {
        if (!data.expectedError) {
          throw new Error('Expected error message is missing in test data');
        }
        await Login.expectValidationMessage(data.expectedError);
        console.log("user can not login");
      }
    });
  }
});