
import { expect, test } from "@playwright/test";
import { LoginPage, DashboardPage } from "../../src/pages";
import { users } from "../../test-data/users"

/*test("Login Successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await loginPage.open();
    await loginPage.loginUser(users.standard.username, users.standard.password);
    await loginPage.verifyLogin();
    await dashboard.verifyDashboard();


});
*/

test.describe('Sauce Lab Login Feature', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL!);
    });
    test('valid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginUser(users.standard.username, users.standard.password);
    });

    test('Invailed login', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.loginUser(users.locked.username, users.locked.password);
        const errorMsg = await loginpage.getError();
        expect(errorMsg).toBe(users.locked.errorMessage)
        console.log("Invalid user print")
    });
});


