import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Product } from "../../test-data/productData"

export class ProductsPage extends BasePage {
    pageTitle: Locator;
    productCard: Locator;
   // cartIcon: Locator;
    productName: Locator;
   // productDescription: Locator;
   // productprice: Locator;


    constructor(page: Page) {
        super(page);
        this.pageTitle = page.locator('.title');
       // this.cartIcon = page.locator('.shopping_cart_link');
        this.productCard = page.locator('.inventory_item');
        this.productName = page.locator('.inventory_item_name ');
       // this.productDescription = page.locator('.inventory_item_desc');
       //this.productprice = page.locator('.inventory_item_price');
    }

    async verifyPageTilte() {
        await expect(this.pageTitle).toHaveText('Products');
    }

    getProductCard(product: Product): Locator {
        return this.productCard.filter({ has: this.productName.filter({ hasText: product.name }) });
    }

    async addProductToCart(product: Product) {
        await this.getProductCard(product).locator('button').click();
    }

    async openProduct(product: Product) {
        await this.productName
            .filter({
                hasText: product.name
            })
            .click();
    }

    async verifyProductPrice(product: Product) {
        await expect(
            this.getProductCard(product).locator(".inventory_item_price")
        ).toHaveText(product.price);
    }

    async verifyProductDescription(product: Product) {
        await expect(
            this.getProductCard(product).locator(".inventory_item_desc")
        ).toContainText(product.description);
    }




}