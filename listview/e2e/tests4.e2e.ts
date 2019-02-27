import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateBackToHome, scrollToElement, navigateBackToView, QUEUE_WAIT_TIME } from "./helper";
const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");
const PR = " #PR4";

describe("ListView4", () => {
    let driver: AppiumDriver;

    before(async function () {
        this.timeout(QUEUE_WAIT_TIME);
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

    const loadOnDemand = "Load on Demand";
    describe(loadOnDemand + PR, () => {
        describe("Manual with fixed size", () => {
            it("Navigate to example", async () => {
                await navigateBackToHome(driver);
                const listItem = await scrollToElement(driver, loadOnDemand);
                expect(listItem).to.exist;
                await listItem.click();

                const manualFixed = await driver.findElementByText("Manual with Fixed Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();

                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Scroll to load more button and load more items", async () => {
                const loadMore = await scrollToElement(driver, "Load More");
                await loadMore.click();
                const newItem = await scrollToElement(driver, "Leland Warner");
                expect(newItem).to.exist;
            });
        });

        describe("Manual with variable size", () => {
            it("Navigate to example", async () => {
                await navigateBackToView(driver, loadOnDemand);
                const manualFixed = await driver.findElementByText("Manual with Variable Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();
                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;
            });

            it("Scroll to load more button and load more items", async () => {
                const loadMore = await scrollToElement(driver, "Load More");
                await loadMore.click();
                const newItem = await scrollToElement(driver, "Leland Warner");
                expect(newItem).to.exist;
            });
        });

        describe("Auto with fixed size", () => {
            it("Navigate to example", async () => {
                await navigateBackToView(driver, loadOnDemand);
                const manualFixed = await driver.findElementByText("Auto with Fixed Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();
                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Scroll down and load more items", async () => {
                const newItem = await scrollToElement(driver, "Leland Warner");
                expect(newItem).to.exist;
            });
        });

        describe("Auto with variable size", () => {
            it("Navigate to example", async () => {
                await navigateBackToView(driver, loadOnDemand);
                const manualFixed = await driver.findElementByText("Auto with Variable Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();
                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Scroll down and load more items", async () => {
                const newItem = await scrollToElement(driver, "Leland Warner");
                expect(newItem).to.exist;
            });
        });

        const smallSrc = "With small source and pull to refresh";
        describe(smallSrc, () => {
            const loadButton = isAndroid ? "Load more" : "Load more items";
            it("Navigate to example", async () => {
                await navigateBackToView(driver, loadOnDemand);
                const smallSrcButton = await driver.findElementByText(smallSrc, SearchOptions.exact);
                expect(smallSrcButton).to.exist;
                await smallSrcButton.click();
                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Load more should disappear if no more items", async () => {
                let loadMoreButton = await driver.findElementByText(loadButton, SearchOptions.exact);
                await loadMoreButton.click();
                loadMoreButton = await driver.findElementByTextIfExists(loadButton, SearchOptions.exact);
                expect(loadMoreButton).to.be.undefined;
            });

            it("Pull the listView down to refresh items", async () => {
                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                await item.scroll(Direction.up, 600);
                const itemNew = await driver.findElementByText("Sherman Martin", SearchOptions.exact);
                expect(itemNew).to.exist;
            });

            it("Load more should appear and load more items", async () => {
                const loadMoreButton = await driver.findElementByText(loadButton, SearchOptions.exact);
                await loadMoreButton.click();
                const itemNew = await driver.findElementByText("Joel Robertson", SearchOptions.exact);
                expect(itemNew).to.exist;
            });
        });
    });

    const observableArrayText = "Observable Array";
    describe(observableArrayText, () => {
        it("Navigate to Observable array example", async () => {
            await navigateBackToHome(driver);
            const listItem = await scrollToElement(driver, observableArrayText);
            await listItem.click();
            const addBtn = await driver.findElementByText("ADD", SearchOptions.exact);
            expect(addBtn).to.exist;
        });

        it("Verify Buttons on the page are responsive", async () => {
            const addBtn = await driver.findElementByText("ADD", SearchOptions.exact);
            expect(addBtn).to.exist;
            const delBtn = await driver.findElementByText("DEL", SearchOptions.exact);
            expect(delBtn).to.exist;
            const updateBtn = await driver.findElementByText("UPDATE", SearchOptions.exact);
            expect(updateBtn).to.exist;
            const resetBtn = await driver.findElementByText("RESET", SearchOptions.exact);
            expect(resetBtn).to.exist;

            await addBtn.click();
            const itemNew = isAndroid ? await driver.findElementByText("the new item", SearchOptions.contains)
                : await driver.findElementByAccessibilityId("This is the new item's description.", SearchOptions.exact);
            expect(itemNew).to.exist;
            await delBtn.click();
            await driver.wait(1000);
            const itemDeleted = await driver.findElementByTextIfExists("the new item", SearchOptions.contains);
            expect(itemDeleted).to.be.undefined;

            await addBtn.click();
            const item1 = isAndroid ? await driver.findElementByText("the new item", SearchOptions.contains)
                : await driver.findElementByAccessibilityId("This is the new item's description.");
            expect(item1).to.exist;
            await updateBtn.click();
            const itemUpdated = isAndroid ? await driver.findElementByText("an updated item", SearchOptions.contains)
                : await driver.findElementByAccessibilityId("This is an updated item");
            expect(itemUpdated).to.exist;
        });
    });
});