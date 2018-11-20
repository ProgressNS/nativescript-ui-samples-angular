import { AppiumDriver, UIElement } from "nativescript-dev-appium";


export async function navigateToHome(AppiumDriver: AppiumDriver) {
    let homeTitle = await AppiumDriver.findElementByTextIfExists("DataForm Angular");
    while (homeTitle === undefined) {
        await AppiumDriver.navBack();
        await AppiumDriver.driver.setImplicitWaitTimeout(2000);
        homeTitle = await AppiumDriver.findElementByTextIfExists("DataForm Angular");
    }
}

export async function clickBelowElementCenter(element: UIElement, driver: AppiumDriver, yOffset?: number, xOffset?: number) {
    const belowDistance = yOffset ? yOffset : 30;
    const xDistance = xOffset ? xOffset : 0;
    const textfieldRect = await element.getRectangle();
    await driver.clickPoint(textfieldRect.x + textfieldRect.width / 2 + xDistance, textfieldRect.height / 2 + textfieldRect.y + belowDistance);
}