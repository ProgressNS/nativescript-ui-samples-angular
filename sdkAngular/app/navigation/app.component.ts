import { Component } from "@angular/core";
import { RouterConfig } from '@angular/router';
import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./examples-list/examples-list.component";
import { ExampleComponent } from "./example/example.component";
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: "tk-app",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {

}

export const APP_ROUTES: RouterConfig = [
    { path: "", redirectTo: "/examples-depth-1/root/root", terminal: true },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "example/:parentTitle/:tappedTitle", component: ExampleComponent },
    { path: "options", component: OptionsComponent }
];