import { AppiumDriver, SearchOptions } from "nativescript-dev-appium";


export async function navigateToHome(driver: AppiumDriver, view?: string) {
    let location = view !== undefined ? view : "Chart Angular";
    let homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    while (homeTitle === undefined) {
        await driver.navBack();
        await driver.wait(1000);
        homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    }
}

export async function navigateToView(driver: AppiumDriver, view: string) {
    await navigateToHome(driver, view);
}