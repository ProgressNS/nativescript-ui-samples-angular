import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";

import { ListViewGettingStartedComponent } from './getting-started/listview-getting-started.component';
import { ListViewHeaderFooterComponent } from './header-footer/listview-header-footer.component';
import { ListViewItemAnimationsComponent } from './item-animations/listview-item-animations.component';
import { ListViewItemLayoutsGridComponent } from './item-layouts/listview-item-layouts-grid.component';
import { ListviewItemLayoutsLinearComponent } from './item-layouts/listview-item-layouts-linear.component';
import { ListviewItemLayoutsRuntimeComponent } from './item-layouts/listview-item-layouts-runtime.component';
import { ListviewItemLayoutsStaggeredComponent } from './item-layouts/listview-item-layouts-staggered.component';
import { ListviewItemLoadingComponent } from './item-loading/listview-item-loading.component';
import { ListViewItemReorderComponent } from './item-reorder/listview-item-reorder.component';
import { ListviewItemReorderHandleComponent } from './item-reorder/listview-item-reorder-handle.component';
import { ListviewItemSelectionMultipleComponent } from './item-selection/listview-item-selection-multiple.component';
import { ListviewItemSelectionProgrammaticComponent } from './item-selection/listview-item-selection-programmatic.component';
import { ListViewItemSelectionComponent } from './item-selection/listview-item-selection.component';
import { ListviewItemSeparatorComponent } from './item-separator/listview-item-separator.component';
import { ListViewLoadOnDemandComponent } from './load-on-demand/listview-load-on-demand.component';
import { ListviewMultipleTemplatesComponent } from './multiple-templates/listview-multiple-templates.component';
import { ListviewObservableArrayComponent } from './observable-array/listview-observable-array.component';
import { ListViewPullToRefreshComponent } from './pull-to-refresh/listview-pull-to-refresh.component';
import { ListViewScrollEventsComponent } from './scroll-events/listview-scroll-events.component';
import { ListviewScrollToIndexHorizontalComponent } from './scroll-to-index/listview-scroll-to-index-horizontal.component';
import { ListviewScrollToIndexVerticalComponent } from './scroll-to-index/listview-scroll-to-index-vertical.component';
import { ListviewSelectionStatesComponent } from './selection-states/listview-selection-states.component';
import { ListViewSwipeActionsMultipleComponent } from './swipe-actions/listview-swipe-actions-multiple.component';
import { ListViewSwipeActionsThresholdsComponent } from './swipe-actions/listview-swipe-actions-thresholds.component';
import { ListViewSwipeActionsComponent } from './swipe-actions/listview-swipe-actions.component';
import { ListViewSwipeDisableComponent } from './swipe-actions/listview-swipe-disable.component';

import { routes } from './listview-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    imports: [
        NativeScriptModule,        
        CommonDirectivesModule,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        ListViewGettingStartedComponent,
        ListViewHeaderFooterComponent,
        ListViewItemAnimationsComponent,
        ListViewItemLayoutsGridComponent,
        ListviewItemLayoutsLinearComponent,
        ListviewItemLayoutsRuntimeComponent,
        ListviewItemLayoutsStaggeredComponent,
        ListviewItemLoadingComponent,
        ListViewItemReorderComponent,
        ListviewItemReorderHandleComponent,
        ListviewItemSelectionMultipleComponent,
        ListviewItemSelectionProgrammaticComponent,
        ListViewItemSelectionComponent,
        ListviewItemSeparatorComponent,
        ListViewLoadOnDemandComponent,
        ListviewMultipleTemplatesComponent,
        ListviewObservableArrayComponent,
        ListViewPullToRefreshComponent,
        ListViewScrollEventsComponent,
        ListviewScrollToIndexHorizontalComponent,
        ListviewScrollToIndexVerticalComponent,
        ListviewSelectionStatesComponent,
        ListViewSwipeActionsMultipleComponent,
        ListViewSwipeActionsThresholdsComponent,
        ListViewSwipeActionsComponent,
        ListViewSwipeDisableComponent
    ]
})
export class ListViewExamplesModule { }