import { AppiumDriver } from "nativescript-dev-appium";

export async function goBack(driver: AppiumDriver) {
    const backButtonText = "Back";
    const backButton = await driver.findElementByTextIfExists(backButtonText);
    if (backButton !== undefined) {
        await backButton.click();
    }
}