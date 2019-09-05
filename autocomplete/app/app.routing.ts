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
        path: "AutoCompleteGettingStartedComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Getting started"
        }
    },
    {
        path: "AutocompletePreselectedTokensComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Preselected items"
        }
    },
    {
        path: "AutoCompleteLayoutsRuntimeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Switch at runtime"
        }
    },
    {
        path: "AutoCompleteRemoteComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Async Data Fetch"
        }
    },
    {
        path: "AutoCompleteCustomizationComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Customization"
        }
    },
    {
        path: "AutoCompleteEventsComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Events"
        }
    },
    {
        path: "AutoCompleteContainsModeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Contains"
        }
    },
    {
        path: "AutoCompleteStartsWithModeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Starts with"
        }
    },
    {
        path: "AutoCompleteTokensModeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Tokens"
        }
    },
    {
        path: "AutoCompletePlainModeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Plain"
        }
    },
    {
        path: "AutoCompleteLayoutsWrapComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Wrap"
        }
    },
    {
        path: "AutoCompleteLayoutsHorizontalComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Horizontal"
        }
    },
    {
        path: "AutocompleteSuggestModeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Suggest"
        }
    },
    {
        path: "AutoCompleteAppendModeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Append"
        }
    },
    {
        path: "AutoCompleteSuggestAppendModeComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Suggest & Append"
        }
    },
    {
        path: "AutoCompleteHintComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Hint"
        }
    },
    {
        path: "AutoCompleteReadOnlyComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Read Only"
        }
    },
    {
        path: "AutoCompleteCustomTokenComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Custom Token Model"
        }
    },
    {
        path: "AutoCompleteCssComponent",
        loadChildren: './examples/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "CSS"
        }
    },
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);
