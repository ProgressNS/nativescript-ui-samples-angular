import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

const APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
    {
        path: "GaugesGettingStartedComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "GaugesAnimationsComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Animations"
        }
    },
    {
        path: "GaugesCustomizationComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Customization"
        }
    },
    {
        path: "GaugesStyleBindingsComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Style bindings"
        }
    },
    {
        path: "GaugesScalesComponent",
        loadChildren: './examples/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Scales"
        }
    },
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);