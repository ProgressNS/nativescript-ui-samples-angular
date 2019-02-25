import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateBackToHome, clickBelowElementCenter, navigateBackToView, scrollToElement } from "./helper";
import { ImageOptions } from "nativescript-dev-appium/lib/image-options";
const fs = require('fs');
const rimraf = require('rimraf');
const addContext = require('mochawesome/addContext');
const isSauceRun = isSauceLab;
const isAndroid: Boolean = runType.includes("android");

describe("DataForm", () => {
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 10000;
        let dir = "mochawesome-report";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        rimraf('mochawesome-report/*', function () { });
    });

    after(async () => {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Quit driver!");
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

    describe("Getting Started", () => {
        it("Navigate to Getting started example", async () => {
            await navigateBackToHome(driver);
            const item = await driver.findElementByText("Getting started", SearchOptions.exact);
            await item.click();

            const title = await driver.findElementByText("Getting started", SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            if (isAndroid) {
                let ageLabel = await driver.findElementByText("23", SearchOptions.exact);
                expect(ageLabel).to.exist;

                let email = await driver.findElementByText("john@company.com", SearchOptions.exact);
                expect(email).exist;

                let streetLabel = await driver.findElementByText("11", SearchOptions.exact);
                expect(streetLabel).to.exist;
            }

            else {
                let incrementBtn = await driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"Increment\"])[1]");
                await incrementBtn.click();

                let ageLabel = await driver.findElementByAccessibilityId("24");
                expect(ageLabel).to.exist;

                let email = await driver.findElementByText("john@company.com", SearchOptions.exact);
                expect(email).exist;

                let incrementBtn2 = await driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"Decrement\"])[2]");
                await incrementBtn2.click();
                let streetLabel = await driver.findElementByAccessibilityId("10");
                expect(streetLabel).to.exist;
            }
        });
    });

    describe("Getting Started JSON", () => {
        it("Navigate to Getting started example", async () => {
            await navigateBackToHome(driver);
            const item = await driver.findElementByText("Getting started JSON", SearchOptions.exact);
            await item.click();

            const title = await driver.findElementByText("Getting started JSON", SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            if (isAndroid) {
                let ageLabel = await driver.findElementByText("23", SearchOptions.exact);
                expect(ageLabel).to.exist;

                let email = await driver.findElementByText("john@company.com", SearchOptions.exact);
                expect(email).exist;

                let streetLabel = await driver.findElementByText("11", SearchOptions.exact);
                expect(streetLabel).to.exist;
            }

            else {
                let incrementBtn = await driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"Increment\"])[1]");
                await incrementBtn.click();

                let ageLabel = await driver.findElementByAccessibilityId("24");
                expect(ageLabel).to.exist;

                let email = await driver.findElementByText("john@company.com", SearchOptions.exact);
                expect(email).exist;

                let incrementBtn2 = await driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"Decrement\"])[2]");
                await incrementBtn2.click();
                let streetLabel = await driver.findElementByAccessibilityId("10");
                expect(streetLabel).to.exist;
            }
        });
    });

    describe("Properties", () => {
        it("Navigate to Properties example", async () => {
            await navigateBackToHome(driver);
            const item = await driver.findElementByText("Properties", SearchOptions.exact);
            await item.click();

            const title = await driver.findElementByText("Properties", SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            let nameLabel = await driver.findElementByText("Name", SearchOptions.exact);
            expect(nameLabel).to.exist;
            let nameValue = await driver.findElementByText("John", SearchOptions.exact);
            expect(nameValue).to.exist;
            await nameValue.sendKeys("1");
            nameValue = await driver.findElementByText("John1");
            expect(nameValue).to.exist;
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }

            let ageLabel = await driver.findElementByText("Age", SearchOptions.exact);
            expect(ageLabel).to.exist;
            let ageNumber = await driver.findElementByText("23", SearchOptions.exact);
            expect(ageNumber).to.exist;


            let email = await driver.findElementByText("john@company.com", SearchOptions.exact);
            expect(email).exist;

            let streetName = await driver.findElementByText("Street Name", SearchOptions.exact);
            expect(streetName).to.exist;
        });
    });

    describe("Properties JSON", () => {
        it("Navigate to Properties JSON example", async () => {
            await navigateBackToHome(driver);
            const item = await driver.findElementByText("Properties JSON", SearchOptions.exact);
            await item.click();

            const title = await driver.findElementByText("Properties JSON", SearchOptions.exact);
            expect(title).to.exist;
        });

        it("Verify data-form components are visible and responsive", async () => {
            let nameLabel = await driver.findElementByText("Name", SearchOptions.exact);
            expect(nameLabel).to.exist;
            let nameValue = await driver.findElementByText("John", SearchOptions.exact);
            expect(nameValue).to.exist;
            await nameValue.click();
            await nameValue.sendKeys("1");
            nameValue = await driver.findElementByText("John1", SearchOptions.exact);
            expect(nameValue).to.exist;
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }

            let ageLabel = await driver.findElementByText("Age", SearchOptions.exact);
            expect(ageLabel).to.exist;
            let ageNumber = await driver.findElementByText("23", SearchOptions.exact);
            expect(ageNumber).to.exist;
            await ageNumber.sendKeys("4");
            ageNumber = await driver.findElementByText("234", SearchOptions.exact);
            expect(ageNumber).to.exist;
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }

            let email = await driver.findElementByText("john@company.com", SearchOptions.exact);
            expect(email).exist;

            let streetName = await driver.findElementByText("Street Name", SearchOptions.exact);
            expect(streetName).to.exist;
            let streetNameValue = await driver.findElementByText("5th Avenue", SearchOptions.exact);
            expect(streetNameValue).to.exist;
        });
    });

    const editors = "Editors";
    describe("Editors Common", () => {
        it("Navigate to Editors Common example", async () => {
            await navigateBackToHome(driver);
            const item = await driver.findElementByText(editors, SearchOptions.exact);
            await item.click();
            let title = await driver.findElementByText(editors, SearchOptions.exact);
            expect(title).to.exist;
            const common = await driver.findElementByText("Common", SearchOptions.exact);
            await common.click();
        });

        it("Verify data-form picker is visible and responsive", async () => {
            let movieTitle;
            if (isAndroid) {
                movieTitle = await driver.findElementByText("Zootopia", SearchOptions.exact);
            }
            else {
                movieTitle = await driver.findElementByAccessibilityId("Zootopia", SearchOptions.exact);
            }
            expect(movieTitle).to.exist;
            await movieTitle.click();
            if (isAndroid) {
                const captAmerica = await driver.findElementByText("Captain America");
                await captAmerica.click();
            }
            else {
                const pickerWheel = await driver.findElementByClassName("XCUIElementTypePickerWheel");
                expect(pickerWheel).to.exist;
            }
        });

        it("Verify data-form date is visible and responsive", async () => {
            let date;
            let month;
            let day;
            if (isAndroid) {
                date = await driver.findElementByText("Wed, 06.04", SearchOptions.exact);
                await date.click();
                if (runType.includes("android27") || runType.includes("android23")) {
                    month = await driver.findElementByText("Apr", SearchOptions.exact);
                    day = await driver.findElementByText("06", SearchOptions.exact);
                }
                if (runType.includes("android24")) {
                    month = await driver.findElementByText("Wed, Apr 6", SearchOptions.contains);
                    day = await driver.findElementByText("6", SearchOptions.exact);
                }
            }
            else {
                date = await driver.findElementByAccessibilityId("Apr 6, 2016", SearchOptions.exact);
                await date.click();
                month = await driver.findElementByText("April", SearchOptions.exact);
                day = await driver.findElementByText("6", SearchOptions.exact);
            }
            expect(date).to.exist;
            expect(day).to.exist;
            expect(month).to.exist;

            if (isAndroid) {
                if (runType.includes("android23")) {
                    return;
                } else {
                    const seven = await driver.findElementByText("7", SearchOptions.exact);
                    await seven.click();
                }
                const ok = await driver.findElementByText("OK", SearchOptions.exact);
                await ok.click();
                date = await driver.findElementByText("Thu, 07.04", SearchOptions.exact);
                expect(date).to.exist;
            } else {
                await clickBelowElementCenter(day, driver);
                date = await driver.findElementByAccessibilityId("Apr 7, 2016", SearchOptions.exact);
                await date.click();
            }
        });
    });

    describe("Editors AutoComplete", () => {
        it("Navigate to Autocomplete editor page", async () => {
            await navigateBackToView(driver, editors);
            const autocompleteTitle = await driver.findElementByText("AutoComplete", SearchOptions.exact);
            await autocompleteTitle.click();

            let checkValuesBtn = await driver.findElementByText("check values", SearchOptions.contains);
            expect(checkValuesBtn).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            let from = await driver.findElementByText("From:", SearchOptions.exact);
            expect(from).to.exist;

            let to = await driver.findElementByText("To:", SearchOptions.exact);
            expect(from).to.exist;

            // Enable for iOS after bug is fixed.
            // https://github.com/telerik/nativescript-ui-feedback/issues/646
            if (isAndroid) {
                let toName = await driver.findElementByText("New York", SearchOptions.contains);
                await toName.click();
                await toName.sendKeys(" City");
                toName = await driver.findElementByText("New York City", SearchOptions.exact);
                expect(toName).to.exist;
                await driver.driver.hideDeviceKeyboard("Done");
            }
            let fromCity = await driver.findElementByText("Belfast City, BHD", SearchOptions.exact);
            expect(fromCity).to.exist;
        });
    });

    describe("Editors Labels", () => {
        it("Navigate to Labels editor page", async () => {
            await navigateBackToView(driver, editors);
            const labelsItem = await driver.findElementByText("Labels", SearchOptions.exact);
            await labelsItem.click();

            let backArrowButton = await driver.findElementByText("<", SearchOptions.exact);
            expect(backArrowButton).to.exist;
        });

        it("Verify labels are visible", async () => {
            let seasonLabel = await driver.findElementByText("Season", SearchOptions.exact);
            expect(seasonLabel).to.exist;

            let seasonYear = await driver.findElementByText("2016-2017", SearchOptions.exact);
            expect(seasonYear).to.exist;

            let championLabel = await driver.findElementByText("Champions", SearchOptions.exact);
            expect(championLabel).to.exist;

            let championTeam = await driver.findElementByText("Real Madrid", SearchOptions.exact);
            expect(championTeam).to.exist;

            let topScorers = await driver.findElementByText("Top goalscorers", SearchOptions.exact);
            expect(topScorers).to.exist;

            let name = await driver.findElementByText("Christiano Ronaldo (12)", SearchOptions.contains);
            expect(name).to.exist;

        });

        it("Change data-form item and verify labels are changed", async () => {
            let backArrowButton = await driver.findElementByText("<", SearchOptions.exact);
            await backArrowButton.click();

            let seasonLabel = await driver.findElementByText("Season", SearchOptions.exact);
            expect(seasonLabel).to.exist;

            let seasonYear = await driver.findElementByText("2015-2016", SearchOptions.exact);
            expect(seasonYear).to.exist;

            let championLabel = await driver.findElementByText("Champions", SearchOptions.exact);
            expect(championLabel).to.exist;

            let championTeam = await driver.findElementByText("Real Madrid", SearchOptions.exact);
            expect(championTeam).to.exist;

            let runnersUp = await driver.findElementByText("Atlético Madrid", SearchOptions.contains);
            expect(runnersUp).to.exist;

            let topScorers = await driver.findElementByText("Top goalscorers", SearchOptions.exact);
            expect(topScorers).to.exist;

            let name = await driver.findElementByText("Robert Lewandowski (9)", SearchOptions.contains);
            expect(name).to.exist;
        });
    });

    describe("Editors Custom", () => {
        it("Navigate to Custom editor page", async () => {
            await navigateBackToView(driver, editors);
            const customEditorTitle = await driver.findElementByText("Custom Editors", SearchOptions.exact);
            await customEditorTitle.click();

            let tapBtn = await driver.findElementByText("23 (tap to increase)", SearchOptions.contains);
            expect(tapBtn).to.exist;
        });

        it("Verify data-form components are visible", async () => {
            let nameLabel = await driver.findElementByText("Name", SearchOptions.exact);
            expect(nameLabel).to.exist;

            let name = await driver.findElementByText("John", SearchOptions.exact);
            await name.sendKeys("Wick");
            name = await driver.findElementByText("JohnWick", SearchOptions.exact);
            expect(name).to.exist;
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }
            let birthDateLabel = await driver.findElementByText("Birth Date", SearchOptions.exact);
            expect(birthDateLabel).to.exist;
            let birthDate;
            if (isAndroid) {
                birthDate = await driver.findElementByText("Sun, 16.05", SearchOptions.exact);
            }
            else {
                birthDate = await driver.findElementByText("May 16, 1993", SearchOptions.exact);
            }
            expect(birthDate).to.exist;

            let tapBtn = await driver.findElementByText("23 (tap to increase)", SearchOptions.contains);
            expect(tapBtn).to.exist;
            await tapBtn.click();
            tapBtn = await driver.findElementByText("24 (tap to increase)", SearchOptions.exact);
            expect(tapBtn).to.exist;
        });
    });

    describe("Validation", () => {
        it("Navigate to Validators page", async () => {
            await navigateBackToHome(driver);
            const validationTitle = await driver.findElementByText("Validation", SearchOptions.exact);
            await validationTitle.click();
            const validators = await driver.findElementByText("Validators", SearchOptions.exact);
            await validators.click();
        });

        it("Verify data-form components are visible", async () => {
            let usernameLabel = await driver.findElementByText("Username", SearchOptions.exact);
            expect(usernameLabel).to.exist;

            let passwordLabel = await driver.findElementByText("Password", SearchOptions.exact);
            expect(passwordLabel).to.exist;

            let emailLabel = await driver.findElementByText("E-mail", SearchOptions.exact);
            expect(emailLabel).to.exist;

            let phoneNumberLabel = await driver.findElementByText("Phone Number", SearchOptions.exact);
            expect(phoneNumberLabel).to.exist;

            let enterPinLabel = await driver.findElementByText("Enter PIN", SearchOptions.exact);
            expect(enterPinLabel).to.exist;
        });

        it("Verify validation of components", async () => {
            let fields;
            let username;
            let password;
            let email;
            let phone;
            let pin;
            if (isAndroid) {
                fields = await driver.findElementsByClassName("android.widget.EditText");
                username = fields[0];
                password = fields[1];
                email = fields[2];
                phone = fields[4];
                pin = fields[5];
            }
            else {
                fields = await driver.findElementsByClassName("TextField");
                password = await driver.findElementByClassName("SecureTextField");
                username = fields[0];
                email = fields[1];
                phone = fields[3];
                pin = fields[4];
            }

            await username.click();
            await username.sendKeys("usernamevalidation");
            if (isAndroid) {
                await driver.driver.hideDeviceKeyboard("Done");
            }
            const userNameValidation = await driver.findElementByText("Username can be at most 12 characters.", SearchOptions.exact);
            expect(userNameValidation).to.exist;

            await password.click();
            await password.sendKeys("pass");
            if (isAndroid) {
                await driver.driver.hideDeviceKeyboard("Done");
            }
            const passwordValidation = await driver.findElementByText("Password must be at least 6 characters long.", SearchOptions.exact);
            expect(passwordValidation).to.exist;

            await email.click();
            await email.sendKeys("email");
            let emailValidation;
            if (isAndroid) {
                await driver.driver.hideDeviceKeyboard("Done");
                emailValidation = await driver.findElementByText("This email is invalid.", SearchOptions.exact);
            }
            else {
                emailValidation = await driver.findElementByText("Incorrect e-mail!", SearchOptions.exact);
            }
            expect(emailValidation).to.exist;

            if (!isAndroid) {
                await phone.sendKeys("08");
                const phoneValidation = await driver.findElementByText("Incorrect phone number", SearchOptions.exact);
                expect(phoneValidation).to.exist;


                await pin.sendKeys("00");
                const pinValidation = await driver.findElementByText("PIN number should contain 4 digits.", SearchOptions.exact);
                expect(pinValidation).to.exist;
            }

            let switchButton;
            let switchValidation;

            if (isAndroid) {
                switchButton = await driver.findElementByClassName("android.widget.Switch");
                await switchButton.click();
                await switchButton.click();
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.press({ x: 52, y: 700 })
                    .moveTo({ x: 52, y: 100 })
                    .release();
                await action.perform();
                switchValidation = await driver.findElementByText("You must agree with the terms.", SearchOptions.exact);
            }
            else {
                switchButton = await driver.findElementByClassName("Switch");
                await switchButton.click();
                await switchButton.click();
                switchValidation = await driver.findElementByText("You must agree with the terms.", SearchOptions.exact);
                expect(switchValidation).to.exist;
            }
        });
    });

    describe("Commit Modes", () => {
        it("Navigate to Immediate mode", async () => {
            await navigateBackToHome(driver);
            const commitModesTitle = await scrollToElement(driver, "Commit Modes");
            await commitModesTitle.click();
            const immediate = await driver.findElementByText("immediate", SearchOptions.exact);
            expect(immediate).to.exist;
        });

        it("Verify Immediate mode", async () => {
           const username = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
           await username.sendKeys("tony");
           const result = await driver.findElementByText('"username":"tony"', SearchOptions.contains);
           expect(result).to.exist;
        });

        it("Verify on Lost focus mode", async () => {
            const lostFocusTab = await driver.findElementByText("lost focus");
            await lostFocusTab.click();
            const username = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await username.sendKeys(" stark");
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }
            let result = await driver.findElementByText('"username":"tony"', SearchOptions.contains);
            expect(result).to.exist;
            const pass = await driver.findElementByText("Password");
            await pass.click();
            result = await driver.findElementByText('"username":"tony stark"', SearchOptions.contains);
            expect(result).to.exist;
        });

        it("Verify Manual mode", async () => {
            const manualTab = await driver.findElementByText("manual");
            await manualTab.click();
            const username = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await username.sendKeys(" ironman");
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) {
            }
            let result = await driver.findElementByText('"username":"tony stark"', SearchOptions.contains);
            expect(result).to.exist;
            const pass = await driver.findElementByText("Password");
            await pass.click();
            result = await driver.findElementByText('"username":"tony stark"', SearchOptions.contains);
            expect(result).to.exist;
            const commitButton = await driver.findElementByText("commit manually");
            await commitButton.click();
            result = await driver.findElementByText('"username":"tony stark ironman"', SearchOptions.contains);
            expect(result).to.exist;
        });
    });

    describe("Groups JSON", () => {
        it("Navigate to Groups JSON page", async () => {
            await navigateBackToHome(driver);
            const groupsJson = await scrollToElement(driver, "Groups JSON");
            await groupsJson.click();

            const disableBtn = await driver.findElementByText("Disable Grouping", SearchOptions.contains);
            expect(disableBtn).to.exist;
        });

        it("Shrink groups", async () => {
           const mainInfo = await driver.findElementByText("Main Info");
           await mainInfo.click();
           const address = await driver.findElementByText("Address");
           await address.click();
           const name = await driver.findElementByTextIfExists("Name");
           expect(name).to.be.undefined;
        });

        it("Disable groups", async () => {
            const disableBtn = await driver.findElementByText("Disable Grouping", SearchOptions.contains);
            await disableBtn.click();
            const address = await driver.findElementByTextIfExists("Address");
            expect(address).to.be.undefined;
            const name = await driver.findElementByText("Name");
            expect(name).to.exist;
        });
    });

    // TODO Uncomment when a fix is applied in webpack to include css per example like in these two cases.
    // describe("Styling", () => {
    //     it("Navigate to CSS Form", async () => {
    //         await navigateBackToHome(driver);
    //         const styling = await scrollToElement(driver, "Styling");
    //         await styling.click();

    //         const cssForm = await driver.findElementByText("CSS Form", SearchOptions.contains);
    //         await cssForm.click();
    //     });

    //     it("Verify CSS Form styling", async () => {
    //         const result = await driver.compareScreen("css-form", 3, 50, ImageOptions.pixel);
    //         expect(result).to.be.true;
    //     });

    //     it("Verify CSS Editors styling", async () => {
    //         await navigateBackToView(driver, "Styling");
    //         const cssForm = await driver.findElementByText("CSS Editors", SearchOptions.contains);
    //         await cssForm.click();
    //         const result = await driver.compareScreen("css-editors", 3, 50, ImageOptions.pixel);
    //         expect(result).to.be.true;
    //     });
    // });

    describe("Image Labels", () => {
        it("Navigate to Image Labels", async () => {
            await navigateBackToHome(driver);
            const imageLabels = await scrollToElement(driver, "Image Labels");
            await imageLabels.click();
        });

        it("Verify Image Labels", async () => {
            const result = await driver.compareScreen("image-labels", 3, 50, ImageOptions.pixel);
            expect(result).to.be.true;
        });
    });

    describe("Read Only", () => {
        it("Navigate to Read Only", async () => {
            await navigateBackToHome(driver);
            const readOnly = await scrollToElement(driver, "Read Only");
            await readOnly.click();
        });

        it("Verify form cannot be edited", async () => {
            if (isAndroid) {
                let toField = await driver.findElementByText("New York");
                await toField.sendKeys("1");
                toField = await driver.findElementByText("New York");
                expect(toField).to.exist;
            } else {
                const increment = await driver.findElementByText("Increment");
                await increment.click();
                const tickets = await driver.findElementByText("2");
                expect(tickets).to.exist;
            }

        });
    });

    describe("Value Providers", () => {
        it("Navigate to Relations example", async () => {
            await navigateBackToHome(driver);
            const valueProviders = await scrollToElement(driver, "Value Providers");
            await valueProviders.click();
            const relations = await driver.findElementByText("Relations");
            await relations.click();
        });

        it("Change default values", async () => {
            const uk = await driver.findElementByText("UK");
            await uk.click();
            if (isAndroid) {
                const germany = await driver.findElementByText("Germany");
                await germany.click();
            } else {
                await clickBelowElementCenter(uk, driver, 160);
            }

            const selectCity = await driver.findElementByText("Select City");
            await selectCity.click();

            if (isAndroid) {
                const berlin = await driver.findElementByText("Berlin");
                await berlin.click();
            } else {
                await clickBelowElementCenter(selectCity, driver, 160);
            }

            const result = await driver.findElementByText("Selected City: Berlin, Germany");
            expect(result).to.exist;
        });
    });

    describe("Scrollable Form", () => {
        it("Navigate to Scrollable Form example", async () => {
            await navigateBackToHome(driver);
            const scrollableForm = await scrollToElement(driver, "Scrollable Form");
            await scrollableForm.click();
        });

        it("Scroll the form", async () => {
            const register = await scrollToElement(driver, "register");
            expect(register).to.exist;
        });
    });
});