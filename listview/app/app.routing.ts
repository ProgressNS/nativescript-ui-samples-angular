import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

let excludedComponents = [];

let APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent }, {
        path: "ListViewMultipleTemplatesComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Item Templates"
        }
    },
    {
        path: "ListViewGettingStartedComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewDataOperationsFilteringComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Filtering"
        }
    },
    {
        path: "ListViewDataOperationsSortingComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Sorting"
        }
    },
    {
        path: "ListViewDataOperationsGroupingComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping"
        }
    },
    {
        path: "ListViewDataOperationsGroupingTemplatesComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping with multiple templates"
        }
    },
    {
        path: "ListviewDataOperationsGroupingCollapsibleComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Collapsible Grouping"
        }
    },
    {
        path: "ListViewDataOperationsMultipleComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple operations"
        }
    },
    {
        path: "ListViewHeaderFooterComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Header and Footer"
        }
    },
    {
        path: "ListViewItemReorderComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder"
        }
    },
    {
        path: "ListViewItemSelectionComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Single Selection"
        }
    },
    {
        path: "ListViewSelectionStatesComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Selection states"
        }
    },
    {
        path: "ListViewPullToRefreshComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Pull to Refresh"
        }
    },
    {
        path: "ListViewItemLayoutsGridComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grid"
        }
    },
    {
        path: "ListViewItemLayoutsLinearComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Linear"
        }
    },
    {
        path: "ListViewItemLoadingComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Loading"
        }
    },
    {
        path: "ListViewItemLayoutsStaggeredComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Staggered"
        }
    },
    {
        path: "ListViewItemLayoutsRuntimeComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Change at runtime"
        }
    },
    {
        path: "ListViewItemReorderHandleComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder with handle"
        }
    },
    {
        path: "ListViewItemSelectionMultipleComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Selection"
        }
    },
    {
        path: "ListViewItemSelectionProgrammaticComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Programmatic Selection"
        }
    },
    {
        path: "ListViewItemSeparatorComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item separators"
        }
    },
    {
        path: "ListViewDynamicSizeAutoComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Variable Item Size"
        }
    },
    {
        path: "ListViewDynamicSizeManualComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Variable Item Size"
        }
    },
    {
        path: "ListViewFixedSizeAutoComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Fixed Item Size"
        }
    },
    {
        path: "ListViewFixedSizeManualComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Fixed Item Size"
        }
    },
    {
        path: "ListViewScrollToIndexVerticalComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In vertical direction"
        }
    },
    {
        path: "ListViewScrollToIndexHorizontalComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In horizontal direction"
        }
    },
    {
        path: "ListViewScrollToIndexInitialComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Initially scrolled"
        }
    },
    {
        path: "ListViewScrollEventsComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Scroll Events"
        }
    },
    {
        path: "ListViewObservableArrayComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Observable Array"
        }
    },
    {
        path: "ListViewItemAnimationsComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Animations"
        }
    },
    {
        path: "ListViewSwipeActionsComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewSwipeActionsMultipleComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple actions"
        }
    },
    {
        path: "ListViewSwipeActionsThresholdsComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Animated thresholds"
        }
    },
    {
        path: "ListViewSwipeDisableComponent",
        loadChildren: './examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Disable\\Enable"
        }
    }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);
