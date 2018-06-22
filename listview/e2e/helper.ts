import { AppiumDriver, SearchOptions } from "nativescript-dev-appium";


export async function navigateToHome(AppiumDriver: AppiumDriver) {
    let homeTitle = await AppiumDriver.findElementByTextIfExists("ListView Angular", SearchOptions.exact);
    while (homeTitle === undefined) {
        await AppiumDriver.navBack();
        await AppiumDriver.driver.setImplicitWaitTimeout(2000);
        homeTitle = await AppiumDriver.findElementByTextIfExists("ListView Angular", SearchOptions.exact);

    }
}