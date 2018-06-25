import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateToHome } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: string = runType.includes("android");

describe("ListView", () => {
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


    describe("Getting Started", () => {
        it("Navigate to Getting Started example", async () => {
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
            expect(item1).to.exist;

            const item3 = await driver.findElementByText("Item 3", SearchOptions.exact);
            expect(item1).to.exist;

            const item4 = await driver.findElementByText("Item 4", SearchOptions.exact);
            expect(item1).to.exist;

            const descriptionLabels = await driver.findElementsByText("This is item description.", SearchOptions.exact);
            expect(descriptionLabels.length).to.equal(10);
        });
    });

    describe("DataOperations", () => {
        describe("Filtering", () => {
            it("Navigate to Filtering example", async () => {
                await navigateToHome(driver);
                const dataOperationItem = await driver.findElementByText("Data Operations", SearchOptions.exact);
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
                await driver.navBack();
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
                await driver.navBack();
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

        describe("Multiple operations", () => {
            it("Navigate to multiple operations example", async () => {
                await driver.navBack();
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

    });

    describe("Multiple Item templates", () =>{
        it("Navigate to Multiple Item Templates example", async () => {
            await navigateToHome(driver);
            const multiupleItemTemplates = await driver.findElementByText("Multiple Item Templates", SearchOptions.exact);
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

            if(!isAndroid){
                const greenItems = await driver.findElementsByText("green", SearchOptions.exact);
                expect(greenItems.length).to.equal(3);
            }
            
        });
    });

    describe("Item Loading", () =>{
        it("Navigate to Item Loading example", async () => {
            await navigateToHome(driver);
            const itemLoading = await driver.findElementByText("Item Loading", SearchOptions.exact);
            await itemLoading.click();
    
            const item1 = await driver.findElementByText("Item 1", SearchOptions.exact);
            expect(item1).to.exist;
        });
    
        it("Verify ListView elements are visible", async () => {
            const elements = await driver.findElementsByText("This is item description.", SearchOptions.exact);
            if(isAndroid){
                expect(elements.length).to.equal(5);
            }
            else{
                expect(elements.length).to.equal(9);
            }
            
        });
    });

    describe("Item Animations", () =>{
        it("Navigate to Item Animations example", async () => {
            await navigateToHome(driver);
            const itemAnimataions = await driver.findElementByText("Item Animations", SearchOptions.exact);
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

    describe("Item Layouts", () =>{
        describe("Linear", () =>{
            it("Navigate to Linear layout example", async () => {
                await navigateToHome(driver);
                const itemLayout = await driver.findElementByText("Item Layouts", SearchOptions.exact);
                await itemLayout.click();
                const linear = await driver.findElementByText("Linear", SearchOptions.exact);
                await linear.click();
    
                const rollsLabel = await driver.findElementByText("These Rolls..", SearchOptions.exact);
                expect(rollsLabel).to.exist;
            });
            it("Scroll listview to verify more elements are present", async () =>{
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Rainbow Chocolate Pudding", SearchOptions.exact),
                    600
                )
                expect(listItem).to.exist;
                
            });
        });

        describe("Grid", () =>{
            it("Navigate to Grid Layout example", async () => {
                await driver.navBack();
                const grid = await driver.findElementByText("Grid", SearchOptions.exact);
                await grid.click();

                const rollsLabel = await driver.findElementByText("These Rolls..", SearchOptions.exact);
                expect(rollsLabel).to.exist;

                const iceCream = await driver.findElementByText("Ice-cream Sandwich", SearchOptions.exact);
                expect(iceCream).to.exist;
            });

            it("Scroll listview to verify more elements are present", async () =>{
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Creme Caramel", SearchOptions.exact),
                    600
                )
                expect(listItem).to.exist;
            });
        });

        describe("Staggered", () => {
            it("Navigate to Staggered example", async () => {
                await driver.navBack();
                const staggeredItem = await driver.findElementByText("Staggered", SearchOptions.exact);
                await staggeredItem.click();

                const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
                expect(item0).to.exist;
            });

            it("Scroll listview to verify more elements are present", async () =>{
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Item 30", SearchOptions.exact),
                    600
                )
                expect(listItem).to.exist;
            });
        });
        
        describe("Change at runtime example", () => {
            it("Navigate to change at runtime example", async () => {
                await driver.navBack();
                const staggeredItem = await driver.findElementByText("Change at runtime", SearchOptions.exact);
                await staggeredItem.click();

                const linearBtn = await driver.findElementByText("LINEAR", SearchOptions.exact);
                expect(linearBtn).to.exist;
            });

            it("Change layouts to Grid and verify listview elements", async () => {
                const gridBtn = await driver.findElementByText("GRID", SearchOptions.exact);
                await gridBtn.click();
                let iceCream;
                if(isAndroid){
                    const listView = await driver.findElementByClassName("android.widget.FrameLayout");
                    iceCream = await listView.scrollTo(
                        Direction.down,
                        () => driver.findElementByText("Ice-cream Sandwich", SearchOptions.exact),
                        600
                    )
                }
                else{
                    iceCream = await driver.findElementByText("Ice-cream Sandwich", SearchOptions.exact);
                }
                expect(iceCream).to.exist;
            });

            it("Change layout to staggered and verofy listView elements", async () =>{
                const staggeredBtn = await driver.findElementByText("STAGGERED", SearchOptions.exact);
                await staggeredBtn.click();
                let caramelItem;
                if(isAndroid){
                    const listView = await driver.findElementByClassName("android.widget.FrameLayout");
                    caramelItem = await listView.scrollTo(
                        Direction.down,
                        () => driver.findElementByText("Creme Caramel", SearchOptions.exact),
                        800
                    )
                }
                else{
                    caramelItem = await driver.findElementByText("Creme Caramel", SearchOptions.exact);
                }
                expect(caramelItem).to.exist;
            });                
        });

    });

    describe("Item Reorder", () =>{
        it("Navigate to item reorder example", async () => {
            await navigateToHome(driver);
            const itemReorder = await driver.findElementByText("Item Reorder", SearchOptions.exact);
            await itemReorder.click();
            const listItem = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
            expect(listItem).to.exist;
        });

        it("Reorder items and verify listview", async () => {
            let listView;
            let value;
            const listItem = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
            expect(listItem).to.exist;
            // await listItem.drag(Direction.down, 600, 0);
            if(isAndroid){
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.longPress({x: 200, y: 200})
                    .wait(2000)
                    .moveTo({x: 200, y: 400})
                    .release();
                await action.perform();
                listView = await driver.findElementsByClassName("android.widget.TextView");
                value = await listView[1].text();
                expect(value).to.equal("George Cook");
            }
            else{
                await driver.driver.execute('mobile: dragFromToForDuration', {
                    duration: 2.0,
                    fromX: 100,
                    fromY: 105,
                    toX: 100,
                    toY: 242
                });
                listView = await driver.findElementsByClassName("XCUIElementTypeStaticText");
                value = await listView[1].getAttribute("value");
                let element = await driver.findElementByText("George Cook");
                expect(element).to.exist;
                //TODO: Add assertion for listview items
            }
           
        });
    });

    describe("Item Reorder with Handle", () =>{
        it("Navigate to reorder with Handle example", async () => {
            await navigateToHome(driver);
            const itemReorder = await driver.findElementByText("Item Reorder with handle", SearchOptions.exact);
            await itemReorder.click();
            const listItem = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
            expect(listItem).to.exist;
        });

        it("Reorder items and verify listview", async () => {
            let listView;
            if(isAndroid){
                const iconsList = await driver.findElementsByClassName("android.widget.ImageView");
                const rectangle = await iconsList[0].getRectangle();
                const centerX = rectangle.x + rectangle.width / 2;
                const centerY = rectangle.y + rectangle.height / 2;
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.press({x: centerX, y: centerY})
                    .wait(100)
                    .moveTo({x: centerX, y: centerY + 200})
                    .release();
                await action.perform();
                listView = await driver.findElementsByClassName("android.widget.TextView");
                const value = await listView[2].text();
                expect(value).to.equal("George Cook");
            }
            else{
                await driver.driver.execute('mobile: dragFromToForDuration', {
                    duration: 2.0,
                    fromX: 337,
                    fromY: 140,
                    toX: 337,
                    toY: 340
                });
                listView = await driver.findElementsByClassName("XCUIElementTypeStaticText");
                // value = await listView[2].text();
                let element = await driver.findElementByText("George Cook");
                expect(element).to.exist;

            }
        });
    });

    describe("Selection", () =>{
        describe("Single selection", () =>{
            it("Navigate to Single selection example", async () => {
                await navigateToHome(driver);
                const selection = await driver.findElementByText("Selection", SearchOptions.exact);
                await selection.click();
                driver.wait(1000);
                const singleSelection = await driver.findElementByText("Single Selection", SearchOptions.exact);
                await singleSelection.click();
    
                const item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                expect(item).to.exist;
            });
            it("Select an item and verify its style", async () =>{
                let item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                await item.click();
                let selectedItem = await driver.findElementByTextIfExists("Selected items: Gwen Peters", SearchOptions.exact);
                expect(selectedItem).to.exist;
                item = await driver.findElementByText("George Cook", SearchOptions.exact);
                await item.click();
                selectedItem = await driver.findElementByTextIfExists("Selected items: George Cook", SearchOptions.exact);
                expect(selectedItem).to.exist;
            });
        });
        describe("Multiple selection", () =>{
            it("Navigate to Multiple selection example", async () => {
                await navigateToHome(driver);
                const selection = await driver.findElementByText("Selection", SearchOptions.exact);
                await selection.click();
                driver.wait(1000);
                const multipleSelection = await driver.findElementByText("Multiple Selection", SearchOptions.exact);
                await multipleSelection.click();
    
                const item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                expect(item).to.exist;
            });
            it("Select an item and verify it is marked as selected", async () =>{
                const item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                await item.click();
                const locator = isAndroid ? "android.view.ViewGroup" : "XCUIElementTypeCell"
                const items  = await driver.findElementsByClassName(locator);
                const selected = isAndroid ? await items[2] : await items[0];
                expect(selected).to.exist;
                const selection = await driver.compareElement(selected, "selectedItem");
                expect(selection).to.equal(true);
            });
        });

        describe("Programmatic selection", () =>{
            it("Navigate to Programmatic selection example", async () => {
                await navigateToHome(driver);
                const selection = await driver.findElementByText("Selection", SearchOptions.exact);
                await selection.click();
                driver.wait(1000);
                const progSelection = await driver.findElementByText("Programmatic Selection", SearchOptions.exact);
                await progSelection.click();
    
                const label = await driver.findElementByText("Select item at:", SearchOptions.exact);
                expect(label).to.exist;
            });
            it("Select an item and verify its style", async () =>{
                const selectAll = await driver.findElementByText("Select all", SearchOptions.exact);
                await selectAll.click();

                const locator = isAndroid ? "android.view.ViewGroup" : "XCUIElementTypeCell"
                const items  = await driver.findElementsByClassName(locator);
                const selected = isAndroid ? await items[5] : await items[0];
                expect(selected).to.exist;
                const selection = await driver.compareElement(selected, "programmaticSelectedItem");
                expect(selection).to.equal(true);
            });
        });

    });


    describe("Selection States", () =>{
        it("Navigate to selection states example", async () => {
            await navigateToHome(driver);
            let listView;
            if(isAndroid){
                listView = await driver.findElementByClassName("android.widget.FrameLayout");
            }
            else{
                listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
            }
            
            const listItem = await listView.scrollTo(
                Direction.down,
                () => driver.findElementByText("Selection states", SearchOptions.exact),
                600
            )
            expect(listItem).to.exist;
            await listItem.click();

            const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
            expect(item0).to.exist;
        });

        it("Select item and verify it is marked as selected", async () => {
            const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
            await item0.click();
            const locator = isAndroid ? "android.view.ViewGroup" : "XCUIElementTypeCell"
            const items  = await driver.findElementsByClassName(locator);
            const selected = isAndroid ? await items[2] : await items[0];
            expect(selected).to.exist;
            const selection = await driver.compareElement(selected, "selectedState");
            expect(selection).to.equal(true);
        });
    });

    describe("Load on demand", () =>{
        describe("Manual with fixed size", () =>{
            it("Navigate to example", async () => {
                await navigateToHome(driver);
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Load on Demand", SearchOptions.exact),
                    1000
                )
                expect(listItem).to.exist;
                await listItem.click();

                const manualFixed = await driver.findElementByText("Manual with Fixed Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();

                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Scroll to load more button and load more items", async () =>{
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const loadMore = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Load More", SearchOptions.exact), 
                    1000
                )
                await loadMore.click();
                const newItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Leland Warner", SearchOptions.exact),
                    1000
                )
                expect(newItem).to.exist;
            });
        });

        describe("Manual with variable size", () =>{
            it("Navigate to example", async () => {
                await navigateToHome(driver);
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Load on Demand", SearchOptions.exact),
                    1000
                )
                expect(listItem).to.exist;
                await listItem.click();

                const manualFixed = await driver.findElementByText("Manual with Variable Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();

                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Scroll to load more button and load more items", async () =>{
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const loadMore = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Load More", SearchOptions.exact), 
                    1000
                )
                await loadMore.click();
                const newItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Leland Warner", SearchOptions.exact),
                    1000
                )
                expect(newItem).to.exist;
            });
        });

        describe("Auto with fixed size", () =>{
            it("Navigate to example", async () => {
                await navigateToHome(driver);
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Load on Demand", SearchOptions.exact),
                    1000
                )
                expect(listItem).to.exist;
                await listItem.click();

                const manualFixed = await driver.findElementByText("Auto with Fixed Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();

                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Scroll down and load more items", async () =>{
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const newItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Leland Warner", SearchOptions.exact),
                    1000
                )
                expect(newItem).to.exist;
            });
        });

        describe("Auto with variable size", () =>{
            it("Navigate to example", async () => {
                await navigateToHome(driver);
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Load on Demand", SearchOptions.exact),
                    700
                )
                expect(listItem).to.exist;
                await listItem.click();

                const manualFixed = await driver.findElementByText("Auto with Variable Item Size", SearchOptions.exact);
                expect(manualFixed).to.exist;
                await manualFixed.click();

                const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;

            });

            it("Scroll down and load more items", async () =>{
                let listView;
                if(isAndroid){
                    listView = await driver.findElementByClassName("android.widget.FrameLayout");
                }
                else{
                    listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
                }
                const newItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Leland Warner", SearchOptions.exact),
                    1000
                )
                expect(newItem).to.exist;
            });
        });
    });

    describe("Observable array", () =>{
        it("Navigate to Observable array example", async () => {
            await navigateToHome(driver);
            if(isAndroid){
                const listView = await driver.findElementByClassName("android.widget.FrameLayout");
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Observable Array", SearchOptions.exact),
                    700
                )
                await listItem.click();
            }
            else{
                const item = await driver.findElementByText("Observable Array", SearchOptions.exact);
                await item.click();
            }
            
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
            driver.wait(1000);
            const itemDeleted = isAndroid ? await driver.findElementByTextIfExists("the new item", SearchOptions.contains)
                : await driver.findElementByAccessibilityIdIfExists("This is the new item's description.");
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

    describe("Pull to Refresh", () =>{
        it("Navigate to Pull to Refresh example", async () => {
            await navigateToHome(driver);
            if(isAndroid){
                const listView = await driver.findElementByClassName("android.widget.FrameLayout");
                const listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Pull to Refresh", SearchOptions.exact),
                    700
                )
                await listItem.click();
            }
            else{
                const item = await driver.findElementByText("Pull to Refresh", SearchOptions.exact);
                await item.click();
            }
            
            const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
            expect(item).to.exist;
        });
    
        it("Pull the listView down to refresh items", async () => {
            const item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
            expect(item).to.exist;
            await item.scroll(Direction.up, 600);
            const itemNew = await driver.findElementByText("Leland Warner", SearchOptions.exact);
            expect(itemNew).to.exist;
        });
    });

    describe("Swipe actions", () =>{
        describe("Getting Started", () =>{
            it("Navigate to getting started swipe actions example", async () => {
                await navigateToHome(driver);
                const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
                const listView = await driver.findElementByClassName(locator);
                let listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Swipe actions", SearchOptions.exact),
                    500
                )
                await listItem.click();
                const item = await driver.findElementByText("Getting Started", SearchOptions.exact);
                await item.click();
                listItem = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(listItem).to.exist
            });
        
            it("Swipe item left, delet it and verify it is deleted", async () => {
                let item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;
                if(isAndroid){
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({x:  centerX, y: centerY})
                        .wait(100)
                        .moveTo({x: 0 , y: centerY})
                        .release();
                    await action.perform();
                }
                else{
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
                if(isAndroid){
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({x: centerX, y: centerY})
                        .wait(100)
                        .moveTo({x: centerX + centerX / 2, y: centerY})
                        .release();
                    await action.perform();
                }
                else{
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

        describe("Multiple actions", () =>{
            it("Navigate to multiple actions example", async () => {
                await navigateToHome(driver);
                const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
                const listView = await driver.findElementByClassName(locator);
                let listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Swipe actions", SearchOptions.exact),
                    700
                )
                await listItem.click();
                const item = await driver.findElementByText("Multiple actions", SearchOptions.exact);
                await item.click();
                listItem = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(listItem).to.exist
            });
        
            it("Swipe item left, and verify multiple buttons appears", async () => {
                let item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;
                if(isAndroid){
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({x: centerX, y: centerY})
                        .wait(100)
                        .moveTo({x: 0, y: centerY})
                        .release();
                    await action.perform();
                }
                else{
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
                if(isAndroid){
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({x: centerX / 2 , y: centerY})
                        .wait(100)
                        .moveTo({x: centerX, y: centerY})
                        .release();
                    await action.perform();
                }
                else{
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

        describe("Disable/Enable", () =>{
            it("Navigate to disable/enable example", async () => {
                await navigateToHome(driver);
                const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
                const listView = await driver.findElementByClassName(locator);
                let listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Swipe actions", SearchOptions.exact),
                    700
                )
                await listItem.click();
                const item = await driver.findElementByText("Disable\\Enable", SearchOptions.exact);
                await item.click();
                listItem = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(listItem).to.exist
            });
        
            it("Swipe item left, and verify button appears", async () => {
                let item = await driver.findElementByText("Joyce Dean", SearchOptions.exact);
                expect(item).to.exist;
                if(isAndroid){
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({x: centerX, y: centerY})
                        .wait(100)
                        .moveTo({x: 0, y: centerY})
                        .release();
                    await action.perform();
                }
                else{
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
                if(isAndroid){
                    const rectangle = await item.getRectangle();
                    const centerX = rectangle.x + rectangle.width / 2;
                    const centerY = rectangle.y + rectangle.height / 2;
                    const wd = driver.wd();
                    const action = new wd.TouchAction(driver.driver);
                    action.press({x: centerX, y: centerY})
                        .wait(100)
                        .moveTo({x: 0, y: centerY})
                        .release();
                    await action.perform();
                    const selection = await driver.compareElement(item, "item");
                    expect(selection).to.equal(true);
                }
                else{
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

    describe("Header and Footer", () =>{
        it("Navigate to Header and Footer example, verify its items, header and footer", async () => {
            await navigateToHome(driver);
            const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
            const listView = await driver.findElementByClassName(locator);
            let listItem = await listView.scrollTo(
                Direction.down,
                () => driver.findElementByText("Header and Footer", SearchOptions.exact),
                700
            )
            await listItem.click();
            const listHeader = await driver.findElementByText("This is the list header", SearchOptions.exact);
            expect(listHeader).to.exist;

            const listFooter = await driver.findElementByText("This is the list header", SearchOptions.exact);
            expect(listFooter).to.exist;
        });
    });

    describe("Item separators", () =>{
        it("Navigate to Item separators", async () => {
            await navigateToHome(driver);
            const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
            const listView = await driver.findElementByClassName(locator);
            let listItem = await listView.scrollTo(
                Direction.down,
                () => driver.findElementByText("Item separators", SearchOptions.exact),
                700
            )
            await listItem.click();

            const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
            expect(item0).to.exist;
        });
    });

    describe("Scroll to Index", () => {
        describe("In vertical direction", () => {
            it("Navigate to vertical direction demo, scroll and verify index", async () =>{
                await navigateToHome(driver);
                const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
                const listView = await driver.findElementByClassName(locator);
                let listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Scroll to index", SearchOptions.exact),
                    700
                )
                await listItem.click();
                
                const verticalDirection = await driver.findElementByText("In vertical direction", SearchOptions.exact);
                await verticalDirection.click();
    
                const scrollBtn = await driver.findElementByText("SCROLL TO INDEX 50", SearchOptions.exact);
                await scrollBtn.click();
                const item50 = await driver.findElementByText("Item 50", SearchOptions.exact);
                expect(item50).to.exist;
            })
        });

        describe("In horizontal direction", () => {
            it("Navigate to horizontal direction demo, scroll and verify index", async () =>{
                await navigateToHome(driver);
                const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
                const listView = await driver.findElementByClassName(locator);
                let listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Scroll to index", SearchOptions.exact),
                    700
                )
                await listItem.click();
                const horizontalDirection = await driver.findElementByText("In horizontal direction", SearchOptions.exact);
                await horizontalDirection.click();
    
                const scrollBtn = await driver.findElementByText("SCROLL TO INDEX 50", SearchOptions.exact);
                await scrollBtn.click();
                const item50 = await driver.findElementByText("Item 50", SearchOptions.exact);
                expect(item50).to.exist;
            })
        });

        describe("Initially scrolled", () => {
            it("Navigate to horizontal direction demo and verify index", async () =>{
                await navigateToHome(driver);
                const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
                const listView = await driver.findElementByClassName(locator);
                let listItem = await listView.scrollTo(
                    Direction.down,
                    () => driver.findElementByText("Scroll to index", SearchOptions.exact),
                    700
                )
                await listItem.click();
                const horizontalDirection = await driver.findElementByText("Initially scrolled", SearchOptions.exact);
                await horizontalDirection.click();
    
                const scrollLabel = await driver.findElementByText("RadListView is initially scrolled", SearchOptions.contains);
                expect(scrollLabel).to.exist;
                const item20 = await driver.findElementByText("Item 20", SearchOptions.exact);
                expect(item20).to.exist;
            })
        });
    });

    describe("Scroll events", () =>{
        it("Navigate to scroll events", async () =>{
            await navigateToHome(driver);
            const locator = isAndroid ? "android.widget.FrameLayout" : "XCUIElementTypeCollectionView";
            const listView = await driver.findElementByClassName(locator);
            let listItem = await listView.scrollTo(
                Direction.down,
                () => driver.findElementByText("Scroll Events", SearchOptions.exact),
                700
            )
            await listItem.click();
            let scrollStateLabel;
            if(isAndroid){
                scrollStateLabel = await driver.findElementByText("State: Scrolled with offset: 0", SearchOptions.exact);
            }
            else{
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
            )
            const scrollStateLabel = await driver.findElementByText("ended with offset:", SearchOptions.contains);
            expect(scrollStateLabel).to.exist;
        })

    });

});
