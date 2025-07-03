const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page

        //element locator
        this.username_textBox = page.locator('[data-test="username"]')
        this.password_textBox = page.locator('[data-test="password"]')
        this.login_button = page.getByRole('button', { name: 'LOGIN' })
        this.alert_error = page.locator('[data-test="error"]')

    }
    
    //method
    async goToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    async login(username, password){
        await this.username_textBox.click();
        await this.username_textBox.fill(username);
        await this.password_textBox.click();
        await this.password_textBox.fill(password);
        await this.login_button.click();
    }

    async expectValidationMessage(expectedMsg) {
        const invalidMessage = this.alert_error;

        // Check visibility of error messages
        const messageVisible = await invalidMessage.isVisible();

        if (messageVisible) {
            await expect(invalidMessage).toBeVisible();
            await expect(invalidMessage).toHaveText(expectedMsg, { timeout: 5000 });
        } else {
            throw new Error('No error message found on notification error.');
        }
    }
}