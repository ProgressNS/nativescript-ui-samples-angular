import { Component } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItemService } from "./exampleItemService.service";
import { NS_ROUTER_DIRECTIVES } from "nativescript-angular/router";

@Component({
  selector: "app",
  directives: [NS_ROUTER_DIRECTIVES],
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {

}