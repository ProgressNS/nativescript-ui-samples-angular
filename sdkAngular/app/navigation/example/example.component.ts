import { Component, OnInit, Inject, ViewChild, DynamicComponentLoader, ViewContainerRef, ComponentRef } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { Router, RouteParams } from "@angular/router-deprecated";
import { ActionBar } from "ui/action-bar";
import * as FrameModule from "ui/frame";

import { ControlsListComponent } from "../controls-list/controls-list.component";
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
import { CalendarTransitionModesComponent } from "../../calendar/transition-modes/calendar-transition-modes.component";

@Component({
    moduleId: module.id,
    selector: "example",
    templateUrl: "example.component.html"
})
export class ExampleComponent implements OnInit {
    private _currentExample: ExampleItem;

    constructor(private _router: Router, private _routeParams: RouteParams, private _exampleItemsService: ExampleItemService, private loader: DynamicComponentLoader) {

    }

    @ViewChild('actionBar', { read: ViewContainerRef }) actionBar: ViewContainerRef;

    ngOnInit() {
        var parentTitle = this._routeParams.get('parentTitle');
        var tappedTitle = this._routeParams.get('tappedTitle');
        this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
    }

    ngAfterViewInit() {
        // Loads the current example component.
        switch (this.currentExample.path) {
            case "Controls":
                this.loader.loadNextToLocation(ControlsListComponent, this.actionBar);
                break;
            case "Examples":
                this.loader.loadNextToLocation(ExamplesListComponent, this.actionBar);
                break;
            case "ListViewGettingStarted":
                this.loader.loadNextToLocation(ListViewGettingStartedComponent, this.actionBar);
                break;
            case "ListViewHeaderFooter":
                this.loader.loadNextToLocation(ListViewHeaderFooterComponent, this.actionBar);
                break;
            case "ListViewItemReorder":
                this.loader.loadNextToLocation(ListViewItemReorderComponent, this.actionBar);
                break;
            case "ListViewItemSelection":
                this.loader.loadNextToLocation(ListViewItemSelectionComponent, this.actionBar);
                break;
            case "ListViewItemSwipe":
                this.loader.loadNextToLocation(ListViewItemSwipeComponent, this.actionBar);
                break;
            case "ListViewLoadOnDemand":
                this.loader.loadNextToLocation(ListViewLoadOnDemandComponent, this.actionBar);
                break;
            case "ListViewPullToRefresh":
                this.loader.loadNextToLocation(ListViewPullToRefreshComponent, this.actionBar);
                break;
            case "SideDrawerGettingStarted":
                this.loader.loadNextToLocation(SideDrawerGettingStartedComponent, this.actionBar);
                break;
            case "SideDrawerEvents":
                this.loader.loadNextToLocation(SideDrawerEventsComponent, this.actionBar);
                break;
            case "SideDrawerPosition":
                this.loader.loadNextToLocation(SideDrawerPositionComponent, this.actionBar);
                break;
            case "SideDrawerTransitions":
                this.loader.loadNextToLocation(SideDrawerTransitionsComponent, this.actionBar);
                break;
            case "CalendarGettingStarted":
                this.loader.loadNextToLocation(CalendarGettingStartedComponent, this.actionBar);
                break;
            case "CalendarPopulatingWithData":
                this.loader.loadNextToLocation(CalendarPopulatingWithDataComponent, this.actionBar);
                break;
            case "CalendarProgramaticControl":
                this.loader.loadNextToLocation(CalendarProgramaticControlComponent, this.actionBar);
                break;
            case "CalendarViewModes":
                this.loader.loadNextToLocation(CalendarViewModesComponent, this.actionBar);
                break;
            case "CalendarSelectionModes":
                this.loader.loadNextToLocation(CalendarSelectionModesComponent, this.actionBar);
            case "CalendarTransitionModes":
                this.loader.loadNextToLocation(CalendarTransitionModesComponent, this.actionBar);
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
        FrameModule.topmost().goBack();
    }
}