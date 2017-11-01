import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";

import { ListViewGettingStartedComponent } from './getting-started/listview-getting-started.component';
import { ListViewHeaderFooterComponent } from './header-footer/listview-header-footer.component';
import { ListViewItemAnimationsComponent } from './item-animations/listview-item-animations.component';
import { ListViewItemLayoutsGridComponent } from './item-layouts/listview-item-layouts-grid.component';
import { ListViewItemLayoutsLinearComponent } from './item-layouts/listview-item-layouts-linear.component';
import { ListViewItemLayoutsRuntimeComponent } from './item-layouts/listview-item-layouts-runtime.component';
import { ListViewItemLayoutsStaggeredComponent } from './item-layouts/listview-item-layouts-staggered.component';
import { ListViewItemLoadingComponent } from './item-loading/listview-item-loading.component';
import { ListViewItemReorderComponent } from './item-reorder/listview-item-reorder.component';
import { ListViewItemReorderHandleComponent } from './item-reorder/listview-item-reorder-handle.component';
import { ListViewItemSelectionMultipleComponent } from './item-selection/listview-item-selection-multiple.component';
import { ListViewItemSelectionProgrammaticComponent } from './item-selection/listview-item-selection-programmatic.component';
import { ListViewItemSelectionComponent } from './item-selection/listview-item-selection.component';
import { ListViewItemSeparatorComponent } from './item-separator/listview-item-separator.component';
import { ListViewLoadOnDemandComponent } from './load-on-demand/listview-load-on-demand.component';
import { ListViewMultipleTemplatesComponent } from './multiple-templates/listview-multiple-templates.component';
import { ListViewObservableArrayComponent } from './observable-array/listview-observable-array.component';
import { ListViewPullToRefreshComponent } from './pull-to-refresh/listview-pull-to-refresh.component';
import { ListViewScrollEventsComponent } from './scroll-events/listview-scroll-events.component';
import { ListViewScrollToIndexHorizontalComponent } from './scroll-to-index/listview-scroll-to-index-horizontal.component';
import { ListViewScrollToIndexVerticalComponent } from './scroll-to-index/listview-scroll-to-index-vertical.component';
import { ListViewScrollToIndexInitialComponent } from './scroll-to-index/listview-scroll-to-index-initial.component';
import { ListViewSelectionStatesComponent } from './selection-states/listview-selection-states.component';
import { ListViewSwipeActionsMultipleComponent } from './swipe-actions/listview-swipe-actions-multiple.component';
import { ListViewSwipeActionsThresholdsComponent } from './swipe-actions/listview-swipe-actions-thresholds.component';
import { ListViewSwipeActionsComponent } from './swipe-actions/listview-swipe-actions.component';
import { ListViewSwipeDisableComponent } from './swipe-actions/listview-swipe-disable.component';

import { routes } from './listview-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,        
        CommonDirectivesModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        ListViewGettingStartedComponent,
        ListViewHeaderFooterComponent,
        ListViewItemAnimationsComponent,
        ListViewItemLayoutsGridComponent,
        ListViewItemLayoutsLinearComponent,
        ListViewItemLayoutsRuntimeComponent,
        ListViewItemLayoutsStaggeredComponent,
        ListViewItemLoadingComponent,
        ListViewItemReorderComponent,
        ListViewItemReorderHandleComponent,
        ListViewItemSelectionMultipleComponent,
        ListViewItemSelectionProgrammaticComponent,
        ListViewItemSelectionComponent,
        ListViewItemSeparatorComponent,
        ListViewLoadOnDemandComponent,
        ListViewMultipleTemplatesComponent,
        ListViewObservableArrayComponent,
        ListViewPullToRefreshComponent,
        ListViewScrollEventsComponent,
        ListViewScrollToIndexHorizontalComponent,
        ListViewScrollToIndexVerticalComponent,
        ListViewSelectionStatesComponent,
        ListViewSwipeActionsMultipleComponent,
        ListViewSwipeActionsThresholdsComponent,
        ListViewSwipeActionsComponent,
        ListViewSwipeDisableComponent,
        ListViewScrollToIndexInitialComponent
    ]
})
export class ListViewExamplesModule { }