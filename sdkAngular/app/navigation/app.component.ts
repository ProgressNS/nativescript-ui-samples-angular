import { Component } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItemService } from "./exampleItemService.service";
import { OptionsService } from "./options/options.service";
import { RouteConfig } from "@angular/router-deprecated";
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import { ExamplesListComponent } from "./examples-list/examples-list.component";
import { ExampleComponent } from "./example/example.component";
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: "app",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS, ExampleItemService, OptionsService],
  template: "<page-router-outlet></page-router-outlet>"
})
 @RouteConfig([
  { path: "/examples", component: ExamplesListComponent, name: "Examples", useAsDefault: true },
  { path: "/example", component: ExampleComponent, name: "Example" },
  { path: "/options", component: OptionsComponent, name: "Options" }
])
export class AppComponent {

}


// Migration to Angular 2 RC1 'Router'

//import { Component, OnInit } from "@angular/core";
// import { Routes, Router, ROUTER_PROVIDERS } from "@angular/router";
// @Component({
//   selector: "app",
//   directives: [NS_ROUTER_DIRECTIVES],
//   providers: [ROUTER_PROVIDERS, NS_ROUTER_PROVIDERS, ExampleItemService],
//   template: "<page-router-outlet></page-router-outlet>"
// })
// @Routes([
//   { path: "/examples", component: ExamplesListComponent },
//   { path: "/listview-getting-started", component: ListViewGettingStartedComponent },
//   { path: "/listview-header-footer", component: ListViewHeaderFooterComponent },
//   { path: "/listview-item-reorder", component: ListViewItemReorderComponent },
//   { path: "/listview-item-selection", component: ListViewItemSelectionComponent },
//   { path: "/listview-item-swipe", component: ListViewItemSwipeComponent },
//   { path: "/listview-load-on-demand", component: ListViewLoadOnDemandComponent },
//   { path: "/listview-pull-to-refresh", component: ListViewPullToRefreshComponent },
//   { path: "/sidedrawer-getting-started", component: SidedrawerGettingStartedComponent },
//   { path: "/sidedrawer-events", component: SidedrawerEventsComponent },
//   { path: "/sidedrawer-position", component: SidedrawerPositionComponent },
//   { path: "/sidedrawer-transitions", component: SidedrawerTransitionsComponent },
// ])
// export class AppComponent implements OnInit {
//   constructor(private router: Router) {

//   }
  
//   ngOnInit() {
//     this.router.navigate(['/examples']);
//   }
// }