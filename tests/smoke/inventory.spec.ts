import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages";
import { users } from "../../test-data/users";
import { Products } from "../../test-data/productData";
import { ProductsPage } from "../../src/pages/ProductsPage";


test.describe('Inventory Page', () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL!);

        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);

        await loginPage.loginUser(users.standard.username, users.standard.password);

    });

    test("Verify Inventory page is displayed", async () => {
        await productsPage.verifyPageTilte();
    });

    test("Verify Backpack details", async () => {

        await productsPage.verifyProductPrice(Products.backpack);
        await productsPage.verifyProductDescription(Products.backpack);

    });

    test("Add Backpack to Cart", async () => {

        await productsPage.addProductToCart(Products.backpack);

    });

});

