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
        path: "DataFormAdjustmentComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Properties"
        }
    },
    {
        path: "DataFormCommitModesComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Commit Modes"
        }
    },
    {
        path: "DataFormEditorsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Common"
        }
    },
    {
        path: "DataFormLabelsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Labels"
        }
    },
    {
        path: "DataFormEventsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Events"
        }
    },
    {
        path: "DataFormGettingStartedComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Getting started"
        }
    },
    {
        path: "DataFormGroupsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Groups"
        }
    },
    {
        path: "DataFormGroupsJsonComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Groups JSON"
        }
    },
    {
        path: "DataFormPlatformSpecificsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Platform adjustments"
        }
    },
    {
        path: "DataFormRuntimeUpdatesComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Runtime updates"
        }
    },
    {
        path: "DataFormStylingComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Styling"
        }
    },
    {
        path: "DataFormValidationComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validators"
        }
    },
    {
        path: "DataFormCustomValidationComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Custom Validation"
        }
    },
    {
        path: "DataFormValidationModesComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validation Modes"
        }
    },
    {
        path: "DataFormValidationEventsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validation Events"
        }
    },
    {
        path: "DataFormValidationMetadataComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validators JSON"
        }
    },
    {
        path: "DataFormAsyncValidationComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Async Validation"
        }
    },
    {
        path: "DataFormCustomValidatorComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Custom Validator"
        }
    },
    {
        path: "DataFormValueProvidersTypesComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Types"
        }
    },
    {
        path: "DataFormValueProvidersRelationsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Relations"
        }
    },
    {
        path: "DataFormScrollingComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Scrollable Form"
        }
    },
    {
        path: "DataformGridLayoutComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Grid"
        }
    },
    {
        path: "DataformStackLayoutComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Stack"
        }
    },
    {
        path: "DataformGettingStartedJsonComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Getting started JSON"
        }
    },
    {
        path: "DataformImageLabelsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Image Labels"
        }
    },
    {
        path: "DataformPropertiesJsonComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Properties JSON"
        }
    },
    {
        path: "DataformStylingAdvancedComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Styling Advanced"
        }
    },
    {
        path: "DataFormEditorBackgroundComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Editor Background"
        }
    },
    {
        path: "DataFormCssFormComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "CSS Form"
        }
    },
    {
        path: "DataFormCssEditorsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "CSS Editors"
        }
    },
    {
        path: "DataformCheckErrorsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Check Validation State"
        }
    },
    {
        path: "DataFormaAutoCompleteComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "AutoComplete"
        }
    },
    {
        path: "DataformReadOnlyComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Read Only"
        }
    },
    {
        path: "DataformEditorStyleComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "At runtime"
        }
    },
    {
        path: "DataformCustomEditorsComponent",
        loadChildren: './examples/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Custom Editors"
        }
    }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);
