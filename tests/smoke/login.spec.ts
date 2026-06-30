
import { test } from "@playwright/test";
import { LoginPage, DashboardPage } from "../../src/pages";
import {users } from "../../test-data/users"

test("Login Successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await loginPage.open();
    await loginPage.loginUser(users.standard.username, users.standard.password);
    await loginPage.verifyLogin();
    await dashboard.verifyDashboard();


});

