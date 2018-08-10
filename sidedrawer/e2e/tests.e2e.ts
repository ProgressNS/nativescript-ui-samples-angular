import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { isSauceLab, runType, capabilitiesName } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import "./helper";
import { goBack } from "./helper";

const isSauceRun = isSauceLab;

describe("SideDrawer", () => {
    const gettingStartedText = "Getting Started";
    const positionText = "Position";
    const eventsText = "Events";
    const openDrawerText = "OPEN DRAWER";
    const closeDrawerText = "Close Drawer";
    const navigationMenuText = "Navigation Menu";
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 15000;
    });

    after(async () => {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Driver quits!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logScreenshot(this.currentTest.title);
        }
    });
    describe("Getting started", () => {
        it("should open side drawer", async () => {
            const gettingStartedButton = await driver.findElementByText(gettingStartedText);
            await gettingStartedButton.click();
            const openDraweButton = await driver.findElementByText(openDrawerText);
            await openDraweButton.click();
            const navigationMenuTitle = await driver.findElementByText(navigationMenuText);
            expect(navigationMenuTitle).to.exist;
            const closeDrawerButton = await driver.findElementByText(closeDrawerText);
            await closeDrawerButton.click();
        });
    });
    describe("Position", () => {
        const leftText = "Left";
        const rightText = "Right";
        const topText = "Top";
        const bottomText = "Bottom";

        it("should open left side drawer", async () => {
            await driver.navBack();
            const positionButton = await driver.findElementByText(positionText);
            await positionButton.click();
            const leftButton = await driver.findElementByText(leftText);
            await leftButton.click();
            const navigationMenuTitle = await driver.findElementByText(navigationMenuText);
            expect(navigationMenuTitle).to.exist;
            const closeDrawerButton = await driver.findElementByText(closeDrawerText);
            await closeDrawerButton.click();
        });

        it("should open right side drawer", async () => {
            const rightButton = await driver.findElementByText(rightText);
            await rightButton.click();
            const navigationMenuTitle = await driver.findElementByText(navigationMenuText);
            expect(navigationMenuTitle).to.exist;
            const closeDrawerButton = await driver.findElementByText(closeDrawerText);
            await closeDrawerButton.click();
        });

        it("should open top side drawer", async () => {
            const topButton = await driver.findElementByText(topText);
            await topButton.click();
            const navigationMenuTitle = await driver.findElementByText(navigationMenuText);
            expect(navigationMenuTitle).to.exist;
        });

        it("should open bottom side drawer", async () => {
            await driver.navBack();
            const positionButton = await driver.findElementByText(positionText);
            await positionButton.click();
            const bottomButton = await driver.findElementByText(bottomText);
            await bottomButton.click();
            const navigationMenuTitle = await driver.findElementByText(navigationMenuText);
            expect(navigationMenuTitle).to.exist;
        });
    });
    describe("Events", () => {
        it("should open side drawer", async () => {
            await driver.navBack();
            const eventsButton = await driver.findElementByText(eventsText);
            await eventsButton.click();
            const openDraweButton = await driver.findElementByText(openDrawerText);
            await openDraweButton.click();
            const navigationMenuTitle = await driver.findElementByText(navigationMenuText);
            expect(navigationMenuTitle).to.exist;
            const eventText = "Drawer opened";
            const event = await driver.findElementByText(eventText);
            expect(event).to.exist;
            const closeDrawerButton = await driver.findElementByText(closeDrawerText);
            await closeDrawerButton.click();
        });
    });
});