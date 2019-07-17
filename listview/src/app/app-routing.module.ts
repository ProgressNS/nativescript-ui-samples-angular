import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

let excludedComponents = [];

let APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
    {
        path: "ListViewMultipleTemplatesComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Item Templates"
        }
    },
    {
        path: "ListViewGettingStartedComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewGettingStartedHorizontalComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started Horizontal"
        }
    },
    {
        path: "ListViewDataOperationsFilteringComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Filtering"
        }
    },
    {
        path: "ListViewDataOperationsSortingComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Sorting"
        }
    },
    {
        path: "ListViewDataOperationsGroupingComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping"
        }
    },
    {
        path: "ListViewDataOperationsGroupingHeaderFooterComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping with header/footer"
        }
    },
    {
        path: "ListViewDataOperationsGroupingTemplatesComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping with multiple templates"
        }
    },
    {
        path: "ListviewDataOperationsGroupingCollapsibleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Collapsible Grouping"
        }
    },
    {
        path: "ListViewDataOperationsGroupingScrollToComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping with Scroll to Index"
        }
    },
    {
        path: "ListViewDataOperationsMultipleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple operations"
        }
    },
    {
        path: "ListViewDataOperationsMultipleWithSwipeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "With Swipe"
        }
    },
    {
        path: "ListViewHeaderFooterComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto height"
        }
    },
    {
        path: "ListViewBigFooterComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Big footer"
        }
    },
    {
        path: "ListViewBigHeaderComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Big header"
        }
    },
    {
        path: "ListviewChangeSizeAtRuntimeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Change at runtime"
        }
    },
    {
        path: "ListViewItemReorderComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder"
        }
    },
    {
        path: "ListViewItemSelectionComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Single Selection"
        }
    },
    {
        path: "ListViewSelectionStatesComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Selection States"
        }
    },
    {
        path: "ListViewPullToRefreshComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Pull to Refresh"
        }
    },
    {
        path: "ListViewPullToRefreshCustomizeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Customize"
        }
    },
    {
        path: "ListViewItemLayoutsGridComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grid with item height"
        }
    },
    {
        path: "ListViewItemLayoutsGridNoHeightComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grid without item height"
        }
    },
    {
        path: "ListViewItemLayoutsLinearComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Linear"
        }
    },
    {
        path: "ListViewItemLoadingComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Loading"
        }
    },
    {
        path: "ListViewItemLayoutsStaggeredComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Staggered"
        }
    },
    {
        path: "ListViewItemLayoutsRuntimeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Change at runtime"
        }
    },
    {
        path: "ListViewItemReorderHandleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder with handle"
        }
    },
    {
        path: "ListViewItemSelectionMultipleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Selection"
        }
    },
    {
        path: "ListViewItemSelectionProgrammaticComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Programmatic Selection"
        }
    },
    {
        path: "ListViewItemSeparatorComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item separators"
        }
    },
    {
        path: "ListViewDynamicSizeAutoComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Variable Item Size"
        }
    },
    {
        path: "ListViewDynamicSizeManualComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Variable Item Size"
        }
    },
    {
        path: "ListViewFixedSizeAutoComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Fixed Item Size"
        }
    },
    {
        path: "ListViewFixedSizeAutoWithSmallSourceComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "With small source and pull to refresh"
        }
    },
    {
        path: "ListViewFixedSizeManualComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Fixed Item Size"
        }
    },
    {
        path: "ListViewScrollToIndexVerticalComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In vertical direction"
        }
    },
    {
        path: "ListViewScrollToIndexHorizontalComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In horizontal direction"
        }
    },
    {
        path: "ListViewScrollToIndexInitialComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Initially scrolled"
        }
    },
    {
        path: "ListViewScrollEventsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Scroll Events"
        }
    },
    {
        path: "ListViewObservableArrayComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Observable Array"
        }
    },
    {
        path: "ListViewItemAnimationsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Animations"
        }
    },
    {
        path: "ListViewSwipeActionsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewSwipeActionsMultipleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple actions"
        }
    },
    {
        path: "ListViewSwipeActionsThresholdsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Animated thresholds"
        }
    },
    {
        path: "ListViewSwipeDisableComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Disable\\Enable"
        }
    },
    {
        path: "ListViewWithBigDataComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Initially load  10 000 items"
        }
    },
    {
        path: "ListviewHorizontalWithVariableItemWidthComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Horizontal with Variable item's width"
        }
    },
    {
        path: "ListViewGroupSwipeLoadPullComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Group, Swipe, Load and Pull"
        }
    },
    {
        path: "ListViewFirstVisibleIndexComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Get first visible index"
        }
    },
    {
        path: "ListviewCompTemplateComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Custom Angular comp in template"
        }
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(APP_ROUTES)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }