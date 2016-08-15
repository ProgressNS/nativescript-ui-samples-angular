import { Component, OnInit, Inject, ViewChild, DynamicComponentLoader, ViewContainerRef, ComponentRef } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { RouterConfig, ActivatedRoute, Router, ROUTER_DIRECTIVES, RouterOutletMap, Event, RouterStateSnapshot } from '@angular/router';
import { StackLayout } from "ui/layouts/stack-layout";
import * as frameModule from "ui/frame";

import { ListViewGettingStartedComponent } from "../../listview/getting-started/listview-getting-started.component";
import { ListViewHeaderFooterComponent } from "../../listview/header-footer/listview-header-footer.component";
import { ListViewItemReorderComponent } from "../../listview/item-reorder/listview-item-reorder.component";
import { ListViewItemSelectionComponent } from "../../listview/item-selection/listview-item-selection.component";
import { ListviewSelectionStatesComponent } from "../../listview/selection-states/listview-selection-states.component";
import { ListViewSwipeExecuteComponent } from "../../listview/swipe-execute/listview-swipe-execute.component";
import { ListViewLoadOnDemandComponent } from "../../listview/load-on-demand/listview-load-on-demand.component";
import { ListViewPullToRefreshComponent } from "../../listview/pull-to-refresh/listview-pull-to-refresh.component";
import { ListViewItemAnimationsComponent } from "../../listview/item-animations/listview-item-animations.component";
import { ListViewItemLayoutsGridComponent } from "../../listview/item-layouts/listview-item-layouts-grid.component";
import { ListviewItemLayoutsLinearComponent } from "../../listview/item-layouts/listview-item-layouts-linear.component";
import { ListviewItemLayoutsStaggeredComponent } from "../../listview/item-layouts/listview-item-layouts-staggered.component";
import { ListviewItemLoadingComponent } from "../../listview/item-loading/listview-item-loading.component";
import { ListviewItemReorderHandleComponent } from "../../listview/item-reorder/listview-item-reorder-handle.component";
import { ListviewItemSelectionMultipleComponent } from "../../listview/item-selection/listview-item-selection-multiple.component";
import { ListviewItemSelectionProgrammaticComponent } from "../../listview/item-selection/listview-item-selection-programmatic.component";
import { ListviewObservableArrayComponent } from "../../listview/observable-array/listview-observable-array.component";
import { ListviewSwipeExecuteStickyComponent } from "../../listview/swipe-execute/listview-swipe-execute-sticky.component";
import { ListviewSwipeExecuteStretchComponent } from "../../listview/swipe-execute/listview-swipe-execute-stretch.component";
import { ListviewItemSeparatorComponent } from "../../listview/item-separator/listview-item-separator.component";
import { SideDrawerGettingStartedComponent } from "../../sidedrawer/getting-started/getting-started.component";
import { SideDrawerEventsComponent } from "../../sidedrawer/events/events.component";
import { SideDrawerPositionComponent } from "../../sidedrawer/position/position.component";
import { SideDrawerTransitionsComponent } from "../../sidedrawer/transitions/transitions.component";
import { CalendarGettingStartedComponent } from "../../calendar/getting-started/calendar-getting-started.component";
import { CalendarPopulatingWithDataComponent } from "../../calendar/populating-with-data/calendar-populating-with-data.component";
import { CalendarProgramaticControlComponent } from "../../calendar/programatic-control/calendar-programatic-control.component";
import { CalendarViewModesComponent } from "../../calendar/view-modes/calendar-view-modes.component";
import { CalendarSelectionModesComponent } from "../../calendar/selection-modes/calendar-selection-modes.component";
import { CalendarCellStylingComponent } from "../../calendar/cell-styling/calendar-cell-styling.component";
import { CalendarEventsViewModesComponent } from "../../calendar/events-view-modes/calendar-events-view-modes.component";
import { CalendarTransitionModesComponent } from "../../calendar/transition-modes/calendar-transition-modes.component";
import { ChartSeriesAreaComponent } from "../../chart/series/area/chart-series-area.component";
import { ChartSeriesStackedAreaComponent } from "../../chart/series/area/chart-series-stacked-area.component";
import { ChartSeriesBarComponent } from "../../chart/series/bar/chart-series-bar.component";
import { ChartSeriesRangeBarComponent } from "../../chart/series/bar/chart-series-range-bar.component";
import { ChartSeriesStackedBarComponent } from "../../chart/series/bar/chart-series-stacked-bar.component";
import { ChartSeriesBubbleComponent } from "../../chart/series/bubble/chart-series-bubble.component";
import { ChartSeriesScatterBubbleComponent } from "../../chart/series/bubble/chart-series-scatter-bubble.component";
import { ChartSeriesCandlestickComponent } from "../../chart/series/financial/chart-series-candlestick.component";
import { ChartSeriesOhlcComponent } from "../../chart/series/financial/chart-series-ohlc.component";
import { ChartSeriesLineComponent } from "../../chart/series/line/chart-series-line.component";
import { ChartSeriesPieComponent } from "../../chart/series/pie/chart-series-pie.component";
import { ChartSeriesScatterComponent } from "../../chart/series/scatter/chart-series-scatter.component";
import { ChartSeriesSplineComponent } from "../../chart/series/spline/chart-series-spline.component";
import { ChartAnnotationsGridLineComponent } from "../../chart/annotations/chart-annotations-grid-line.component";
import { ChartAnnotationsPlotBandComponent } from "../../chart/annotations/chart-annotations-plot-band.component";
import { ChartBehaviorsDatapointSelectionComponent } from "../../chart/behaviors/chart-behaviors-datapoint-selection.component";
import { ChartBehaviorsPanZoomComponent } from "../../chart/behaviors/chart-behaviors-pan-zoom.component";
import { ChartBehaviorsChartPieSelectionComponent } from "../../chart/behaviors/chart-behaviors-chart-pie-selection.component";
import { ChartBehaviorsSeriesSelectionComponent } from "../../chart/behaviors/chart-behaviors-series-selection.component";
import { ChartLegendComponent } from "../../chart/legend/chart-legend.component";
import { ChartAxesCustomizationComponent } from "../../chart/axes/customization/chart-axes-customization.component";
import { ChartAxesDateTimeComponent } from "../../chart/axes/date-time-axes/chart-axes-date-time.component";
import { ChartAxesMultipleComponent } from "../../chart/axes/multiple/chart-axes-multiple.component";
import { ChartAxesNegativeValuesComponent } from "../../chart/axes/negative-values/chart-axes-negative-values.component";
import { ChartStylingAxesComponent } from "../../chart/styling/chart-styling-axes.component";
import { ChartStylingGridComponent } from "../../chart/styling/chart-styling-grid.component";
import { ChartStylingLabelComponent } from "../../chart/styling/chart-styling-label.component";
import { ChartStylingSelectionComponent } from "../../chart/styling/chart-styling-selection.component";
import { ChartStylingSeriesComponent } from "../../chart/styling/chart-styling-series.component";

