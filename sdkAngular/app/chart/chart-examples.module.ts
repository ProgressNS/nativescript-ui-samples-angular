import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIChartModule } from "nativescript-telerik-ui-pro/chart/angular";

import { ChartAnnotationsGridLineComponent } from './annotations/chart-annotations-grid-line.component';
import { ChartAnnotationsPlotBandComponent } from './annotations/chart-annotations-plot-band.component';
import { ChartAxesCustomizationComponent } from './axes/customization/chart-axes-customization.component';
import { ChartAxesDateTimeComponent } from './axes/date-time-axes/chart-axes-date-time.component';
import { ChartAxesMultipleComponent } from './axes/multiple/chart-axes-multiple.component';
import { ChartAxesNegativeValuesComponent } from './axes/negative-values/chart-axes-negative-values.component';
import { ChartBehaviorsChartPieSelectionComponent } from './behaviors/chart-behaviors-chart-pie-selection.component';
import { ChartBehaviorsDatapointSelectionComponent } from './behaviors/chart-behaviors-datapoint-selection.component';
import { ChartBehaviorsPanZoomComponent } from './behaviors/chart-behaviors-pan-zoom.component';
import { ChartBehaviorsSeriesSelectionComponent } from './behaviors/chart-behaviors-series-selection.component';
import { ChartBehaviorsTrackballComponent } from './behaviors/chart-behaviors-trackball.component';
import { ChartLegendComponent } from './legend/chart-legend.component';
import { ChartSeriesAreaComponent } from './series/area/chart-series-area.component';
import { ChartSeriesStackedAreaComponent } from './series/area/chart-series-stacked-area.component';
import { ChartSeriesBarComponent } from './series/bar/chart-series-bar.component';
import { ChartSeriesRangeBarComponent } from './series/bar/chart-series-range-bar.component';
import { ChartSeriesStackedBarComponent } from './series/bar/chart-series-stacked-bar.component';
import { ChartSeriesBubbleComponent } from './series/bubble/chart-series-bubble.component';
import { ChartSeriesScatterBubbleComponent } from './series/bubble/chart-series-scatter-bubble.component';
import { ChartSeriesCandlestickComponent } from './series/financial/chart-series-candlestick.component';
import { ChartSeriesOhlcComponent } from './series/financial/chart-series-ohlc.component';
import { ChartSeriesLineComponent } from './series/line/chart-series-line.component';
import { ChartSeriesPieComponent } from './series/pie/chart-series-pie.component';
import { ChartSeriesScatterComponent } from './series/scatter/chart-series-scatter.component';
import { ChartSeriesSplineAreaComponent } from './series/spline/chart-series-spline-area.component';
import { ChartSeriesSplineComponent } from './series/spline/chart-series-spline.component';
import { ChartStylingAxesComponent } from './styling/chart-styling-axes.component';
import { ChartStylingGridComponent } from './styling/chart-styling-grid.component';
import { ChartStylingLabelComponent } from './styling/chart-styling-label.component';
import { ChartStylingPieSeriesComponent } from './styling/chart-styling-pie-series.component';
import { ChartStylingSelectionComponent } from './styling/chart-styling-selection.component';
import { ChartStylingSeriesComponent } from './styling/chart-styling-series.component';

import { routes } from './chart-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    imports: [
        NativeScriptModule,        
        CommonDirectivesModule,
        NativeScriptUIChartModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        ChartAnnotationsGridLineComponent,
        ChartAnnotationsPlotBandComponent,
        ChartAxesCustomizationComponent,
        ChartAxesDateTimeComponent,
        ChartAxesMultipleComponent,
        ChartAxesNegativeValuesComponent,
        ChartBehaviorsChartPieSelectionComponent,
        ChartBehaviorsDatapointSelectionComponent,
        ChartBehaviorsPanZoomComponent,
        ChartBehaviorsSeriesSelectionComponent,
        ChartBehaviorsTrackballComponent,
        ChartLegendComponent,
        ChartSeriesAreaComponent,
        ChartSeriesStackedAreaComponent,
        ChartSeriesBarComponent,
        ChartSeriesRangeBarComponent,
        ChartSeriesStackedBarComponent,
        ChartSeriesBubbleComponent,
        ChartSeriesScatterBubbleComponent,
        ChartSeriesCandlestickComponent,
        ChartSeriesOhlcComponent,
        ChartSeriesLineComponent,
        ChartSeriesPieComponent,
        ChartSeriesScatterComponent,
        ChartSeriesSplineAreaComponent,
        ChartSeriesSplineComponent,
        ChartStylingAxesComponent,
        ChartStylingGridComponent,
        ChartStylingLabelComponent,
        ChartStylingPieSeriesComponent,
        ChartStylingSelectionComponent,
        ChartStylingSeriesComponent
    ]
})
export class ChartExamplesModule { }