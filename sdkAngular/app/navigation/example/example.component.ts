import { Component, OnInit, Inject, ViewChild, DynamicComponentLoader, ViewContainerRef, ComponentRef } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { Router, RouteParams } from "@angular/router-deprecated";
import { StackLayout } from "ui/layouts/stack-layout";
import * as frameModule from "ui/frame";

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
import { CalendarCellStylingComponent } from "../../calendar/cell-styling/calendar-cell-styling.component";
import { CalendarEventsViewModesComponent } from "../../calendar/events-view-modes/calendar-events-view-modes.component";

@Component({
    moduleId: module.id,
    selector: "example",
    templateUrl: "example.component.html"
})
export class ExampleComponent implements OnInit {
    private _currentExample: ExampleItem;


    constructor(private _router: Router, private _routeParams: RouteParams, private _exampleItemsService: ExampleItemService, private _loader: DynamicComponentLoader) {
    }

    @ViewChild('layoutPlaceholder', { read: ViewContainerRef }) layoutPlaceholder: ViewContainerRef;

    ngOnInit() {
        var parentTitle = this._routeParams.get('parentTitle');
        var tappedTitle = this._routeParams.get('tappedTitle');
        this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
    }

    ngAfterViewInit() {
        //Loads the current example component.
        switch (this.currentExample.path) {
            case "Controls":
                this._loader.loadNextToLocation(ControlsListComponent, this.layoutPlaceholder);
                break;
            case "Examples":
                this._loader.loadNextToLocation(ExamplesListComponent, this.layoutPlaceholder);
                break;
            case "ListViewGettingStarted":
                this._loader.loadNextToLocation(ListViewGettingStartedComponent, this.layoutPlaceholder);
                break;
            case "ListViewHeaderFooter":
                this._loader.loadNextToLocation(ListViewHeaderFooterComponent, this.layoutPlaceholder);
                break;
            case "ListViewItemReorder":
                this._loader.loadNextToLocation(ListViewItemReorderComponent, this.layoutPlaceholder);
                break;
            case "ListViewItemSelection":
                this._loader.loadNextToLocation(ListViewItemSelectionComponent, this.layoutPlaceholder);
                break;
            case "ListViewItemSwipe":
                this._loader.loadNextToLocation(ListViewItemSwipeComponent, this.layoutPlaceholder);
                break;
            case "ListViewLoadOnDemand":
                this._loader.loadNextToLocation(ListViewLoadOnDemandComponent, this.layoutPlaceholder);
                break;
            case "ListViewPullToRefresh":
                this._loader.loadNextToLocation(ListViewPullToRefreshComponent, this.layoutPlaceholder);
                break;
            case "SideDrawerGettingStarted":
                this._loader.loadNextToLocation(SideDrawerGettingStartedComponent, this.layoutPlaceholder);
                break;
            case "SideDrawerEvents":
                this._loader.loadNextToLocation(SideDrawerEventsComponent, this.layoutPlaceholder);
                break;
            case "SideDrawerPosition":
                this._loader.loadNextToLocation(SideDrawerPositionComponent, this.layoutPlaceholder);
                break;
            case "SideDrawerTransitions":
                this._loader.loadNextToLocation(SideDrawerTransitionsComponent, this.layoutPlaceholder);
                break;
            case "CalendarGettingStarted":
                this._loader.loadNextToLocation(CalendarGettingStartedComponent, this.layoutPlaceholder);
                break;
            case "CalendarPopulatingWithData":
                this._loader.loadNextToLocation(CalendarPopulatingWithDataComponent, this.layoutPlaceholder);
                break;
            case "CalendarProgramaticControl":
                this._loader.loadNextToLocation(CalendarProgramaticControlComponent, this.layoutPlaceholder);
                break;
            case "CalendarViewModes":
                this._loader.loadNextToLocation(CalendarViewModesComponent, this.layoutPlaceholder);
                break;
            case "CalendarSelectionModes":
                this._loader.loadNextToLocation(CalendarSelectionModesComponent, this.layoutPlaceholder);
                break;
            case "CalendarCellStyling":
                this._loader.loadNextToLocation(CalendarCellStylingComponent, this.layoutPlaceholder);
                break;
            case "CalendarEventsViewModes":
                this._loader.loadNextToLocation(CalendarEventsViewModesComponent, this.layoutPlaceholder);
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