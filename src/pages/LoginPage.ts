import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    username = this.page.getByRole('textbox', { name: 'Username' });
    password = this.page.getByRole('textbox', { name: 'Password' });
    loginBtn = this.page.getByRole('button');

    async open() {
        await this.goto("/");
    }

    async loginUser(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async verifyLogin(){
        await expect(this.page).toHaveURL(/inventory/);
    }

}