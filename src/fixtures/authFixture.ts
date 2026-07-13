import { test as base } from "@playwright/test";
import { LoginPage } from "../pages";
import { getEnvVar } from "../utils/env_util";

type Fixtures = {
    loginPage: LoginPage;
};

export const auth = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await page.goto("/");
        const loginPage = new LoginPage(page);
        loginPage.loginUser(getEnvVar('USERNAME'),getEnvVar('PASSWORD'))
        await use(loginPage);
    },
});

export { expect } from "@playwright/test";