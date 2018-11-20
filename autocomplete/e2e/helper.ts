import { AppiumDriver, SearchOptions, UIElement, Direction } from "nativescript-dev-appium";
import { runType } from "nativescript-dev-appium/lib/parser";

const isAndroid: boolean = runType.includes("android");

export async function navigateBackToHome(driver: AppiumDriver, view?: string) {
    let location = view !== undefined ? view : "AutoComplete Angular";
    let homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    while (homeTitle === undefined) {
        await driver.navBack();
        await driver.wait(1000);
        homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    }
}

export async function navigateBackToView(driver: AppiumDriver, view: string) {
    await navigateBackToHome(driver, view);
}

export async function clickBelowElement(element: UIElement, driver: AppiumDriver, yOffset?: number, xOffset?: number) {
    const belowDistance = yOffset ? yOffset : 20;
    const xDistance = xOffset ? xOffset : 20;
    const textfieldRect = await element.getRectangle();
    await driver.clickPoint(textfieldRect.x + xDistance, textfieldRect.height + textfieldRect.y + belowDistance)
}

export async function inputRecord(autocompleteField: UIElement, record: string, driver) {
    await autocompleteField.sendKeys(record);
    await clickBelowElement(autocompleteField, driver);
}

export async function scrollToElement(driver: AppiumDriver, element: string, direction: Direction = Direction.down) {
    let listView;
    if (isAndroid) {
        listView = await driver.findElementByClassName("android.widget.FrameLayout");
    }
    else {
        listView = await driver.findElementByClassName("XCUIElementTypeTable");
    }
    const listItem = await listView.scrollTo(
        direction,
        () => driver.findElementByText(element, SearchOptions.exact),
        600
    );
    return listItem;
}
