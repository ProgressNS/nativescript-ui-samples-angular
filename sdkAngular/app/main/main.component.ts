import { Component } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItemService } from "./exampleItemService.service";
import { RouteConfig } from "@angular/router-deprecated";
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
  { path: "/listview-getting-started", component: ListViewGettingStarted.ListViewGettingStartedComponent, name: "ListviewGettingStarted" },
  { path: "/listview-header-footer", component: ListViewHeaderFooter.ListViewHeaderFooterComponent, name: "ListviewHeaderFooter" },
  { path: "/listview-item-reorder", component: ListViewItemReorder.ListViewItemReorderComponent, name: "ListviewItemReorder" },
  { path: "/listview-item-selection", component: ListViewItemSelection.ListViewItemSelectionComponent, name: "ListviewItemSelection" },
  { path: "/listview-item-swipe", component: ListViewItemSwipe.ListViewItemSwipeComponent, name: "ListViewItemSwipe" },
  { path: "/listview-load-on-demand", component: ListViewLoadOnDemand.ListViewLoadOnDemandComponent, name: "ListViewLoadOnDemand" },
  { path: "/listview-pull-to-refresh", component: ListViewPullToRefresh.ListViewPullToRefreshComponent, name: "ListViewPullToRefresh" },
  { path: "/sidedrawer-getting-started", component: SideDrawerGettingStarted.SidedrawerGettingStartedComponent, name: "SideDrawerGettingStarted" },
  { path: "/sidedrawer-events", component: SideDrawerEvents.SidedrawerEventsComponent, name: "SideDrawerEvents" },
  { path: "/sidedrawer-position", component: SideDrawerPosition.SidedrawerPositionComponent, name: "SideDrawerPosition" },
  { path: "/sidedrawer-transitions", component: SideDrawerTransitions.SidedrawerPositionComponent, name: "SideDrawerTransitions" },
])
export class MainComponent {

}


// Migration to Angular 2 RC1 'Router'

//import { Component, OnInit } from "@angular/core";
// import { Routes, Router, ROUTER_PROVIDERS } from "@angular/router";
// @Component({
//   selector: "main",
//   directives: [NS_ROUTER_DIRECTIVES],
//   providers: [ROUTER_PROVIDERS, NS_ROUTER_PROVIDERS, ExampleItemService],
//   template: "<page-router-outlet></page-router-outlet>"
// })
// @Routes([
//   { path: "/controls", component: ControlsListComponent },
//   { path: "/examples", component: ExamplesListComponent },
//   { path: "/listview-getting-started", component: ListViewGettingStarted.ListViewGettingStartedComponent },
//   { path: "/listview-header-footer", component: ListViewHeaderFooter.ListViewHeaderFooterComponent },
//   { path: "/listview-item-reorder", component: ListViewItemReorder.ListViewItemReorderComponent },
//   { path: "/listview-item-selection", component: ListViewItemSelection.ListViewItemSelectionComponent },
//   { path: "/listview-item-swipe", component: ListViewItemSwipe.ListViewItemSwipeComponent },
//   { path: "/listview-load-on-demand", component: ListViewLoadOnDemand.ListViewLoadOnDemandComponent },
//   { path: "/listview-pull-to-refresh", component: ListViewPullToRefresh.ListViewPullToRefreshComponent },
//   { path: "/sidedrawer-getting-started", component: SideDrawerGettingStarted.SidedrawerGettingStartedComponent },
//   { path: "/sidedrawer-events", component: SideDrawerEvents.SidedrawerEventsComponent },
//   { path: "/sidedrawer-position", component: SideDrawerPosition.SidedrawerPositionComponent },
//   { path: "/sidedrawer-transitions", component: SideDrawerTransitions.SidedrawerPositionComponent },
// ])
// export class MainComponent implements OnInit {
//   constructor(private router: Router) {

//   }
  
//   ngOnInit() {
//     this.router.navigate(['/controls']);
//   }
// }