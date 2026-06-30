import { Page } from "@playwright/test";

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(path: string = '/') {
        await this.page.goto(path);
    }

    async getTilte() {
        await this.page.title();
    }

    async wait(second: number) {
        await this.page.waitForTimeout(second * 1000);
    }
}