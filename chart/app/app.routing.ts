import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

const APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
    {
        path: "ChartSeriesAreaComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Area Series"
        }
    },
    {
        path: "ChartSeriesStackedAreaComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Stacked Area Series"
        }
    },
    {
        path: "ChartSeriesBarComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Bar series"
        }
    },
    {
        path: "ChartSeriesRangeBarComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Range Bar series"
        }
    },
    {
        path: "ChartSeriesStackedBarComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Stacked Bar series"
        }
    },
    {
        path: "ChartSeriesBubbleComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Bubble series"
        }
    },
    {
        path: "ChartSeriesScatterBubbleComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Scatter Bubble series"
        }
    },
    {
        path: "ChartSeriesCandlestickComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Candlestick series"
        }
    },
    {
        path: "ChartSeriesOhlcComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Ohlc series"
        }
    },
    {
        path: "ChartSeriesLineComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Line series"
        }
    },
    {
        path: "ChartSeriesPieComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Pie series"
        }
    },
    {
        path: "ChartSeriesScatterComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Scatter series"
        }
    },
    {
        path: "ChartSeriesSplineComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Spline series"
        }
    },
    {
        path: "ChartSeriesSplineAreaComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Spline Area series"
        }
    },
    {
        path: "ChartAnnotationsGridLineComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Grid line"
        }
    },
    {
        path: "ChartAnnotationsPlotBandComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Plot band"
        }
    },
    {
        path: "ChartBehaviorsDatapointSelectionComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Datapoint selection"
        }
    },
    {
        path: "ChartBehaviorsPanZoomComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Pan & Zoom"
        }
    },
    {
        path: "ChartBehaviorsChartPieSelectionComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Pie selection"
        }
    },
    {
        path: "ChartBehaviorsSeriesSelectionComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Series selection"
        }
    },
    {
        path: "ChartBehaviorsTrackballComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Trackball"
        }
    },
    {
        path: "ChartBehaviorsTrackballContentComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Trackball Content"
        }
    },
    {
        path: "ChartLegendComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Legend"
        }
    },
    {
        path: "ChartAxesCustomizationComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Customization"
        }
    },
    {
        path: "ChartAxesDateTimeComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Date time axis"
        }
    },
    {
        path: "ChartLabelVisibilityComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Label visibility"
        }
    },
    {
        path: "ChartAxesMultipleComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Multiple axes"
        }
    },
    {
        path: "ChartAxesNegativeValuesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Negative values"
        }
    },
    {
        path: "ChartStylingAxesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling axes"
        }
    },
    {
        path: "ChartStylingGridComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling grid"
        }
    },
    {
        path: "ChartStylingLabelComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling labels"
        }
    },
    {
        path: "ChartStylingSelectionComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling series selection"
        }
    },
    {
        path: "ChartStylingSeriesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling series"
        }
    },
    {
        path: "ChartStylingPieSeriesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Pie Chart series"
        }
    },
    {
        path: "ChartStylingTicksComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Ticks"
        }
    }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);