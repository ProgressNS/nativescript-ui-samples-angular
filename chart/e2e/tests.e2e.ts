import { AppiumDriver, createDriver, SearchOptions, Direction, UIElement, Point } from "nativescript-dev-appium";
import { isSauceLab, runType, capabilitiesName } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import "./helper";
import { navigateToView, navigateToHome } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Chart", () => {
    const seriesText = "Series";
    const stylingText = "Styling";
    const legendText = "Legend";
    const interactionText = "Interaction";
    const axesText = "Axes";
    const annotationsText = "Annotations";
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
            const wd = driver.wd();
            const action = new wd.TouchAction(driver.driver);
            action.press({ x: 52, y: 499 })
                .moveTo({ x: -2, y: -294 })
                .release();
            await action.perform();
            await driver.wait(1000);
            const scatterBubbleSeriesButton = await driver.findElementByText("Scatter Bubble series");
            await scatterBubbleSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("scatter-bubble-series");
            expect(isTrue).to.be.true;
        });
        it("should open Candlestick series", async () => {
            await navigateToView(driver, seriesText);
            const candlestickSeriesButton = await driver.findElementByText("Candlestick series");
            await candlestickSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("candlestick-series");
            expect(isTrue).to.be.true;
        });
        it("should open Ohlc series", async () => {
            await navigateToView(driver, seriesText);
            const ohlcSeriesButton = await driver.findElementByText("Ohlc series");
            await ohlcSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("ohlc-series");
            expect(isTrue).to.be.true;
        });
        it("should open Pie series", async () => {
            await navigateToView(driver, seriesText);
            const pieSeriesButton = await driver.findElementByText("Pie series");
            await pieSeriesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("pie-series");
            expect(isTrue).to.be.true;
        });
        it("should open Scatter series", async () => {
            await navigateToView(driver, seriesText);
            const scatterSeriesButton = await driver.findElementByText("Scatter series");
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
        it("should open Styling series selection", async () => {
            await navigateToView(driver, stylingText);
            const stylingSeriesSelectionButton = await driver.findElementByText("Styling series selection");
            await stylingSeriesSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("styling-series-selection");
            expect(isTrue).to.be.true;
        });
    });

    describe(legendText, () => {
        it("should open Legend", async () => {
            await navigateToHome(driver);
            const legendButton = await driver.findElementByText(legendText);
            await legendButton.click();
            const legendTitle = await driver.findElementByText(legendText);
            expect(legendTitle).to.exist;
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("legend");
            expect(isTrue).to.be.true;
        });
        it("should select Area series chart", async () => {
            const areaSeriesLabel = await driver.findElementByText("Area series");
            await areaSeriesLabel.click();
            const isTrue = await driver.compareScreen("legend-area-selected");
            expect(isTrue).to.be.true;
        });
    });

    describe(interactionText, () => {
        it("should open Pan and Zoom", async () => {
            await navigateToHome(driver);
            const interactionButton = await driver.findElementByText(interactionText);
            await interactionButton.click();
            const interactionTitle = await driver.findElementByText(interactionText);
            expect(interactionTitle).to.exist;
            const panAndZoomButton = await driver.findElementByText("Pan & Zoom");
            await panAndZoomButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("pan-and-zoom");
            expect(isTrue).to.be.true;
        });
        it("should open Pie selection", async () => {
            await navigateToView(driver, interactionText);
            const pieSelectionButton = await driver.findElementByText("Pie selection");
            await pieSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("pie-selection");
            expect(isTrue).to.be.true;
            if (!isAndroid) {
                const label4 = await driver.findElementByText("Series 4");
                expect(label4).to.exist;
            }
        });
        it("should open Trackball", async () => {
            await navigateToView(driver, interactionText);
            const trackballButton = await driver.findElementByText("Trackball");
            await trackballButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("trackball");
            expect(isTrue).to.be.true;
        });
        it("should open Series selection", async () => {
            await navigateToView(driver, interactionText);
            const seriesSelectionButton = await driver.findElementByText("Series selection");
            await seriesSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("series-selection");
            expect(isTrue).to.be.true;
        });
        it("should open Datapoint selection", async () => {
            await navigateToView(driver, interactionText);
            const datapointSelectionButton = await driver.findElementByText("Datapoint selection");
            await datapointSelectionButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("datapoint-selection");
            expect(isTrue).to.be.true;
        });
    });

    describe(axesText, () => {
        it("should open Customization", async () => {
            await navigateToHome(driver);
            const axesButton = await driver.findElementByText(axesText);
            await axesButton.click();
            const axesTitle = await driver.findElementByText(axesText);
            expect(axesTitle).to.exist;
            const customizationButton = await driver.findElementByText("Customization");
            await customizationButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("customization");
            expect(isTrue).to.be.true;
        });
        it("should open Multiple axes", async () => {
            await navigateToView(driver, axesText);
            const multipleAxesButton = await driver.findElementByText("Multiple axes");
            await multipleAxesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("multiple-axes");
            expect(isTrue).to.be.true;
        });
        it("should open Negative values", async () => {
            await navigateToView(driver, axesText);
            const negativeValuesButton = await driver.findElementByText("Negative values");
            await negativeValuesButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("negative-values");
            expect(isTrue).to.be.true;
        });
        it("should open Date time axis", async () => {
            await navigateToView(driver, axesText);
            const dateTimeAxisButton = await driver.findElementByText("Date time axis");
            await dateTimeAxisButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("date-time-axis");
            expect(isTrue).to.be.true;
        });
        it("should open Label visibility", async () => {
            await navigateToView(driver, axesText);
            const labelVisibilityButton = await driver.findElementByText("Label visibility");
            await labelVisibilityButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("label-visibility");
            expect(isTrue).to.be.true;
        });
    });

    describe(annotationsText, () => {
        it("should open Plot band", async () => {
            await navigateToHome(driver);
            const annotationsButton = await driver.findElementByText(annotationsText);
            await annotationsButton.click();
            const annotationsTitle = await driver.findElementByText(annotationsText);
            expect(annotationsTitle).to.exist;
            const plotBandButton = await driver.findElementByText("Plot band");
            await plotBandButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("plot-band");
            expect(isTrue).to.be.true;
        });
        it("should open Grid line", async () => {
            await navigateToView(driver, annotationsText);
            const gridLineButton = await driver.findElementByText("Grid line");
            await gridLineButton.click();
            await driver.wait(animationTime);
            const isTrue = await driver.compareScreen("grid-line");
            expect(isTrue).to.be.true;
        });
    });
});