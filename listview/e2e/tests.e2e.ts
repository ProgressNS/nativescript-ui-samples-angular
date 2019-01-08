import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateBackToHome, navigateBackToView, scrollToElement, swipe, swipeToElement } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("ListView1", () => {
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

    const gettingStartedText = "Getting Started";
    describe(gettingStartedText, () => {
        it("Navigate to Getting Started example", async () => {
            await scrollToElement(driver, gettingStartedText);
            const gettingStarted = await driver.findElementByText("Getting Started", SearchOptions.exact);
            await gettingStarted.click();

            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
        });

        it("Verify ListView length", async () => {
            const items = await driver.findElementsByText("description", SearchOptions.contains);
            expect(items.length).to.equal(10);

        });

        it("Verify items are visible", async () => {
            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;

            const item2 = await driver.findElementByText("Item 2", SearchOptions.exact);
            expect(item2).to.exist;

            const item3 = await driver.findElementByText("Item 3", SearchOptions.exact);
            expect(item3).to.exist;

            const item4 = await driver.findElementByText("Item 4", SearchOptions.exact);
            expect(item4).to.exist;

            const descriptionLabels = await driver.findElementsByText("This is item description.", SearchOptions.exact);
            expect(descriptionLabels.length).to.equal(10);
        });
    });

    const gettingStartedHorizontalText = "Getting Started Horizontal";
    describe(gettingStartedHorizontalText, () => {
        it("Navigate to Getting Started Horizontal example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, gettingStartedHorizontalText);
            const gettingStartedHorizontal = await driver.findElementByText(gettingStartedHorizontalText, SearchOptions.exact);
            await gettingStartedHorizontal.click();

            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
            const description = await driver.findElementByText("This is item description", SearchOptions.contains);
            expect(description).to.exist;
        });

        it("Scroll to Item 5", async () => {
            let direction = Direction.left;
            let item = "Item 5";
            if (isAndroid) {
                direction = Direction.right;
                item = "Item 9";
            }
            const expectedItem = await swipeToElement(driver, item, direction);
            expect(expectedItem).to.exist;
        });
    });

    const initialLoad = "Initially load 10 000 items";
    describe(initialLoad, () => {
        it("Navigate to Initially load example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, initialLoad);
            const initialButton = await driver.findElementByText(initialLoad, SearchOptions.exact);
            await initialButton.click();

            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
            const description = await driver.findElementByText("Description for item 1", SearchOptions.contains);
            expect(description).to.exist;
        });

        it("Scroll to Item 7", async () => {
            await scrollToElement(driver, "Item 7", Direction.down);
            const item7 = await driver.findElementByText("Item 7", SearchOptions.exact);
            expect(item7).to.exist;
        });
    });

    const dataOperationsText = "Data Operations";
    describe(dataOperationsText, () => {
        describe("Filtering", () => {
            it("Navigate to Filtering example", async () => {
                await navigateBackToHome(driver);
                await scrollToElement(driver, dataOperationsText);
                const dataOperationItem = await driver.findElementByText(dataOperationsText, SearchOptions.exact);
                await dataOperationItem.click();

                const filteringItem = await driver.findElementByText("Filtering", SearchOptions.exact);
                await filteringItem.click();

                const disableBtn = await driver.findElementByText("Disable filtering", SearchOptions.exact);
                expect(disableBtn).to.exist;
            });

            it("Verify list view is visible", async () => {
                const disableBtn = await driver.findElementByText("Disable filtering", SearchOptions.exact);
                await disableBtn.click();

                const enableBtn = await driver.findElementByText("Enable filtering", SearchOptions.exact);
                expect(enableBtn).to.exist;

                let item23 = await driver.findElementByText("Item 23", SearchOptions.exact);
                expect(item23).to.exist;

                const specialItem = await driver.findElementByText("Special Item 55", SearchOptions.exact);
                expect(specialItem).to.exist;

                await enableBtn.click();
                item23 = await driver.findElementByTextIfExists("Item 23", SearchOptions.exact);
                expect(item23).to.be.undefined;
            });
        });

        describe("Sorting", () => {
            it("Navigate to Sorting example", async () => {
                await navigateBackToView(driver, dataOperationsText);
                const sortingItem = await driver.findElementByText("Sorting", SearchOptions.exact);
                await sortingItem.click();

                const categoryOneItems = await driver.findElementsByText("Category 1", SearchOptions.contains);
                if (isAndroid) {
                    expect(categoryOneItems.length).to.equal(5);
                }
                else {
                    expect(categoryOneItems.length).to.equal(7);
                }
            });
            it("Verify list view sorting is working", async () => {
                const disableBtn = await driver.findElementByText("Disable sorting", SearchOptions.exact);
                await disableBtn.click();

                const enableBtn = await driver.findElementByText("Enable sorting", SearchOptions.exact);
                expect(enableBtn).to.exist;

                const category3 = await driver.findElementsByText("Category 3", SearchOptions.contains);
                expect(category3).to.exist;
                if (isAndroid) {
                    expect(category3.length).to.equal(2);
                }
                else {
                    expect(category3.length).to.equal(4);
                }
            });
        });

        describe("Grouping", () => {
            it("Navigate to grouping example", async () => {
                await navigateBackToView(driver, dataOperationsText);
                const groupingItem = await driver.findElementByText("Grouping", SearchOptions.exact);
                await groupingItem.click();

                const categoryTitle = await driver.findElementsByText("Category 1", SearchOptions.contains);
                expect(categoryTitle).to.exist;
            });
            it("Verify list view grouping is working", async () => {
                let categoryTitle = await driver.findElementByText("Category 1", SearchOptions.exact);
                expect(categoryTitle).to.exist;

                const disableBtn = await driver.findElementByText("Disable grouping", SearchOptions.exact);
                await disableBtn.click();

                const enableBtn = await driver.findElementByText("Enable grouping", SearchOptions.exact);
                expect(enableBtn).to.exist;

                categoryTitle = await driver.findElementByTextIfExists("Category 1", SearchOptions.exact);
                expect(categoryTitle).to.be.undefined;
                await enableBtn.click();

                const categoryTitle2 = await driver.findElementByText("Category 2", SearchOptions.exact);
                expect(categoryTitle2).to.exist;
            });
        });

        if (isAndroid) {
            describe("Collapsible Grouping", () => {
                it("Navigate to Collapsible Grouping example", async () => {
                    await navigateBackToView(driver, dataOperationsText);
                    const groupingItem = await driver.findElementByText("Collapsible Grouping", SearchOptions.exact);
                    await groupingItem.click();

                    const categoryTitle = await driver.findElementsByText("Category 1", SearchOptions.contains);
                    expect(categoryTitle).to.exist;
                });
                it("Verify list view is collapsible", async () => {
                    let categoryTitle = await driver.findElementByText("Category 1", SearchOptions.exact);
                    await categoryTitle.click();
                    categoryTitle = await driver.findElementByText("Category 2", SearchOptions.exact);
                    await categoryTitle.click();
                    categoryTitle = await driver.findElementByText("Category 3", SearchOptions.exact);
                    await categoryTitle.click();
                    const item = await driver.findElementByTextIfExists("Item");
                    expect(item).not.to.exist;
                });
            });
        }

        describe("Multiple operations", () => {
            it("Navigate to multiple operations example", async () => {
                await navigateBackToView(driver, dataOperationsText);
                const multipleItem = await driver.findElementByText("Multiple operations", SearchOptions.exact);
                await multipleItem.click();

                const disableFiltering = await driver.findElementByText("Disable filtering", SearchOptions.exact);
                expect(disableFiltering).to.exist;
            });

            it("Verify list view operations are working", async () => {
                let categoryTitle = await driver.findElementByText("Category 1", SearchOptions.exact);
                expect(categoryTitle).to.exist;

                const disableGroupingBtn = await driver.findElementByText("Disable grouping", SearchOptions.exact);
                await disableGroupingBtn.click();

                let enableGroupingBtn = await driver.findElementByText("Enable grouping", SearchOptions.exact);
                expect(enableGroupingBtn).to.exist;

                categoryTitle = await driver.findElementByTextIfExists("Category 1", SearchOptions.exact);
                expect(categoryTitle).to.be.undefined;
                await enableGroupingBtn.click();

                const categoryTitle2 = await driver.findElementsByText("Category 2", SearchOptions.exact);
                expect(categoryTitle2).to.exist;
            });
        });

        describe("With Swipe", () => {
            it("Navigate to With Swipe example", async () => {
                await navigateBackToView(driver, dataOperationsText);
                const multipleItem = await driver.findElementByText("With Swipe", SearchOptions.exact);
                await multipleItem.click();

                const firstItem = await driver.findElementByText("Special Item 89", SearchOptions.exact);
                expect(firstItem).to.exist;
            });

            it("Verify list view events", async () => {
                const categoryTitle = await driver.findElementByText("Category 1", SearchOptions.exact);
                expect(categoryTitle).to.exist;
                let item = await driver.findElementByText("Special Item 111", SearchOptions.exact);
                let event;
                if (isAndroid) {
                    await item.hold();
                    event = await driver.findElementByText("onItemSelected for: Special Item 111");
                    expect(event).to.exist;
                    await item.hold();
                    event = await driver.findElementByText("onItemDeselected for: Special Item 111");
                    expect(event).to.exist;
                }

                await item.click();
                event = await driver.findElementByText("onItemTap for: Special Item 111");
                expect(event).to.exist;

                item = await driver.findElementByText("Special Item 111", SearchOptions.exact);
                await swipe(driver, item, Direction.right);
                const onSwipeEvent = isAndroid ? "onSwipeCellStarted item: Special Item 111" : "onSwipeCellFinished item: Special Item 111";
                event = await driver.findElementByText(onSwipeEvent, SearchOptions.contains);
                expect(event).to.exist;
                const markButtons = await driver.findElementsByText("mark");
                let alert, okButton;
                // Alert causes UI tree to become empty on Android
                if (!isAndroid) {

                    await markButtons[0].click();
                    alert = await driver.findElementByText("Left swipe click for: Special Item 111", SearchOptions.contains);
                    expect(alert).to.exist;
                    okButton = await driver.findElementByText("OK", SearchOptions.exact);
                    await okButton.click();
                }

                await item.click();
                await swipe(driver, item, Direction.left);
                event = await driver.findElementByText(onSwipeEvent, SearchOptions.contains);
                expect(event).to.exist;

                if (!isAndroid) {
                    const deleteButtons = await driver.findElementsByText("delete");
                    await deleteButtons[0].click();
                    alert = await driver.findElementByText("Right swipe click for: Special Item 111", SearchOptions.contains);
                    expect(alert).to.exist;
                    await okButton.click();
                }
            });
        });

    });

    const multipleItemTemplatesText = "Multiple Item Templates";
    describe(multipleItemTemplatesText, () => {
        it("Navigate to Multiple Item Templates example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, multipleItemTemplatesText);
            const multiupleItemTemplates = await driver.findElementByText(multipleItemTemplatesText, SearchOptions.exact);
            await multiupleItemTemplates.click();

            const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
            expect(item0).to.exist;
        });

        it("Verify ListView elements are visible", async () => {
            const startElement = await driver.findElementByText("start", SearchOptions.exact);
            expect(startElement).to.exist;

            const redItems = await driver.findElementsByText("red", SearchOptions.exact);
            expect(redItems.length).to.equal(3);

            const blueItems = await driver.findElementsByText("blue", SearchOptions.exact);
            expect(blueItems.length).to.equal(3);

            if (!isAndroid) {
                const greenItems = await driver.findElementsByText("green", SearchOptions.exact);
                expect(greenItems.length).to.equal(3);
            }

        });
    });

    const itemLoadingText = "Item Loading";
    describe(itemLoadingText, () => {
        it("Navigate to Item Loading example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, itemLoadingText);
            const itemLoading = await driver.findElementByText(itemLoadingText, SearchOptions.exact);
            await itemLoading.click();

            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
        });

        it("Verify ListView elements are visible", async () => {
            const elements = await driver.findElementsByText("This is item description.", SearchOptions.exact);
            if (isAndroid) {
                expect(elements.length).to.equal(5);
            }
            else {
                expect(elements.length).to.equal(9);
            }

        });
    });

    const itemAnimationsText = "Item Animations";
    describe(itemAnimationsText, () => {
        it("Navigate to Item Animations example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, itemAnimationsText);
            const itemAnimataions = await driver.findElementByText(itemAnimationsText, SearchOptions.exact);
            await itemAnimataions.click();

            const addBtn = await driver.findElementByText("ADD", SearchOptions.exact);
            expect(addBtn).to.exist;
        });

        it("Verify Buttons on the page are responsive", async () => {
            const addBtn = await driver.findElementByText("ADD", SearchOptions.exact);
            expect(addBtn).to.exist;
            const delBtn = await driver.findElementByText("DEL", SearchOptions.exact);
            expect(delBtn).to.exist;
            const updateBtn = await driver.findElementByText("UPDATE", SearchOptions.contains);
            expect(updateBtn).to.exist;
            const resetBtn = await driver.findElementByText("RESET", SearchOptions.exact);
            expect(resetBtn).to.exist;

            await addBtn.click();
            let item0 = await driver.findElementByText("This is a new item: 0", SearchOptions.exact);
            expect(item0).to.exist;
            await delBtn.click();
            item0 = await driver.findElementByTextIfExists("This is a new item: 0", SearchOptions.exact);
            expect(item0).to.be.undefined;

            await addBtn.click();
            let item1 = await driver.findElementByText("This is a new item: 1", SearchOptions.exact);
            expect(item1).to.exist;
            await updateBtn.click();
            let itemUpdated = await driver.findElementByText("This is an updated item", SearchOptions.exact);
            expect(itemUpdated).to.exist;
        });


    });

    const itemLayoutsText = "Item Layouts";
    describe(itemLayoutsText, () => {
        describe("Linear", () => {
            it("Navigate to Linear layout example", async () => {
                await navigateBackToHome(driver);
                await scrollToElement(driver, itemLayoutsText);
                const itemLayout = await driver.findElementByText(itemLayoutsText, SearchOptions.exact);
                await itemLayout.click();
                const linear = await driver.findElementByText("Linear", SearchOptions.exact);
                await linear.click();

                const rollsLabel = await driver.findElementByText("These Rolls..", SearchOptions.exact);
                expect(rollsLabel).to.exist;
            });
            it("Scroll listview to verify more elements are present", async () => {
                let listView;
                if (isAndroid) {
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else {
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }

                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Rainbow Chocolate Pudding", SearchOptions.exact),
                    600
                );
                expect(listItem).to.exist;

            });
        });

        describe("Grid", () => {
            it("Navigate to Grid Layout example", async () => {
                await navigateBackToView(driver, itemLayoutsText);
                const grid = await driver.findElementByText("Grid", SearchOptions.exact);
                await grid.click();

                const rollsLabel = await driver.findElementByText("These Rolls..", SearchOptions.exact);
                expect(rollsLabel).to.exist;

                const iceCream = await driver.findElementByText("Ice-cream Sandwich", SearchOptions.exact);
                expect(iceCream).to.exist;
            });

            it("Scroll listview to verify more elements are present", async () => {
                let listView;
                if (isAndroid) {
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else {
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Creme Caramel", SearchOptions.exact),
                    600
                );
                expect(listItem).to.exist;
            });
        });

        describe("Staggered", () => {
            it("Navigate to Staggered example", async () => {
                await navigateBackToView(driver, itemLayoutsText);
                const staggeredItem = await driver.findElementByText("Staggered", SearchOptions.exact);
                await staggeredItem.click();

                const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
                expect(item0).to.exist;
            });

            it("Scroll listview to verify more elements are present", async () => {
                let listView;
                if (isAndroid) {
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else {
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }

                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Item 30", SearchOptions.exact),
                    600
                );
                expect(listItem).to.exist;
            });
        });

        describe("Change at runtime example", () => {
            it("Navigate to change at runtime example", async () => {
                await navigateBackToView(driver, itemLayoutsText);
                const staggeredItem = await driver.findElementByText("Change at runtime", SearchOptions.exact);
                await staggeredItem.click();

                const linearBtn = await driver.findElementByText("LINEAR", SearchOptions.exact);
                expect(linearBtn).to.exist;
            });

            it("Change layouts to Grid and verify listview elements", async () => {
                const gridBtn = await driver.findElementByText("GRID", SearchOptions.exact);
                await gridBtn.click();
                let iceCream;
                if (isAndroid) {
                    const listView = await driver.findElementByClassName("android.widget.FrameLayout");
                    iceCream = await listView.scrollTo(
                        Direction.down,
                        () => driver.findElementByText("Ice-cream Sandwich", SearchOptions.exact),
                        600
                    );
                }
                else {
                    iceCream = await driver.findElementByText("Ice-cream Sandwich", SearchOptions.exact);
                }
                expect(iceCream).to.exist;
            });

            it("Change layout to staggered and verify listView elements", async () => {
                const staggeredBtn = await driver.findElementByText("STAGGERED", SearchOptions.exact);
                await staggeredBtn.click();
                let caramelItem;
                if (isAndroid) {
                    const listView = await driver.findElementByClassName("android.widget.FrameLayout");
                    caramelItem = await listView.scrollTo(
                        Direction.down,
                        () => driver.findElementByText("Creme Caramel", SearchOptions.exact),
                        800
                    );
                }
                else {
                    caramelItem = await driver.findElementByText("Creme Caramel", SearchOptions.exact);
                }
                expect(caramelItem).to.exist;
            });
        });

    });
});