import { AppiumDriver, createDriver, SearchOptions, Locator, Direction } from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import { navigateBackToView, navigateBackToHome } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Gauge", () => {
    const gettingStartedText = "Getting started";
    const scalesText = "Scales";
    const customizationText = "Customization";
    const animationsText = "Animations";
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

    it("should open Getting started", async () => {
        const gettingStartedButton = await driver.findElementByText(gettingStartedText);
        await gettingStartedButton.click();
        const gettingStartedTitle = await driver.findElementByText("Getting Started");
        expect(gettingStartedTitle).to.exist;
        const isTrue = await driver.compareScreen("getting-started");
        expect(isTrue).to.be.true;
    });

    it("should open Scales", async () => {
        await navigateBackToHome(driver);
        const scalesButton = await driver.findElementByText(scalesText);
        await scalesButton.click();
        const scalesTitle = await driver.findElementByText(scalesText);
        expect(scalesTitle).to.exist;
        const isTrue = await driver.compareScreen("scales");
        expect(isTrue).to.be.true;
    });

    it("should open Customization", async () => {
        await navigateBackToHome(driver);
        const customizationButton = await driver.findElementByText(customizationText);
        await customizationButton.click();
        const customizationTitle = await driver.findElementByText(customizationText);
        expect(customizationTitle).to.exist;
        await driver.wait(5000);
        const isTrue = await driver.compareScreen("customization");
        expect(isTrue).to.be.true;
    });

    it("should open Animations", async () => {
        await navigateBackToHome(driver);
        const animationsButton = await driver.findElementByText(animationsText);
        await animationsButton.click();
        const animationsTitle = await driver.findElementByText(animationsText);
        expect(animationsTitle).to.exist;
        const isTrue = await driver.compareScreen("animations");
        expect(isTrue).to.be.true;
    });

});