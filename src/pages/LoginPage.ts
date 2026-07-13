import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    username: Locator;
    password: Locator;
    loginBtn: Locator;
    errorMsg: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button');
        this.errorMsg = page.locator('[data-test="error"]');
    }

    // async open() {
    //     await this.goto("/");
    // }

    async loginUser(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async verifyLogin() {
        await expect(this.page).toHaveURL(/inventory/);
    }

    async getError() {
        const actualErrorMsg = await this.errorMsg.textContent();
        return actualErrorMsg;
    }

}