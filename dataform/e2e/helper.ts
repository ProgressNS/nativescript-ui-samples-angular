import { AppiumDriver, UIElement, SearchOptions, Direction } from "nativescript-dev-appium";
import { runType } from "nativescript-dev-appium/lib/parser";

const isAndroid: boolean = runType.includes("android");
export async function navigateBackToHome(driver: AppiumDriver, view?: string) {
    let location = view !== undefined ? view : "DataForm Angular";
    let homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    while (homeTitle === undefined) {
        await driver.navBack();
        await driver.wait(1000);
        homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    }
}

export async function clickBelowElementCenter(element: UIElement, driver: AppiumDriver, yOffset?: number, xOffset?: number) {
    const belowDistance = yOffset ? yOffset : 30;
    const xDistance = xOffset ? xOffset : 0;
    const textfieldRect = await element.getRectangle();
    await driver.clickPoint(textfieldRect.x + textfieldRect.width / 2 + xDistance, textfieldRect.height / 2 + textfieldRect.y + belowDistance);
}

export async function navigateBackToView(driver: AppiumDriver, view: string) {
    await navigateBackToHome(driver, view);
}

export async function scrollToElement(driver: AppiumDriver, element: string, direction: Direction = Direction.down) {
    let listView;
    if (isAndroid) {
        listView = await driver.findElementByClassName("android.widget.FrameLayout");
    }
    else {
        listView = await driver.findElementByClassName("XCUIElementTypeApplication");
    }
    const listItem = await listView.scrollTo(
        direction,
        () => driver.findElementByText(element, SearchOptions.contains),
        600
    );
    return listItem;
}