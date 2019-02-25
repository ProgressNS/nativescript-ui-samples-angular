import { AppiumDriver, createDriver, SearchOptions, Locator, Direction } from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import { navigateBackToView, navigateBackToHome, clickBelowElement, scrollToElement } from "./helper";
const fs = require('fs');
const rimraf = require('rimraf');
const addContext = require('mochawesome/addContext');
const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Autocomplete", () => {
    const gettingStartedText = "Getting started";
    const completionModesText = "Completion modes";
    const displayModesText = "Display modes";
    const tokenLayoutsText = "Token Layouts";
    const suggestModeText = "Suggest Mode";
    const customizationText = "Customization";
    const eventsText = "Events";
    const asyncDataFetchText = "Async Data Fetch";
    const readOnlyText = "Read Only";
    const hintText = "Hint";
    const preselectedItemsText = "Preselected items";
    const pastePopUp = 1000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 15000;
        let dir = "mochawesome-report";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        rimraf('mochawesome-report/*', function () { });
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
        if (this.currentTest.state && this.currentTest.state === "failed") {
            let png = await driver.logScreenshot(this.currentTest.title);
            fs.copyFile(png, './mochawesome-report/' + this.currentTest.title + '.png', function (err) {
                if (err) {
                    throw err;
                }
                console.log('Screenshot saved.');
            });
            addContext(this, './' + this.currentTest.title + '.png');
        }
    });

    describe(gettingStartedText, () => {
        it("should open Getting started", async () => {
            const gettingStartedButton = await driver.findElementByText(gettingStartedText);
            await gettingStartedButton.click();
            await driver.wait(1000);
            const gettingStartedTitle = await driver.findElementByText(gettingStartedText);
            expect(gettingStartedTitle).to.exist;

            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("Bul");
            const suggestion = await driver.findElementByText("Bulgaria");
            await suggestion.click();
            const record = await driver.findElementByText("Bulgaria");
            expect(record).to.exist;

            const clearButton = await driver.findElementByClassName(driver.locators.getElementByName("button"));
            await clearButton.click();
            const record2 = await driver.findElementByTextIfExists("Bulgaria");
            expect(record2).not.to.exist;
        });
    });

    describe(completionModesText, () => {
        it("should open Contains view", async () => {
            await navigateBackToHome(driver);
            const completionModesButton = await driver.findElementByText(completionModesText);
            await completionModesButton.click();
            await driver.wait(1000);
            const completionModesTitle = await driver.findElementByText(completionModesText);
            expect(completionModesTitle).to.exist;

            const containsButton = await driver.findElementByText("Contains");
            await containsButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("gar");
            const hungaryItem = await driver.findElementByText("Hungary");
            expect(hungaryItem).to.exist;

            const bulgariaItem = await driver.findElementByText("Bulgaria");
            await bulgariaItem.click();
            const bulgariaField = await driver.findElementByText("Bulgaria");
            expect(bulgariaField).to.exist;
        });
        it("should open 'Starts with' view", async () => {
            await navigateBackToView(driver, completionModesText);
            const startsWithButton = await driver.findElementByText("Starts with");
            await startsWithButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("Sl");
            const slovakiaItem = await driver.findElementByText("Slovakia");
            expect(slovakiaItem).to.exist;

            const sloveniaItem = await driver.findElementByText("Slovenia");
            await sloveniaItem.click();
            const sloveniaField = await driver.findElementByText("Slovenia");
            expect(sloveniaField).to.exist;
        });
    });

    describe(displayModesText, () => {
        it("should open Tokens view", async () => {
            await navigateBackToHome(driver);
            const displayModesButton = await driver.findElementByText(displayModesText);
            await displayModesButton.click();
            await driver.wait(1000);
            const displayModesTitle = await driver.findElementByText(displayModesText);
            expect(displayModesTitle).to.exist;

            const tokensButton = await driver.findElementByText("Tokens");
            await tokensButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("Bul");
            const suggestion = await driver.findElementByText("Bulgaria");
            await suggestion.click();
            const record = await driver.findElementByText("Bulgaria");
            expect(record).to.exist;
        });

        it("should open Plain view", async () => {
            await navigateBackToView(driver, displayModesText);
            const plainButton = await driver.findElementByText("Plain");
            await plainButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("Bul");
            const suggestion = await driver.findElementByText("Bulgaria");
            await suggestion.click();
            const record = await driver.findElementByText("Bulgaria");
            expect(record).to.exist;
        });
    });

    describe(tokenLayoutsText, () => {
        it("should open 'Switch at runtime' view", async () => {
            await navigateBackToHome(driver);
            const tokenLayoutsButton = await driver.findElementByText(tokenLayoutsText);
            await tokenLayoutsButton.click();
            await driver.wait(1000);
            const tokenLayoutsTitle = await driver.findElementByText(tokenLayoutsText);
            expect(tokenLayoutsTitle).to.exist;

            const runtimeSwitchButton = await driver.findElementByText("Switch at runtime");
            await runtimeSwitchButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.click();
            const addNextTokenButton = await driver.findElementByText("Add next token");
            for (let i = 0; i < 5; i++) {
                await addNextTokenButton.click();
            }
            const australiaToken = await driver.findElementByText("Australia");
            expect((await australiaToken.location()).x).to.be.least(0);

            const horizontalButton = await driver.findElementByText("Horizontal");
            await horizontalButton.click();
            const australiaTokenHorizontal = await driver.findElementByTextIfExists("Australia");
            expect((await australiaTokenHorizontal.location()).x).to.be.lessThan(0);
        });

        it("should open Horizontal view", async () => {
            await navigateBackToView(driver, tokenLayoutsText);
            const horizontalButton = await driver.findElementByText("Horizontal");
            await horizontalButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.click();
            const addNextTokenButton = await driver.findElementByText("Add next token");
            for (let i = 0; i < 5; i++) {
                await addNextTokenButton.click();
            }
            const maldivesToken = await driver.findElementByText("Maldives");
            expect((await maldivesToken.location()).x).to.be.least(0);

            const australiaToken = await driver.findElementByTextIfExists("Australia");
            expect((await australiaToken.location()).x).to.be.lessThan(0);
        });

        it("should open Wrap view", async () => {
            await navigateBackToView(driver, tokenLayoutsText);
            const horizontalButton = await driver.findElementByText("Wrap");
            await horizontalButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.click();
            const addNextTokenButton = await driver.findElementByText("Add next token");
            for (let i = 0; i < 5; i++) {
                await addNextTokenButton.click();
            }
            const australiaToken = await driver.findElementByText("Australia");
            expect((await australiaToken.location()).x).to.be.least(0);

            const maldivesToken = await driver.findElementByText("Maldives");
            expect((await maldivesToken.location()).x).to.be.least(0);
        });
    });

    describe(suggestModeText, () => {
        it("should open Append view", async () => {
            await navigateBackToHome(driver);
            const suggestModeButton = await driver.findElementByText(suggestModeText);
            await suggestModeButton.click();
            const suggestModeTitle = await driver.findElementByText(suggestModeText);
            expect(suggestModeTitle).to.exist;

            const appendButton = await driver.findElementByText("Append");
            await appendButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B ");
            const bulgaria = await driver.findElementByText("Bulgaria");
            expect(bulgaria).to.exist;
        });
        it("should open Suggest view", async () => {
            await navigateBackToView(driver, suggestModeText);
            const suggestButton = await driver.findElementByText("Suggest");
            await suggestButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B");
            const belgiumSuggestion = await driver.findElementByText("Belgium");
            expect(belgiumSuggestion).to.exist;

            const bulgariaSuggestion = await driver.findElementByText("Bulgaria");
            await bulgariaSuggestion.click();
            const bulgaria = await driver.findElementByText("Bulgaria");
            expect(bulgaria).to.exist;
        });
        it("should open 'Suggest and Append' view", async () => {
            await navigateBackToView(driver, suggestModeText);
            const suggestAndAppendButton = await driver.findElementByText("Suggest & Append");
            await suggestAndAppendButton.click();
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B");
            const bulgariaRecords = await driver.findElementsByText("Bulgaria");
            expect(bulgariaRecords.length).to.equal(2);

            await bulgariaRecords[1].click();
            const bulgaria = await driver.findElementByText("Bulgaria");
            expect(bulgaria).to.exist;
        });
    });

    describe(customizationText, () => {
        it("should open Customization view", async () => {
            await navigateBackToHome(driver);
            const customizationButton = await driver.findElementByText(customizationText);
            await customizationButton.click();
            const customizationTitle = await driver.findElementByText(customizationText);
            expect(customizationTitle).to.exist;
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("Bul");
            const suggestionImage = isAndroid ?
                await driver.findElementByClassName("com.telerik.widget.autocomplete.SuggestionItemViewHolder") :
                await driver.findElementByAccessibilityId("bulgaria");
            const compareSuggestion = await driver.compareElement(suggestionImage, "customization-suggestion");
            expect(compareSuggestion).to.be.true;

            const suggestionText = await driver.findElementByText("Bulgaria");
            await suggestionText.click();
            const autoCompleteClassName = isAndroid ? "com.telerik.widget.autocomplete.RadAutoCompleteTextView" : driver.locators.getElementByName("scrollview");
            const autoComplete = await driver.findElementByClassName(autoCompleteClassName);
            const compareToken = await driver.compareElement(autoComplete, "customization-tokens");
            expect(compareToken).to.be.true;
        });
    });

    describe(eventsText, () => {
        it("should open Events view", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, preselectedItemsText);
            const eventsButton = await driver.findElementByText(eventsText);
            await eventsButton.click();
            await driver.wait(1000);
            const eventsTitle = await driver.findElementByText(eventsText);
            expect(eventsTitle).to.exist;

            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B");
            const bulgariaSuggestion = await driver.findElementByText("Bulgaria");
            await bulgariaSuggestion.click();
            const bulgariaToken = await driver.findElementByText("Bulgaria", SearchOptions.exact);
            expect(bulgariaToken).to.exist;

            const event1 = await driver.findElementByText("Text Changed: B");
            expect(event1).to.exist;

            const event2 = await driver.findElementByText("2 Suggestions Visible - First is Bulgaria");
            expect(event2).to.exist;

            const event3 = await driver.findElementByText("DidAutoComplete with text: Bulgaria");
            expect(event3).to.exist;

            const event4 = await driver.findElementByText("Added Token: Bulgaria");
            expect(event4).to.exist;
        });
    });

    describe.skip(asyncDataFetchText, () => {
        it("should open Async Data Fetch view", async () => {
            await navigateBackToHome(driver);
            const asyncDataFetchButton = await driver.findElementByText(asyncDataFetchText);
            await asyncDataFetchButton.click();
            await driver.wait(1000);
            const asyncDataFetchTitle = await driver.findElementByText(asyncDataFetchText);
            expect(asyncDataFetchTitle).to.exist;

            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            if (isAndroid) {
                await textField.sendKeys("a");
                // await clickBelowElement(textField, driver);
                // let aiomeAirport = await driver.findElementByTextIfExists("Aiome", SearchOptions.exact, 500);
                // expect(aiomeAirport).not.to.exist;
                await driver.wait(5000);
                await clickBelowElement(textField, driver);
                const aiomeAirport = await driver.findElementByTextIfExists("Aiome");
                expect(aiomeAirport).to.exist;
            }

            // Error prompt test
            // const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            // await textField.sendKeys("B");
            // const progressIndicator = await driver.findElementByText("In progress");
            // expect(progressIndicator).to.exist;
            // const buttons = await driver.findElementsByClassName(driver.locators.button);
            // await buttons[4].click();
            // await driver.wait(1000);
            // const returnButton = await driver.findElementByTextIfExists("Return");
            // if(returnButton !== undefined){
            //     await driver.driver.hideDeviceKeyboard("Return");
            //     await driver.wait(1000);
            // }
        });
    });

    describe(readOnlyText, () => {
        it("should open Read Only view", async () => {
            await navigateBackToHome(driver);
            const readOnlyButton = await driver.findElementByText(readOnlyText);
            await readOnlyButton.click();
            const readOnlyTitle = await driver.findElementByText(readOnlyText);
            expect(readOnlyTitle).to.exist;
            await driver.wait(1000);
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("Bul");
            const bulgariaSuggestion = await driver.findElementByText("Bulgaria");
            await bulgariaSuggestion.click();
            const isEnabled = await textField.getAttribute("enabled") === 'true';
            expect(isEnabled).to.be.true;

            const setTrueButton = await driver.findElementByText("Set true");
            await setTrueButton.click();
            const isEnabledChanged = await textField.getAttribute("enabled") === 'true';
            expect(isEnabledChanged).to.be.false;

            const bulgariaToken = await driver.findElementByText("Bulgaria");
            expect(bulgariaToken).to.exist;
        });
    });

    describe(hintText, () => {
        it("should open Hint view", async () => {
            await navigateBackToHome(driver);
            const hintButton = await driver.findElementByText(hintText, SearchOptions.exact);
            await hintButton.click();
            await driver.wait(1000);
            const hintTitle = await driver.findElementByText(hintText);
            expect(hintTitle).to.exist;

            const textFieldHint = await driver.findElementByText("select country");
            expect(textFieldHint).to.exist;
        });
    });

    describe(preselectedItemsText, () => {
        it("should open Preselected items view", async () => {
            await navigateBackToHome(driver);
            const preselectedItemsButton = await driver.findElementByText(preselectedItemsText);
            await preselectedItemsButton.click();
            await driver.wait(1000);
            const preselectedItemsTitle = await driver.findElementByText(preselectedItemsText);
            expect(preselectedItemsTitle).to.exist;

            const australia = await driver.findElementByText("Australia");
            expect(australia).to.exist;

            const austria = await driver.findElementByText("Austria");
            expect(austria).to.exist;

            const addNextTokenButton = await driver.findElementByText("Add next token");
            await addNextTokenButton.click();
            const argentina = await driver.findElementByText("Argentina");
            expect(argentina).to.exist;
        });
    });
});
