import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Products extends BasePage {
    constructor(page: Page) {
        super(page);
    }


}