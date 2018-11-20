import { AppiumDriver, SearchOptions, Direction, UIElement } from "nativescript-dev-appium";
import { runType } from "nativescript-dev-appium/lib/parser";

const isAndroid: boolean = runType.includes("android");
const optionsText = "Options";
const moreOptionsID = "More options";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export function getMonth() {
    const date = new Date();
    return monthNames[date.getMonth()];
}

export function getNextMonth() {
    const date = new Date();
    let month = date.getMonth() + 1;
    if (month === 12) {
        month = 0;
    }
    return monthNames[month];
}

export function getPreviousMonth() {
    const date = new Date();
    let month = date.getMonth() - 1;
    if (month === -1) {
        month = 11;
    }
    return monthNames[month];
}

export function getNextMonthOfYear() {
    const date = new Date();
    const currentMonth = date.getMonth();
    if (currentMonth === 11) {
        return getNextMonth() + " " + (getYear() + 1);
    }
    return getNextMonth() + " " + getYear();
}

export function getPreviousMonthOfYear() {
    const date = new Date();
    const currentMonth = date.getMonth();
    if (currentMonth === 0) {
        return getPreviousMonth() + " " + (getYear() - 1);
    }
    return getPreviousMonth() + " " + getYear();
}

export function getMonthBG() {
    const monthNames = ["януари", "февруари", "март", "април", "май", "юни",
        "юли", "август", "септември", "октомври", "ноември", "декември"
    ];
    const date = new Date();
    return monthNames[date.getMonth()];
}

export function getYear() {
    const date = new Date();
    return date.getFullYear();
}

export function getDate() {
    const date = new Date();
    return date.getDate();
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

export async function navigateBackToHome(driver: AppiumDriver, view?: string) {
    let location = view !== undefined ? view : "Calendar Angular";
    let homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    while (homeTitle === undefined) {
        await driver.navBack();
        await driver.wait(1000);
        homeTitle = await driver.findElementByTextIfExists(location, SearchOptions.exact);
    }
}

export function getOptionsButton(driver: AppiumDriver): Promise<UIElement> {
    return isAndroid ?
        driver.findElementByAccessibilityId(moreOptionsID) :
        driver.findElementByText(optionsText);
}