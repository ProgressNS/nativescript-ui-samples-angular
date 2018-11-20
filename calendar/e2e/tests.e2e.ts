import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import { getMonth, getYear, getMonthBG, getNextMonthOfYear, getDate, scrollToElement, navigateBackToHome, getOptionsButton } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Calendar", () => {
    const gettingStartedText = "Getting Started";
    const localizationText = "Localization";
    const populatingDataText = "Populating with data";
    const programmaticControlText = "Programmatic control";
    const viewModesText = "View modes";
    const selectionModesText = "Selection modes";
    const transitionModesText = "Transition modes";
    const stylingText = "Cell styling";
    const stylingTitleText = "Styling";
    const eventViewModesText = "Events view modes";
    const dayViewText = "Day view";
    const okButtonText = "OK";
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
        it("should open Getting started calendar", async () => {
            const gettingStartedButton = await driver.findElementByText(gettingStartedText);
            await gettingStartedButton.click();
            const gettingStartedTitle = await driver.findElementByText(gettingStartedText);
            expect(gettingStartedTitle).to.exist;
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
        });
    });
    describe(localizationText, () => {
        it("should open Bulgarian and English localizations", async () => {
            await navigateBackToHome(driver);
            const localizationButton = await driver.findElementByText(localizationText);
            await localizationButton.click();
            const localizationTitle = await driver.findElementByText(localizationText);
            expect(localizationTitle).to.exist;
            const bulgarianButton = await driver.findElementByText("BG", SearchOptions.contains);
            await bulgarianButton.click();
            const currentMonthBG = await driver.findElementByText(getMonthBG() + " " + getYear());
            expect(currentMonthBG).to.exist;
            const englishButton = await driver.findElementByText("UK", SearchOptions.contains);
            await englishButton.click();
            const currentMonthUK = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonthUK).to.exist;
        });
    });
    describe(populatingDataText, () => {
        it("should open a day with two events", async () => {
            await navigateBackToHome(driver);
            const populatingDataButton = await driver.findElementByText(populatingDataText);
            await populatingDataButton.click();
            const populatingDataTitle = await driver.findElementByText(populatingDataText);
            expect(populatingDataTitle).to.exist;
            const twelfthDay = await driver.findElementByText("12");
            await twelfthDay.click();
            const firstEvent = await driver.findElementByText("event 6");
            expect(firstEvent).to.exist;
            const secondEvent = await driver.findElementByText("second 6");
            expect(secondEvent).to.exist;
        });
    });
    describe(programmaticControlText, () => {
        it("should open next month", async () => {
            await navigateBackToHome(driver);
            const programmaticControlButton = await driver.findElementByText(programmaticControlText);
            await programmaticControlButton.click();
            const programmaticControlTitle = await driver.findElementByText(programmaticControlText);
            expect(programmaticControlTitle).to.exist;
            const nextMonthButton = await driver.findElementByText("Next month");
            await nextMonthButton.click();
            const nextMonth = await driver.findElementByText(getNextMonthOfYear());
            expect(nextMonth).to.exist;
        });
        it("should open previous month", async () => {
            const previousMonthButton = await driver.findElementByText("Prev month");
            await previousMonthButton.click();
            const previousMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(previousMonth).to.exist;
        });
        it("should open today", async () => {
            const previousMonthButton = await driver.findElementByText("Prev month");
            await previousMonthButton.click();
            const todayButton = await driver.findElementByText("Today");
            await todayButton.click();
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
        });
    });
    describe(viewModesText, () => {
        it("should open week mode", async () => {
            await navigateBackToHome(driver);
            const viewModesButton = await driver.findElementByText(viewModesText);
            await viewModesButton.click();
            const optionsButton = await getOptionsButton(driver);
            await optionsButton.click();
            const weekButton = await driver.findElementByText("Week");
            await weekButton.click();
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
            const currentDay = await driver.findElementByText(getDate().toString());
            expect(currentDay).to.exist;
        });
        it("should open month names mode", async () => {
            const optionsButton = await getOptionsButton(driver);
            await optionsButton.click();
            const monthNamesButton = await driver.findElementByText("Month names");
            await monthNamesButton.click();
            const monday = await driver.findElementByTextIfExists("Mon");
            expect(monday).to.not.exist;
        });
        it("should open year mode", async () => {
            const optionsButton = await getOptionsButton(driver);
            await optionsButton.click();
            const yearButton = await driver.findElementByText("Year");
            await yearButton.click();
            const monday = await driver.findElementByTextIfExists("Mon");
            expect(monday).to.not.exist;
            const currentYear = await driver.findElementByText(getYear().toString());
            expect(currentYear).to.exist;
        });
        it("should open day mode", async () => {
            const optionsButton = await getOptionsButton(driver);
            await optionsButton.click();
            const dayButton = await driver.findElementByText("Day");
            await dayButton.click();
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
            const currentDay = await driver.findElementByText(getDate().toString());
            expect(currentDay).to.exist;
            const monday = await driver.findElementByText("Mon");
            expect(monday).to.exist;
        });
    });
    describe(selectionModesText, () => {
        it("should open Selection modes view", async () => {
            await navigateBackToHome(driver);
            const selectionModesButton = await driver.findElementByText(selectionModesText);
            await selectionModesButton.click();
            const selectionModesTitle = await driver.findElementByText(selectionModesText);
            expect(selectionModesTitle).to.exist;
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
            const optionsButton = await getOptionsButton(driver);
            await optionsButton.click();
            const noneOption = await driver.findElementByText("None");
            expect(noneOption).to.exist;
            const singleOption = await driver.findElementByText("Single");
            expect(singleOption).to.exist;
            const multipleOption = await driver.findElementByText("Multiple");
            expect(multipleOption).to.exist;
            const rangeOption = await driver.findElementByText("Range");
            expect(rangeOption).to.exist;
            await driver.navBack();
        });
    });
    describe(transitionModesText, () => {
        it("should open Transition modes view", async () => {
            await navigateBackToHome(driver);
            const transitionModesButton = await driver.findElementByText(transitionModesText);
            await transitionModesButton.click();
            const transitionModesTitle = await driver.findElementByText(transitionModesText);
            expect(transitionModesTitle).to.exist;
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
            const optionsButton = await getOptionsButton(driver);
            await optionsButton.click();
            const noneOption = await driver.findElementByText("None");
            expect(noneOption).to.exist;
            const slideOption = await driver.findElementByText("Slide");
            expect(slideOption).to.exist;
            const stackOption = await driver.findElementByText("Stack");
            expect(stackOption).to.exist;

            if (!isAndroid) {
                const flipOption = await driver.findElementByText("Flip");
                expect(flipOption).to.exist;
                const foldOption = await driver.findElementByText("Fold");
                expect(foldOption).to.exist;
                const floatOption = await driver.findElementByText("Float");
                expect(floatOption).to.exist;
                const rotateOption = await driver.findElementByText("Rotate");
                expect(rotateOption).to.exist;
            } else {
                const plainOption = await driver.findElementByText("Plain");
                expect(plainOption).to.exist;
                const freeOption = await driver.findElementByText("Free");
                expect(freeOption).to.exist;
                const comboOption = await driver.findElementByText("Combo");
                expect(comboOption).to.exist;
                const overlapOption = await driver.findElementByText("Overlap");
                expect(overlapOption).to.exist;
            }
            await driver.navBack();
        });
    });
    describe(stylingText, () => {
        it("should open Styling view", async () => {
            await navigateBackToHome(driver);
            const stylingButton = await driver.findElementByText(stylingText);
            await stylingButton.click();
            const stylingTitle = await driver.findElementByText(stylingTitleText);
            expect(stylingTitle).to.exist;
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
        });
    });
    describe(eventViewModesText, () => {
        it("should open a day with two events", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, eventViewModesText);
            const eventViewModesButton = await driver.findElementByText(eventViewModesText);
            await eventViewModesButton.click();
            const eventViewModesTitle = await driver.findElementByText(eventViewModesText);
            expect(eventViewModesTitle).to.exist;
            const optionsButton = await getOptionsButton(driver);
            await optionsButton.click();
            const inlineButton = await driver.findElementByText("Inline");
            await inlineButton.click();
            const twelfthDay = await driver.findElementByText("12");
            await twelfthDay.click();
            const firstEvent = await driver.findElementByText("event 6");
            expect(firstEvent).to.exist;
            const secondEvent = await driver.findElementByText("second 6");
            expect(secondEvent).to.exist;
        });
    });
    describe(dayViewText, () => {
        it("should open day mode", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, dayViewText);
            const dayViewButton = await driver.findElementByText(dayViewText);
            await dayViewButton.click();
            const dayViewTitle = await driver.findElementByText(dayViewText);
            expect(dayViewTitle).to.exist;
            const currentMonth = await driver.findElementByText(getMonth() + " " + getYear());
            expect(currentMonth).to.exist;
            const currentDay = await driver.findElementByText(getDate().toString());
            expect(currentDay).to.exist;
            const monday = await driver.findElementByText("Mon");
            expect(monday).to.exist;
            const note = await driver.findElementByText("Very important meeting");
            await note.click();
            const event = await driver.findElementByText("Event Selected");
            expect(event).to.exist;
            const okButton = await driver.findElementByText(okButtonText);
            await okButton.click();
        });
    });
});