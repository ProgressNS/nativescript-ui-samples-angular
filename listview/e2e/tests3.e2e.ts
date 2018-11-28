import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateBackToHome, scrollToElement, navigateBackToView } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("ListView3", () => {
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 15000;
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
        if (this.currentTest.state === "failed") {
            await driver.logScreenshot(this.currentTest.title);
        }
    });

    const pullToRefreshText = "Pull to Refresh";
    describe(pullToRefreshText, () => {
        it("Navigate to Pull to Refresh example", async () => {
            await navigateBackToHome(driver);
            const listItem = await scrollToElement(driver, pullToRefreshText);
            await listItem.click();
            const pullToRefreshGettingStarted = await driver.findElementByText("Getting Started", SearchOptions.exact);
            await pullToRefreshGettingStarted.click();
            const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
            expect(item).to.exist;
        });

        it("Pull the listView down to refresh items", async () => {
            const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
            await item.scroll(Direction.up, 600);
            const itemNew = await driver.findElementByText("Leland Warner", SearchOptions.exact);
            expect(itemNew).to.exist;
        });
    });

    const swipeActionText = "Swipe actions";
    describe(swipeActionText, () => {
        describe("Getting Started", () => {
            it("Navigate to getting started swipe actions example", async () => {
                await navigateBackToHome(driver);
                let listItem = await scrollToElement(driver, swipeActionText);
                await listItem.click();
                const item = await driver.findElementByText("Getting Started", SearchOptions.exact);
                await item.click();
                listItem = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(listItem).to.exist;
            });

            it("Swipe item left, delete it and verify it is deleted", async () => {
                let item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;
                if (isAndroid) {
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({ x: centerX, y: centerY })
                        .wait(100)
                        .moveTo({ x: 10, y: centerY })
                        .release();
                    await action.perform();
                }
                else {
                    await driver.driver.execute('mobile: dragFromToForDuration', {
                        duration: 2.0,
                        fromX: 150,
                        fromY: 120,
                        toX: 50,
                        toY: 120
                    });
                }
                let delBtn = await driver.findElementByText("delete", SearchOptions.exact);
                await delBtn.click();
                item = await driver.findElementByTextIfExists("Joyce Dean", SearchOptions.exact);
                expect(item).to.be.undefined;
            });

            it("Swipe item right and verify button is present", async () => {
                let item = await driver.findElementByText("Joel Robertson", SearchOptions.exact);
                expect(item).to.exist;
                if (isAndroid) {
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({ x: centerX, y: centerY })
                        .wait(100)
                        .moveTo({ x: centerX + centerX / 2, y: centerY })
                        .release();
                    await action.perform();
                }
                else {
                    await driver.driver.execute('mobile: dragFromToForDuration', {
                        duration: 2.0,
                        fromX: 50,
                        fromY: 120,
                        toX: 150,
                        toY: 120
                    });
                }
                let markBtn = await driver.findElementByText("mark", SearchOptions.exact);
                expect(markBtn).to.exist;
            });
        });

        const multipleActionsText = "Multiple actions";
        describe(multipleActionsText, () => {
            it("Navigate to multiple actions example", async () => {
                await navigateBackToView(driver, multipleActionsText);
                const item = await driver.findElementByText("Multiple actions", SearchOptions.exact);
                await item.click();
                const listItem = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(listItem).to.exist;
            });

            it("Swipe item left, and verify multiple buttons appears", async () => {
                let item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;
                if (isAndroid) {
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({ x: centerX, y: centerY })
                        .wait(100)
                        .moveTo({ x: 10, y: centerY })
                        .release();
                    await action.perform();
                }
                else {
                    await driver.driver.execute('mobile: dragFromToForDuration', {
                        duration: 2.0,
                        fromX: 150,
                        fromY: 110,
                        toX: 50,
                        toY: 110
                    });
                }
                const delBtn = await driver.findElementByText("delete", SearchOptions.exact);
                expect(delBtn).to.exist;
                const readBtn = await driver.findElementByText("read", SearchOptions.exact);
                expect(readBtn).to.exist;
                const forwardBtn = await driver.findElementByText("forward", SearchOptions.exact);
                expect(forwardBtn).to.exist;
            });

            it("Swipe item right and verify buttons are present", async () => {
                let item = await driver.findElementByText("Joel Robertson", SearchOptions.exact);
                expect(item).to.exist;
                if (isAndroid) {
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({ x: centerX / 2, y: centerY })
                        .wait(100)
                        .moveTo({ x: centerX, y: centerY })
                        .release();
                    await action.perform();
                }
                else {
                    await driver.driver.execute('mobile: dragFromToForDuration', {
                        duration: 2.0,
                        fromX: 150,
                        fromY: 180,
                        toX: 250,
                        toY: 180
                    });
                }
                const mark = await driver.findElementByText("mark", SearchOptions.exact);
                expect(mark).to.exist;
                const archive = await driver.findElementByText("archive", SearchOptions.exact);
                expect(archive).to.exist;
                const unread = await driver.findElementByText("unread", SearchOptions.exact);
                expect(unread).to.exist;
            });
        });

        const disableEnableText = "Disable\\Enable";
        describe(disableEnableText, () => {
            it("Navigate to disable\\enable example", async () => {
                await navigateBackToView(driver, disableEnableText);
                const item = await driver.findElementByText("Disable\\Enable", SearchOptions.exact);
                await item.click();
                const listItem = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(listItem).to.exist;
            });

            it("Swipe item left, and verify button appears", async () => {
                let item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;
                if (isAndroid) {
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({ x: centerX, y: centerY })
                        .wait(100)
                        .moveTo({ x: 10, y: centerY })
                        .release();
                    await action.perform();
                }
                else {
                    await driver.driver.execute('mobile: dragFromToForDuration', {
                        duration: 2.0,
                        fromX: 180,
                        fromY: 150,
                        toX: 80,
                        toY: 150
                    });
                }
                const delBtn = await driver.findElementByText("delete", SearchOptions.exact);
                expect(delBtn).to.exist;
                await delBtn.click();
                item = await driver.findElementByTextIfExists("Joyce Dean", SearchOptions.exact);
                expect(item).to.be.undefined;
            });

            it("Tap disable btn and verify swipe is disabled", async () => {
                const disableBtn = await driver.findElementByText("DISABLE", SearchOptions.exact);
                await disableBtn.click();
                let item = await driver.findElementByText("Joel Robertson", SearchOptions.exact);
                expect(item).to.exist;
                if (isAndroid) {
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({ x: centerX, y: centerY })
                        .wait(100)
                        .moveTo({ x: 10, y: centerY })
                        .release();
                    await action.perform();
                    const selection = await driver.compareElement(item, "item");
                    expect(selection).to.equal(true);
                }
                else {
                    await driver.driver.execute('mobile: dragFromToForDuration', {
                        duration: 2.0,
                        fromX: 150,
                        fromY: 150,
                        toX: 50,
                        toY: 150
                    });
                    const del = await driver.findElementByTextIfExists("delete", SearchOptions.exact);
                    expect(del).to.be.undefined;
                }
            });
        });
    });

    const headerAndFooterText = "Header and Footer";
    describe(headerAndFooterText, () => {
        const autoHeight = "Auto height";
        const bigHeader = "Big header";
        const bigFooter = "Big footer";
        describe(autoHeight, () => {
            it("Navigate to " + headerAndFooterText + "-" + autoHeight + " example, verify its header and footer exist", async () => {
                await navigateBackToHome(driver);
                const headerAndFooterItem = await scrollToElement(driver, headerAndFooterText);
                await headerAndFooterItem.click();

                const listItem = await driver.findElementByText(autoHeight);
                await listItem.click();

                const listHeader = await driver.findElementByText("This is list header");
                expect(listHeader).to.exist;

                const listFooter = await driver.findElementByText("This is list footer", SearchOptions.exact);
                expect(listFooter).to.exist;
            });
        });
        describe(bigHeader, () => {
            it("Navigate to " + headerAndFooterText + "-" + bigHeader + " example, verify its header and footer exist and size is correct", async () => {
                await navigateBackToView(driver, headerAndFooterText);
                const listItem = await driver.findElementByText(bigHeader);
                await listItem.click();

                const listHeader = await driver.findElementByText("This is list header with height 100", SearchOptions.exact);
                expect(listHeader).to.exist;
                const listFooter = await driver.findElementByText("This is list footer with height 50", SearchOptions.exact);
                expect(listFooter).to.exist;

                let headerRect = await listHeader.getRectangle();
                let footerRect = await listFooter.getRectangle();
                expect(headerRect.height).to.not.equal(footerRect.height);
            });
        });
        describe(bigFooter, () => {
            it("Navigate to " + headerAndFooterText + "-" + bigFooter + " example, verify its header and footer exist and size is correct", async () => {
                await navigateBackToView(driver, headerAndFooterText);
                const listItem = await driver.findElementByText(bigFooter);
                await listItem.click();

                const listHeader = await driver.findElementByText("This is list header with height 50", SearchOptions.exact);
                expect(listHeader).to.exist;
                const listFooter = await driver.findElementByText("This is list footer with height 100", SearchOptions.exact);
                expect(listFooter).to.exist;

                let headerRect = await listHeader.getRectangle();
                let footerRect = await listFooter.getRectangle();
                expect(headerRect.height).to.not.equal(footerRect.height);
            });
        });
    });

    const itemSeparatorsText = "Item separators";
    describe(itemSeparatorsText, () => {
        it("Navigate to Item separators", async () => {
            await navigateBackToHome(driver);
            const listItem = await scrollToElement(driver, itemSeparatorsText);
            await listItem.click();

            const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
            expect(item0).to.exist;
        });
    });

    const scrollToIndexText = "Scroll to index";
    describe(scrollToIndexText, () => {
        describe("In vertical direction", () => {
            it("Navigate to vertical direction demo, scroll and verify index", async () => {
                await navigateBackToHome(driver);
                const listItem = await scrollToElement(driver, scrollToIndexText);
                await listItem.click();

                const verticalDirection = await driver.findElementByText("In vertical direction", SearchOptions.exact);
                await verticalDirection.click();

                const scrollBtn = await driver.findElementByText("SCROLL TO INDEX 50", SearchOptions.exact);
                await scrollBtn.click();
                const item50 = await driver.findElementByText("Item 50", SearchOptions.exact);
                expect(item50).to.exist;
            });
        });

        describe("In horizontal direction", () => {
            it("Navigate to horizontal direction demo, scroll and verify index", async () => {
                await navigateBackToView(driver, scrollToIndexText);
                const horizontalDirection = await driver.findElementByText("In horizontal direction", SearchOptions.exact);
                await horizontalDirection.click();

                const scrollBtn = await driver.findElementByText("SCROLL TO INDEX 50", SearchOptions.exact);
                await scrollBtn.click();
                const item50 = await driver.findElementByText("Item 50", SearchOptions.exact);
                expect(item50).to.exist;
            });
        });

        describe("Initially scrolled", () => {
            it("Navigate to horizontal direction demo and verify index", async () => {
                await navigateBackToView(driver, scrollToIndexText);
                const horizontalDirection = await driver.findElementByText("Initially scrolled", SearchOptions.exact);
                await horizontalDirection.click();

                const scrollLabel = await driver.findElementByText("RadListView is initially scrolled", SearchOptions.contains);
                expect(scrollLabel).to.exist;
                const item20 = await driver.findElementByText("Item 20", SearchOptions.exact);
                expect(item20).to.exist;
            });
        });
    });

    const scrollEventsText = "Scroll Events";
    describe(scrollEventsText, () => {
        it("Navigate to scroll events", async () => {
            await navigateBackToHome(driver);
            const listItem = await scrollToElement(driver, scrollEventsText);
            await listItem.click();
            let scrollStateLabel;
            if (isAndroid) {
                scrollStateLabel = await driver.findElementByText("State: Scrolled with offset: 0", SearchOptions.exact);
            }
            else {
                scrollStateLabel = await driver.findElementByText("State:", SearchOptions.contains);
            }
            expect(scrollStateLabel).to.exist;
        });

        it("Scroll and verify event is fired", async () => {
            const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
            const listView = await driver.findElementByClassName(locator);
            const listItem = await listView.scrollTo(
                Direction.down,
                () => driver.findElementByText("Item 20", SearchOptions.exact),
                700
            );
            const scrollStateLabel = await driver.findElementByText("ended with offset:", SearchOptions.contains);
            expect(scrollStateLabel).to.exist;
        });

    });

    const horizontalWithVariableText = "Horizontal with Variable item's width";
    describe(horizontalWithVariableText, () => {
        it("Navigate to scroll events", async () => {
            await navigateBackToHome(driver);
            const listItem = await scrollToElement(driver, "Horizontal with Variable");
            await listItem.click();
            const result = await driver.compareScreen("horizontalVariable");
            expect(result).to.equal(true);
        });
    });

});