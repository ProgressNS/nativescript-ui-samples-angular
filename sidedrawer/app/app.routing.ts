import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

const excludedComponents = [];

let APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
    {
        path: "SideDrawerGettingStartedComponent",
        loadChildren: './examples/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "SideDrawerOverNavigationComponent",
        loadChildren: './examples/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Over Navigation"
        }
    },
    {
        path: "SecondSideDrawerOverNavigationComponent",
        loadChildren: './examples/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Over Navigation Second"
        }
    },
    {
        path: "SideDrawerEventsComponent",
        loadChildren: './examples/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Events"
        }
    },
    {
        path: "SideDrawerPositionComponent",
        loadChildren: './examples/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Position"
        }
    },
    {
        path: "SideDrawerTransitionsComponent",
        loadChildren: './examples/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Transitions"
        }
    },
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);