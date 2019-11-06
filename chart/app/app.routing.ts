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
            "title": "Bar Series"
        }
    },
    {
        path: "ChartSeriesRangeBarComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Range Bar Series"
        }
    },
    {
        path: "ChartSeriesStackedBarComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Stacked Bar Series"
        }
    },
    {
        path: "ChartSeriesBubbleComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Bubble Series"
        }
    },
    {
        path: "ChartSeriesScatterBubbleComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Scatter Bubble Series"
        }
    },
    {
        path: "ChartSeriesCandlestickComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Candlestick Series"
        }
    },
    {
        path: "ChartSeriesOhlcComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Ohlc Series"
        }
    },
    {
        path: "ChartSeriesLineComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Line Series"
        }
    },
    {
        path: "ChartSeriesPieComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Pie Series"
        }
    },
    {
        path: "ChartSeriesScatterComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Scatter Series"
        }
    },
    {
        path: "ChartSeriesSplineComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Spline Series"
        }
    },
    {
        path: "ChartSeriesSplineAreaComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Spline Area Series"
        }
    },
    {
        path: "ChartAnnotationsGridLineComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Grid Line"
        }
    },
    {
        path: "ChartAnnotationsPlotBandComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Plot Band"
        }
    },
    {
        path: "ChartBehaviorsDatapointSelectionComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Datapoint Selection"
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
            "title": "Pie Selection"
        }
    },
    {
        path: "ChartBehaviorsSeriesSelectionComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Series Selection"
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
            "title": "DateTime Axis"
        }
    },
    {
        path: "ChartLabelVisibilityComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Label Visibility"
        }
    },
    {
        path: "ChartAxesMultipleComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Multiple Axes"
        }
    },
    {
        path: "ChartAxesNegativeValuesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Negative Values"
        }
    },
    {
        path: "ChartCssBarComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Bar CSS"
        }
    },
    {
        path: "ChartCssLineComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Line CSS"
        }
    },
    {
        path: "ChartCssAreaComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Area CSS"
        }
    },
    {
        path: "ChartCssScatterComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Scatter CSS"
        }
    },
    {
        path: "ChartCssCandlestickComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Candlestick CSS"
        }
    },
    {
        path: "ChartCssDonutComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Donut CSS"
        }
    },
    {
        path: "ChartStylingAxesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Axes"
        }
    },
    {
        path: "ChartStylingGridComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Grid"
        }
    },
    {
        path: "ChartStylingLabelComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Labels"
        }
    },
    {
        path: "ChartStylingSelectionComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Series Selection"
        }
    },
    {
        path: "ChartStylingSeriesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Series"
        }
    },
    {
        path: "ChartStylingPieSeriesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Pie Series"
        }
    },
    {
        path: "ChartStylingTicksComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Ticks"
        }
    },
    {
        path: "ChartStylingBarSeriesComponent",
        loadChildren: './examples/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Bar Series"
        }
    }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);