import { AppiumDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { runType } from "nativescript-dev-appium/lib/parser";

const isAndroid: boolean = runType.includes("android");

export async function navigateBackToHome(driver: AppiumDriver, view?: string) {
    let location = view !== undefined ? view : "ListView Angular";
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

export async function scrollToElement(driver: AppiumDriver, element: string, direction: Direction = Direction.down){
    let listView;
    if(isAndroid){
        listView = await driver.findElementByClassName("android.widget.FrameLayout");
    }
    else{
        listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
    }
    const listItem = await listView.scrollTo(
        direction,
        () => driver.findElementByText(element, SearchOptions.exact),
        600
    )
    return listItem;
}