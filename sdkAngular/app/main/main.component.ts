import { Component } from "angular2/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItemService } from "./exampleItemService.service";
import { RouteConfig } from "angular2/router";
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import { ControlsListComponent } from "./controls-list/controls-list.component";
import { ExamplesListComponent } from "./examples-list/examples-list.component";
import * as ListViewGettingStarted from "../listview/getting-started/listview-getting-started.component";
import * as ListViewHeaderFooter from "../listview/header-footer/listview-header-footer.component";
import * as ListViewItemReorder from "../listview/item-reorder/listview-item-reorder.component";
import * as ListViewItemSelection from "../listview/item-selection/listview-item-selection.component";
import * as ListViewItemSwipe from "../listview/item-swipe/listview-item-swipe.component";
import * as ListViewLoadOnDemand from "../listview/load-on-demand/listview-load-on-demand.component";
import * as ListViewPullToRefresh from "../listview/pull-to-refresh/listview-pull-to-refresh.component";
import * as SideDrawerGettingStarted from "../sidedrawer/getting-started/getting-started.component";
import * as SideDrawerEvents from "../sidedrawer/events/events.component";
import * as SideDrawerPosition from "../sidedrawer/position/position.component";
import * as SideDrawerTransitions from "../sidedrawer/transitions/transitions.component";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS, ExampleItemService],
  template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
  { path: "/controls", component: ControlsListComponent, name: "Controls", useAsDefault: true },
  { path: "/examples", component: ExamplesListComponent, name: "Examples" },
  { path: "/listview-getting-started", component: ListViewGettingStarted.AppComponent, name: "ListviewGettingStarted" },
  { path: "/listview-header-footer", component: ListViewHeaderFooter.AppComponent, name: "ListviewHeaderFooter" },
  { path: "/listview-item-reorder", component: ListViewItemReorder.AppComponent, name: "ListviewItemReorder" },
  { path: "/listview-item-selection", component: ListViewItemSelection.AppComponent, name: "ListviewItemSelection" },
  { path: "/listview-item-swipe", component: ListViewItemSwipe.AppComponent, name: "ListViewItemSwipe" },
  { path: "/listview-load-on-demand", component: ListViewLoadOnDemand.AppComponent, name: "ListViewLoadOnDemand" },
  { path: "/listview-pull-to-refresh", component: ListViewPullToRefresh.AppComponent, name: "ListViewPullToRefresh" },
  { path: "/sidedrawer-getting-started", component: SideDrawerGettingStarted.AppComponent, name: "SideDrawerGettingStarted" },
  { path: "/sidedrawer-events", component: SideDrawerEvents.AppComponent, name: "SideDrawerEvents" },
  { path: "/sidedrawer-position", component: SideDrawerPosition.AppComponent, name: "SideDrawerPosition" },
  { path: "/sidedrawer-transitions", component: SideDrawerTransitions.AppComponent, name: "SideDrawerTransitions" },
])
export class MainComponent {

}