import { Component, OnInit, Inject, ViewChild, DynamicComponentLoader, ViewContainerRef, ComponentRef } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { Router, RouteParams } from "@angular/router-deprecated";
import { StackLayout } from "ui/layouts/stack-layout";
import * as frameModule from "ui/frame";

import { ExamplesListComponent } from "../examples-list/examples-list.component";
import { ListViewGettingStartedComponent } from "../../listview/getting-started/listview-getting-started.component";
import { ListViewHeaderFooterComponent } from "../../listview/header-footer/listview-header-footer.component";
import { ListViewItemReorderComponent } from "../../listview/item-reorder/listview-item-reorder.component";
import { ListViewItemSelectionComponent } from "../../listview/item-selection/listview-item-selection.component";
import { ListViewItemSwipeComponent } from "../../listview/item-swipe/listview-item-swipe.component";
import { ListViewLoadOnDemandComponent } from "../../listview/load-on-demand/listview-load-on-demand.component";
import { ListViewPullToRefreshComponent } from "../../listview/pull-to-refresh/listview-pull-to-refresh.component";
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

@Component({
    moduleId: module.id,
    selector: "example",
    templateUrl: "example.component.html"
})
export class ExampleComponent implements OnInit {
    private _currentExample: ExampleItem;


    constructor(private _router: Router, private _routeParams: RouteParams, private _exampleItemsService: ExampleItemService, private _loader: DynamicComponentLoader) {
    }

    @ViewChild('exampleCompPlaceholder', { read: ViewContainerRef }) exampleCompPlaceholder: ViewContainerRef;

    ngOnInit() {
        var parentTitle = this._routeParams.get('parentTitle');
        var tappedTitle = this._routeParams.get('tappedTitle');
        this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
    }

    ngAfterViewInit() {
        //Loads the current example component.
        switch (this.currentExample.path) {
            case "Examples":
                this._loader.loadNextToLocation(ExamplesListComponent, this.exampleCompPlaceholder);
                break;
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
            case "ListViewItemSwipe":
                this._loader.loadNextToLocation(ListViewItemSwipeComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewLoadOnDemand":
                this._loader.loadNextToLocation(ListViewLoadOnDemandComponent, this.exampleCompPlaceholder);
                break;
            case "ListViewPullToRefresh":
                this._loader.loadNextToLocation(ListViewPullToRefreshComponent, this.exampleCompPlaceholder);
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