@Component({
    moduleId: module.id,
    selector: "tk-example",
    templateUrl: "example.component.html"
})
export class ExampleComponent implements OnInit {
    private _currentExample: ExampleItem;
    private _sub: any;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService, private _loader: DynamicComponentLoader) {
    }

    @ViewChild('exampleCompPlaceholder', { read: ViewContainerRef }) exampleCompPlaceholder: ViewContainerRef;

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
        });
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

    ngAfterViewInit() {
        //Loads the current example component.
        switch (this.currentExample.path) {
            case "ListViewGettingStarted":
                this._loader.loadNextToLocation(ListViewGettingStartedComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewHeaderFooter":
                this._loader.loadNextToLocation(ListViewHeaderFooterComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewItemReorder":
                this._loader.loadNextToLocation(ListViewItemReorderComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewItemSelection":
                this._loader.loadNextToLocation(ListViewItemSelectionComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewSwipeExecute":
                this._loader.loadNextToLocation(ListViewSwipeExecuteComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewLoadOnDemand":
                this._loader.loadNextToLocation(ListViewLoadOnDemandComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewItemAnimations":
                this._loader.loadNextToLocation(ListViewItemAnimationsComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewPullToRefresh":
                this._loader.loadNextToLocation(ListViewPullToRefreshComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewItemLayoutsGrid":
                this._loader.loadNextToLocation(ListViewItemLayoutsGridComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewItemLayoutsLinear":
                this._loader.loadNextToLocation(ListviewItemLayoutsLinearComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewItemLoading":
                this._loader.loadNextToLocation(ListviewItemLoadingComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewObservableArray":
                this._loader.loadNextToLocation(ListviewObservableArrayComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewItemLayoutsStaggered":
                this._loader.loadNextToLocation(ListviewItemLayoutsStaggeredComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewItemReorderHandle":
                this._loader.loadNextToLocation(ListviewItemReorderHandleComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewItemSelectionMultiple":
                this._loader.loadNextToLocation(ListviewItemSelectionMultipleComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewItemSelectionProgrammatic":
                this._loader.loadNextToLocation(ListviewItemSelectionProgrammaticComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewSelectionStates":
                this._loader.loadNextToLocation(ListviewSelectionStatesComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewSwipeExecuteSticky":
                this._loader.loadNextToLocation(ListviewSwipeExecuteStickyComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewSwipeExecuteStretch":
                this._loader.loadNextToLocation(ListviewSwipeExecuteStretchComponent, this.exampleCompPlaceholder);
                break;
            case "ListviewItemSeparator":
                this._loader.loadNextToLocation(ListviewItemSeparatorComponent, this.exampleCompPlaceholder);
                break;
            case "SideDrawerGettingStarted":
                this._loader.loadNextToLocation(SideDrawerGettingStartedComponent, this.exampleCompPlaceholder);
                break;
            case "SideDrawerEvents":
                this._loader.loadNextToLocation(SideDrawerEventsComponent, this.exampleCompPlaceholder);
                break;
            case "SideDrawerPosition":
                this._loader.loadNextToLocation(SideDrawerPositionComponent, this.exampleCompPlaceholder);
                break;
            case "SideDrawerTransitions":
                this._loader.loadNextToLocation(SideDrawerTransitionsComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarGettingStarted":
                this._loader.loadNextToLocation(CalendarGettingStartedComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarPopulatingWithData":
                this._loader.loadNextToLocation(CalendarPopulatingWithDataComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarProgramaticControl":
                this._loader.loadNextToLocation(CalendarProgramaticControlComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarViewModes":
                this._loader.loadNextToLocation(CalendarViewModesComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarSelectionModes":
                this._loader.loadNextToLocation(CalendarSelectionModesComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarCellStyling":
                this._loader.loadNextToLocation(CalendarCellStylingComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarEventsViewModes":
                this._loader.loadNextToLocation(CalendarEventsViewModesComponent, this.exampleCompPlaceholder);
                break;
            case "CalendarTransitionModes":
                this._loader.loadNextToLocation(CalendarTransitionModesComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesArea":
                this._loader.loadNextToLocation(ChartSeriesAreaComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesStackedArea":
                this._loader.loadNextToLocation(ChartSeriesStackedAreaComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesBar":
                this._loader.loadNextToLocation(ChartSeriesBarComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesRangeBar":
                this._loader.loadNextToLocation(ChartSeriesRangeBarComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesStackedBar":
                this._loader.loadNextToLocation(ChartSeriesStackedBarComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesBubble":
                this._loader.loadNextToLocation(ChartSeriesBubbleComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesScatterBubble":
                this._loader.loadNextToLocation(ChartSeriesScatterBubbleComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesCandlestick":
                this._loader.loadNextToLocation(ChartSeriesCandlestickComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesOhlc":
                this._loader.loadNextToLocation(ChartSeriesOhlcComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesLine":
                this._loader.loadNextToLocation(ChartSeriesLineComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesPie":
                this._loader.loadNextToLocation(ChartSeriesPieComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesScatter":
                this._loader.loadNextToLocation(ChartSeriesScatterComponent, this.exampleCompPlaceholder);
                break;
            case "ChartSeriesSpline":
                this._loader.loadNextToLocation(ChartSeriesSplineComponent, this.exampleCompPlaceholder);
                break;
            case "ChartAnnotationsGridLine":
                this._loader.loadNextToLocation(ChartAnnotationsGridLineComponent, this.exampleCompPlaceholder);
                break;
            case "ChartAnnotationsPlotBand":
                this._loader.loadNextToLocation(ChartAnnotationsPlotBandComponent, this.exampleCompPlaceholder);
                break;
            case "ChartBehaviorsDatapointSelection":
                this._loader.loadNextToLocation(ChartBehaviorsDatapointSelectionComponent, this.exampleCompPlaceholder);
                break;
            case "ChartBehaviorsPanZoom":
                this._loader.loadNextToLocation(ChartBehaviorsPanZoomComponent, this.exampleCompPlaceholder);
                break;
            case "ChartBehaviorsChartPieSelection":
                this._loader.loadNextToLocation(ChartBehaviorsChartPieSelectionComponent, this.exampleCompPlaceholder);
                break;
            case "ChartBehaviorsSeriesSelection":
                this._loader.loadNextToLocation(ChartBehaviorsSeriesSelectionComponent, this.exampleCompPlaceholder);
                break;
            case "ChartLegend":
                this._loader.loadNextToLocation(ChartLegendComponent, this.exampleCompPlaceholder);
                break;
            case "ChartAxesCustomization":
                this._loader.loadNextToLocation(ChartAxesCustomizationComponent, this.exampleCompPlaceholder);
                break;
            case "ChartAxesDateTime":
                this._loader.loadNextToLocation(ChartAxesDateTimeComponent, this.exampleCompPlaceholder);
                break;
            case "ChartAxesMultiple":
                this._loader.loadNextToLocation(ChartAxesMultipleComponent, this.exampleCompPlaceholder);
                break;
            case "ChartAxesNegativeValues":
                this._loader.loadNextToLocation(ChartAxesNegativeValuesComponent, this.exampleCompPlaceholder);
                break;
            case "ChartStylingAxes":
                this._loader.loadNextToLocation(ChartStylingAxesComponent, this.exampleCompPlaceholder);
                break;
            case "ChartStylingGrid":
                this._loader.loadNextToLocation(ChartStylingGridComponent, this.exampleCompPlaceholder);
                break;
            case "ChartStylingLabel":
                this._loader.loadNextToLocation(ChartStylingLabelComponent, this.exampleCompPlaceholder);
                break;
            case "ChartStylingSelection":
                this._loader.loadNextToLocation(ChartStylingSelectionComponent, this.exampleCompPlaceholder);
                break;
            case "ChartStylingSeries":
                this._loader.loadNextToLocation(ChartStylingSeriesComponent, this.exampleCompPlaceholder);
                break;
            default:
                return null;
        }
    }

    public get currentExample(): ExampleItem {
        return this._currentExample;
    }


    public set currentExample(value: ExampleItem) {
        this._currentExample = value;
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}