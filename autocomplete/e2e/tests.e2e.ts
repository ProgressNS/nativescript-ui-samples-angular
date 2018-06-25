import { AppiumDriver, createDriver, SearchOptions, Locator, Direction } from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import { navigateBackToView, navigateBackToHome, clickBelowElement } from "./helper";

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

    describe(gettingStartedText, () => {
        it("should open Getting started", async () => {
            const input = isAndroid ? "Bulgaria" : "Bulgaria "
            const gettingStartedButton = await driver.findElementByText(gettingStartedText);
            await gettingStartedButton.click();
            const gettingStartedTitle = await driver.findElementByText(gettingStartedText);
            expect(gettingStartedTitle).to.exist;
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys(input);
            if (isAndroid) {
                await clickBelowElement(textField, driver);
            }
            const record = await driver.findElementByText("Bulgaria");
            expect(record).to.exist;
        });
    });

    describe(completionModesText, () => {
        it("should open Contains view", async () => {
            await navigateBackToHome(driver);
            const completionModesButton = await driver.findElementByText(completionModesText);
            await completionModesButton.click();
            const completionModesTitle = await driver.findElementByText(completionModesText);
            expect(completionModesTitle).to.exist;
            const containsButton = await driver.findElementByText("Contains");
            await containsButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("gar");

            if (isAndroid) {
                await driver.wait(pastePopUp);
                const isTrue = await driver.compareScreen("completion-contains");
                expect(isTrue).to.be.true;
                await clickBelowElement(textField, driver);
            } else {
                const hungaryItem = await driver.findElementByText("Hungary");
                expect(hungaryItem).to.exist;
                const bulgariaItem = await driver.findElementByText("Bulgaria");
                await bulgariaItem.click();
            }

            const bulgariaField = await driver.findElementByText("Bulgaria");
            expect(bulgariaField).to.exist;
        });
        it("should open 'Starts with' view", async () => {
            await navigateBackToView(driver, completionModesText);
            const startsWithButton = await driver.findElementByText("Starts with");
            await startsWithButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("Sl");

            if (isAndroid) {
                await driver.wait(pastePopUp);
                const isTrue = await driver.compareScreen("completion-starts-with");
                expect(isTrue).to.be.true;
                await clickBelowElement(textField, driver);
            } else {
                const slovakiaItem = await driver.findElementByText("Slovakia");
                expect(slovakiaItem).to.exist;
                const sloveniaItem = await driver.findElementByText("Slovenia");
                await sloveniaItem.click();
            }

            const sloveniaField = await driver.findElementByText("Slovenia");
            expect(sloveniaField).to.exist;
        });
    });

    describe(displayModesText, () => {
        it("should open Tokens view", async () => {
            await navigateBackToHome(driver);
            const input = isAndroid ? "Bulgaria" : "Bulgaria "
            const displayModesButton = await driver.findElementByText(displayModesText);
            await displayModesButton.click();
            const displayModesTitle = await driver.findElementByText(displayModesText);
            expect(displayModesTitle).to.exist;
            const tokensButton = await driver.findElementByText("Tokens");
            await tokensButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys(input);

            if (isAndroid) {
                await clickBelowElement(textField, driver);
            }

            const bulgariaToken = await driver.findElementByText("Bulgaria");
            expect(bulgariaToken).to.exist;

            if (isAndroid) {
                const crossButton = await driver.findElementByClassName(driver.locators.image);
                expect(crossButton).to.exist;
            } else {
                const labels = await driver.findElementsByClassName(driver.locators.getElementByName("label"));
                expect(labels.length).to.equal(3);
            }
        });

        it("should open Plain view", async () => {
            await navigateBackToView(driver, displayModesText);
            const input = isAndroid ? "Bulgaria" : "Bulgaria "
            const plainButton = await driver.findElementByText("Plain");
            await plainButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys(input);

            if (isAndroid) {
                await clickBelowElement(textField, driver);
            }

            const bulgariaToken = await driver.findElementByText("Bulgaria");
            expect(bulgariaToken).to.exist;
            const labels = await driver.findElementsByClassName(driver.locators.getElementByName("label"));
            expect(labels.length).to.equal(2);
        });
    });

    describe(tokenLayoutsText, () => {
        it("should open 'Switch at runtime' view", async () => {
            await navigateBackToHome(driver);
            const tokenLayoutsButton = await driver.findElementByText(tokenLayoutsText);
            await tokenLayoutsButton.click();
            const tokenLayoutsTitle = await driver.findElementByText(tokenLayoutsText);
            expect(tokenLayoutsTitle).to.exist;
            const runtimeSwitchButton = await driver.findElementByText("Switch at runtime");
            await runtimeSwitchButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            if (isAndroid) {
                const addNextTokenButton = await driver.findElementByText("ADD NEXT TOKEN");
                for (let i = 0; i < 5; i++) {
                    await addNextTokenButton.click();
                }
                await textField.click();
            } else {
                await textField.sendKeys("Australia ");
                await textField.sendKeys("Finland ");
                await textField.sendKeys("France ");
                await textField.sendKeys("Germany ");
            }

            const australiaToken = await driver.findElementByText("Australia");
            expect(await australiaToken.isDisplayed()).to.be.true;
            const horizontalButton = await driver.findElementByText("Horizontal");
            await horizontalButton.click();
            const australiaTokenHorizontal = await driver.findElementByTextIfExists("Australia");
            if (isAndroid) {
                expect(australiaTokenHorizontal).not.to.exist;
            } else {
                expect(await australiaTokenHorizontal.isDisplayed()).to.be.false;
            }
        });

        it("should open Horizontal view", async () => {
            await navigateBackToView(driver, tokenLayoutsText);
            const horizontalButton = await driver.findElementByText("Horizontal");
            await horizontalButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));

            if (isAndroid) {
                await textField.click();
                const addNextTokenButton = await driver.findElementByText("ADD NEXT TOKEN");
                for (let i = 0; i < 5; i++) {
                    await addNextTokenButton.click();
                }
            } else {
                await textField.sendKeys("Australia ");
                await textField.sendKeys("Finland ");
                await textField.sendKeys("France ");
                await textField.sendKeys("Maldives ");
            }

            const maldivesToken = await driver.findElementByText("Maldives");
            expect(await maldivesToken.isDisplayed()).to.be.true;
            const australiaToken = await driver.findElementByTextIfExists("Australia");
            if (isAndroid) {
                expect(australiaToken).not.to.exist;
            } else {
                expect(await australiaToken.isDisplayed()).to.be.false;
            }
        });

        it("should open Wrap view", async () => {
            await navigateBackToView(driver, tokenLayoutsText);
            const horizontalButton = await driver.findElementByText("Wrap");
            await horizontalButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));

            if (isAndroid) {
                const addNextTokenButton = await driver.findElementByText("ADD NEXT TOKEN");
                for (let i = 0; i < 5; i++) {
                    await addNextTokenButton.click();
                }
            } else {
                await textField.sendKeys("Australia ");
                await textField.sendKeys("Finland ");
                await textField.sendKeys("France ");
                await textField.sendKeys("Maldives ");
            }

            const australiaToken = await driver.findElementByText("Australia");
            expect(await australiaToken.isDisplayed()).to.be.true;
            const maldivesToken = await driver.findElementByText("Maldives");
            expect(await maldivesToken.isDisplayed()).to.be.true;
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
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B");
            const bulgaria = await driver.findElementByText("Bulgaria");
            expect(bulgaria).to.exist;
        });
        it("should open Suggest view", async () => {
            await navigateBackToView(driver, suggestModeText);
            const suggestButton = await driver.findElementByText("Suggest");
            await suggestButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B");
            if (isAndroid) {
                await driver.wait(pastePopUp);
                const isTrue = await driver.compareScreen("suggest");
                expect(isTrue).to.be.true;
            } else {
                const belgiumSuggestion = await driver.findElementByText("Belgium");
                expect(belgiumSuggestion).to.exist;
                const bulgariaSuggestion = await driver.findElementByText("Bulgaria");
                expect(bulgariaSuggestion).to.exist;
                await bulgariaSuggestion.click();
            }
        });
        it("should open 'Suggest and Append' view", async () => {
            await navigateBackToView(driver, suggestModeText);
            const suggestAndAppendButton = await driver.findElementByText("Suggest & Append");
            await suggestAndAppendButton.click();
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B");
            if (isAndroid) {
                await driver.wait(pastePopUp);
                const isTrue = await driver.compareScreen("suggest-append");
                expect(isTrue).to.be.true;
            } else {
                const bulgariaRecords = await driver.findElementsByText("Bulgaria");
                expect(bulgariaRecords.length).to.equal(2);
                await bulgariaRecords[1].click();
            }
        });
    });

    describe(customizationText, () => {
        it("should open Customization view", async () => {
            await navigateBackToHome(driver);
            const input = isAndroid ? "Belgium" : "Bulgaria"
            const customizationButton = await driver.findElementByText(customizationText);
            await customizationButton.click();
            const customizationTitle = await driver.findElementByText(customizationText);
            expect(customizationTitle).to.exist;
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            if (isAndroid) {
                await textField.click();
            }
            await textField.sendKeys("B");
            await driver.wait(pastePopUp);

            if (!isAndroid) {
                const returnButton = await driver.findElementByTextIfExists("return");
                if (returnButton !== undefined) {
                    await driver.driver.hideDeviceKeyboard("return");
                    await driver.wait(1000);
                }
            } else {
                await driver.driver.hideDeviceKeyboard();
                await driver.wait(500);
            }

            let isTrue = await driver.compareScreen("customization-suggestions");
            expect(isTrue).to.be.true;

            if (isAndroid) {
                await clickBelowElement(textField, driver);
            } else {
                await textField.sendKeys("ulgaria ");
            }

            const token = await driver.findElementByText(input);
            expect(token).to.exist;

            if (isAndroid) {
                const flagImage = await driver.findElementByClassName(driver.locators.image);
                isTrue = await driver.compareElement(flagImage, "customization-token");
                expect(isTrue).to.be.true;
            }
        });
    });

    describe(eventsText, () => {
        it("should open Events view", async () => {
            await navigateBackToHome(driver);
            const eventsButton = await driver.findElementByText(eventsText);
            await eventsButton.click();
            const eventsTitle = await driver.findElementByText(eventsText);
            expect(eventsTitle).to.exist;
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys("B");

            if (isAndroid) {
                await clickBelowElement(textField, driver);
            } else {
                const bulgariaSuggestion = await driver.findElementByText("Bulgaria");
                await bulgariaSuggestion.click();
            }

            const bulgariaToken = await driver.findElementByText("Bulgaria", SearchOptions.exact);
            expect(bulgariaToken).to.exist;
            const event1 = await driver.findElementByText("Text Changed: B");
            expect(event1).to.exist;
            const event2 = await driver.findElementByText("Suggestion View Became Visible");
            expect(event2).to.exist;
            const event3 = await driver.findElementByText("DidAutoComplete with text: Bulgaria");
            expect(event3).to.exist;
            const event4 = await driver.findElementByText("Added Token: Bulgaria");
            expect(event4).to.exist;
        });
    });

    describe(asyncDataFetchText, () => {
        it("should open Async Data Fetch view", async () => {
            await navigateBackToHome(driver);
            const asyncDataFetchButton = await driver.findElementByText(asyncDataFetchText);
            await asyncDataFetchButton.click();
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
            const input = isAndroid ? "Bulgaria" : "Bulgaria "
            const readOnlyButton = await driver.findElementByText(readOnlyText);
            await readOnlyButton.click();
            const readOnlyTitle = await driver.findElementByText(readOnlyText);
            expect(readOnlyTitle).to.exist;
            const textField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await textField.sendKeys(input);

            if (isAndroid) {
                await clickBelowElement(textField, driver);
            }

            const setTrueButton = await driver.findElementByText("Set true");
            await setTrueButton.click();

            if (isAndroid) {
                let button;
                await driver.wait(1000);
                try {
                    button = await driver.findElementByClassName(driver.locators.image);
                } catch {
                    button = undefined;
                }
                expect(button).not.to.exist;
            } else {
                const buttons = await driver.findElementsByClassName(driver.locators.button);
                await buttons[3].click();
            }

            const bulgariaToken = await driver.findElementByText("Bulgaria");
            expect(bulgariaToken).to.exist;
        });
    });

    describe(hintText, () => {
        it("should open Hint view", async () => {
            await navigateBackToHome(driver);
            // This scroll is buggy for android so I comment it for now
            // const listview = await driver.findElementByClassName(driver.locators.getElementByName("listview"));
            // const scroll = await listview.scrollTo(
            //     Direction.down,
            //     async () => {
            //         await driver.findElementByText(hintText, SearchOptions.exact);
            //     })

            const wd = driver.wd();
            const action = new wd.TouchAction(driver.driver);
            action.press({ x: 52, y: 499 })
                .moveTo({ x: -2, y: -294 })
                .release();
            await action.perform();
            await driver.wait(500);

            const hintButton = await driver.findElementByText(hintText, SearchOptions.exact);
            await hintButton.click();
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