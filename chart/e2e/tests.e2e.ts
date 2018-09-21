import { AppiumDriver, createDriver, SearchOptions, Direction, UIElement, Point } from "nativescript-dev-appium";
import { isSauceLab, runType, capabilitiesName } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import "./helper";
import { navigateToView, navigateToHome, scrollToElement } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Chart1", () => {
    const seriesText = "Series";
    const stylingText = "Styling";
    const animationTime = 2000;
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
    describe(seriesText, () => {
        it("should open Bar series", async () => {
            const seriesButton = await driver.findElementByText(seriesText);
            await seriesButton.click();
            const seriesTitle = await driver.findElementByText(seriesText);
            expect(seriesTitle).to.exist;
            const barSeriesButton = await driver.findElementByText("Bar series");
            await barSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("bar-series");
            expect(isTrue).to.be.true;
        });
        it("should open Range Bar series", async () => {
            await navigateToView(driver, seriesText);
            const rangeBarSeriesButton = await driver.findElementByText("Range Bar series");
            await rangeBarSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("range-bar-series");
            expect(isTrue).to.be.true;
        });
        it("should open Stacked Bar series", async () => {
            await navigateToView(driver, seriesText);
            const stackedBarSeriesButton = await driver.findElementByText("Stacked Bar series");
            await stackedBarSeriesButton.click();
            await driver.wait(2000);
            const isTrue = await driver.compareScreen("stacked-bar-series");
            expect(isTrue).to.be.true;
        });
        it("should open Area series", async () => {
            await navigateToView(driver, seriesText);
            const areaSeriesButton = await driver.findElementByText("Area Series");
            await areaSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("area-series");
            expect(isTrue).to.be.true;
        });
        it("should open Stacked Area series", async () => {
            await navigateToView(driver, seriesText);
            const stackedAreaSeriesButton = await driver.findElementByText("Stacked Area Series");
            await stackedAreaSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("stacked-area-series");
            expect(isTrue).to.be.true;
        });
        it("should open Line series", async () => {
            await navigateToView(driver, seriesText);
            const lineSeriesButton = await driver.findElementByText("Line series");
            await lineSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("line-series");
            expect(isTrue).to.be.true;
        });
        it("should open Spline series", async () => {
            await navigateToView(driver, seriesText);
            const splineAreaSeriesButton = await driver.findElementByText("Spline series");
            await splineAreaSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("spline-series");
            expect(isTrue).to.be.true;
        });
        it("should open Spline Area series", async () => {
            await navigateToView(driver, seriesText);
            const splineSeriesButton = await driver.findElementByText("Spline Area series");
            await splineSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("spline-area-series");
            expect(isTrue).to.be.true;
        });
        it("should open Bubble series", async () => {
            await navigateToView(driver, seriesText);
            const bubbleSeriesButton = await driver.findElementByText("Bubble series");
            await bubbleSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("bubble-series");
            expect(isTrue).to.be.true;
        });
        it("should open Scatter Bubble series", async () => {
            await navigateToView(driver, seriesText);
            const scatterBubbleSeriesButton = await scrollToElement(driver, "Scatter Bubble series");
            await scatterBubbleSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("scatter-bubble-series");
            expect(isTrue).to.be.true;
        });
        it("should open Candlestick series", async () => {
            await navigateToView(driver, seriesText);
            const candlestickSeriesButton = await scrollToElement(driver, "Candlestick series");
            await candlestickSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("candlestick-series");
            expect(isTrue).to.be.true;
        });
        it("should open Ohlc series", async () => {
            await navigateToView(driver, seriesText);
            const ohlcSeriesButton = await scrollToElement(driver, "Ohlc series");
            await ohlcSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("ohlc-series");
            expect(isTrue).to.be.true;
        });
        it("should open Pie series", async () => {
            await navigateToView(driver, seriesText);
            const pieSeriesButton = await scrollToElement(driver, "Pie series");
            await pieSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("pie-series");
            expect(isTrue).to.be.true;
        });
        it("should open Scatter series", async () => {
            await navigateToView(driver, seriesText);
            const scatterSeriesButton = await scrollToElement(driver, "Scatter series");
            await scatterSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("scatter-series");
            expect(isTrue).to.be.true;
        });
    });

    describe(stylingText, () => {
        it("should open Styling axes", async () => {
            await navigateToHome(driver);
            const stylingButton = await driver.findElementByText(stylingText);
            await stylingButton.click();
            const stylingTitle = await driver.findElementByText(stylingText);
            expect(stylingTitle).to.exist;
            const stylingAxesButton = await driver.findElementByText("Styling axes");
            await stylingAxesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-axes");
            expect(isTrue).to.be.true;
        });
        it("should open Styling series", async () => {
            await navigateToView(driver, stylingText);
            const stylingSeriesButton = await driver.findElementByText("Styling series");
            await stylingSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-series");
            expect(isTrue).to.be.true;
        });
        it("should open Styling grid", async () => {
            await navigateToView(driver, stylingText);
            const stylingGridButton = await driver.findElementByText("Styling grid");
            await stylingGridButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-grid");
            expect(isTrue).to.be.true;
        });
        it("should open Styling labels", async () => {
            await navigateToView(driver, stylingText);
            const stylingLabelsButton = await driver.findElementByText("Styling labels");
            await stylingLabelsButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-labels");
            expect(isTrue).to.be.true;
        });
        it("should open Styling ticks", async () => {
            await navigateToView(driver, stylingText);
            const stylingTicksButton = await driver.findElementByText("Styling ticks");
            await stylingTicksButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-ticks");
            expect(isTrue).to.be.true;
        });
        it("should open Styling series selection", async () => {
            await navigateToView(driver, stylingText);
            const stylingSeriesSelectionButton = await driver.findElementByText("Styling series selection");
            await stylingSeriesSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-series-selection");
            expect(isTrue).to.be.true;
        });
    });
});