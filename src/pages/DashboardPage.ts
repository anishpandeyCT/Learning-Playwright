import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    inventoryTitle = this.page.locator(".title");

    async verifyDashboard() {
        await expect(this.inventoryTitle).toHaveText("Products");
    }
}