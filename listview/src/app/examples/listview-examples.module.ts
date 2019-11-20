import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { CustomImageTemplateComponent } from "./custom-angular-comp/custom-image-template.component";
import { CustomSwipeTemplateComponent } from "./custom-angular-comp/custom-swipe-template.component";

import { ListViewGettingStartedComponent } from './getting-started/listview-getting-started.component';
import { ListViewGettingStartedHorizontalComponent } from './getting-started-horizontal/listview-getting-started-horizontal.component';
import { ListViewHeaderFooterComponent } from './header-footer/auto-size/listview-auto-size.component';
import { ListViewBigFooterComponent } from './header-footer/big-footer/listview-big-footer.component';
import { ListViewBigHeaderComponent } from './header-footer/big-header/listview-big-header.component';
import { ListviewChangeSizeAtRuntimeComponent } from './header-footer/change-size-at-runtime/listview-change-size-at-runtime.component';
import { ListViewItemAnimationsComponent } from './item-animations/listview-item-animations.component';
import { ListViewItemLayoutsGridComponent } from './item-layouts/listview-item-layouts-grid.component';
import { ListViewItemLayoutsGridNoHeightComponent } from './item-layouts/listview-item-layouts-grid-no-height.component';
import { ListViewItemLayoutsLinearComponent } from './item-layouts/listview-item-layouts-linear.component';
import { ListViewItemLayoutsRuntimeComponent } from './item-layouts/listview-item-layouts-runtime.component';
import { ListViewItemLayoutsStaggeredComponent } from './item-layouts/listview-item-layouts-staggered.component';
import { ListViewItemLoadingComponent } from './item-loading/listview-item-loading.component';
import { ListViewItemReorderComponent } from './item-reorder/listview-item-reorder.component';
import { ListViewItemReorderHandleComponent } from './item-reorder/listview-item-reorder-handle.component';
import { ListViewItemSelectionMultipleComponent } from './item-selection/listview-item-selection-multiple.component';
import { ListViewItemSelectionProgrammaticComponent } from './item-selection/listview-item-selection-programmatic.component';
import { ListViewItemSelectionComponent } from './item-selection/listview-item-selection.component';
import { StylingSelectionMultipleComponent } from './item-selection/styling-selection-multiple.component';
import { StylingItemSelectionComponent } from './item-selection/styling-item-selection.component';
import { ListViewItemSeparatorComponent } from './item-separator/listview-item-separator.component';
import { ListViewDynamicSizeAutoComponent } from './load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component';
import { ListViewDynamicSizeManualComponent } from './load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component';
import { ListViewFixedSizeAutoComponent } from './load-on-demand/fixed-size-auto/listview-fixed-size-auto.component';
import { ListViewFixedSizeAutoWithSmallSourceComponent } from './load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component';
import { ListViewFixedSizeManualComponent } from './load-on-demand/fixed-size-manual/listview-fixed-size-manual.component';
import { ListViewMultipleTemplatesComponent } from './multiple-templates/listview-multiple-templates.component';
import { ListViewObservableArrayComponent } from './observable-array/listview-observable-array.component';
import { ListViewPullToRefreshComponent } from './pull-to-refresh/getting-started/listview-pull-to-refresh.component';
import { ListViewPullToRefreshCustomizeComponent } from './pull-to-refresh/customize/listview-pull-to-refresh-customize.component';
import { ListViewScrollEventsComponent } from './scroll-events/listview-scroll-events.component';
import { ListViewScrollToIndexHorizontalComponent } from './scroll-to-index/listview-scroll-to-index-horizontal.component';
import { ListViewScrollToIndexVerticalComponent } from './scroll-to-index/listview-scroll-to-index-vertical.component';
import { ListViewScrollToIndexInitialComponent } from './scroll-to-index/listview-scroll-to-index-initial.component';
import { ListViewSelectionStatesComponent } from './selection-states/listview-selection-states.component';
import { ListViewSwipeActionsMultipleComponent } from './swipe-actions/listview-swipe-actions-multiple.component';
import { ListViewSwipeActionsThresholdsComponent } from './swipe-actions/listview-swipe-actions-thresholds.component';
import { ListViewSwipeActionsComponent } from './swipe-actions/listview-swipe-actions.component';
import { ListViewSwipeDisableComponent } from './swipe-actions/listview-swipe-disable.component';
import { ListViewDataOperationsFilteringComponent } from './filtering/listview-data-operations-filtering.component';
import { ListViewDataOperationsGroupingComponent } from './grouping/listview-data-operations-grouping.component';
import { ListViewDataOperationsGroupingHeaderFooterComponent } from './grouping-with-header-footer/with-header-footer.component';
import { ListViewDataOperationsGroupingTemplatesComponent } from './grouping-multiple-templates/listview-data-operations-grouping-templates.component';
import { ListviewDataOperationsGroupingCollapsibleComponent } from './grouping-collapsible/listview-data-operations-grouping-collapsible.component';
import { ListViewDataOperationsGroupingScrollToComponent } from './grouping-scroll-to/grouping-scroll-to.component';
import { ListViewDataOperationsMultipleComponent } from './multiple-operations/listview-data-operations-multiple.component';
import { ListViewDataOperationsMultipleWithSwipeComponent } from './multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component';
import { ListViewDataOperationsSortingComponent } from './sorting/listview-data-operations-sorting.component';
import { ListViewWithBigDataComponent } from './with-big-data/listview-with-big-data.component';
import { ListviewHorizontalWithVariableItemWidthComponent } from './horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component';
import { ListViewGroupSwipeLoadPullComponent } from './group-swipe-load-pull/listview-group-swipe-load-pull.component';
import { ListViewFirstVisibleIndexComponent } from './first-visible-index/first-visible-index.component';
import { ListviewCompTemplateComponent } from "./custom-angular-comp/listview-comp-template.component";

import { routes } from './listview-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        CommonDirectivesModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        CustomImageTemplateComponent,
        CustomSwipeTemplateComponent,
        ListViewGettingStartedComponent,
        ListViewGettingStartedHorizontalComponent,
        ListViewHeaderFooterComponent,
        ListViewBigFooterComponent,
        ListViewBigHeaderComponent,
        ListviewChangeSizeAtRuntimeComponent,
        ListViewItemAnimationsComponent,
        ListViewItemLayoutsGridComponent,
        ListViewItemLayoutsGridNoHeightComponent,
        ListViewItemLayoutsLinearComponent,
        ListViewItemLayoutsRuntimeComponent,
        ListViewItemLayoutsStaggeredComponent,
        ListViewItemLoadingComponent,
        ListViewItemReorderComponent,
        ListViewItemReorderHandleComponent,
        ListViewItemSelectionMultipleComponent,
        StylingSelectionMultipleComponent,
        ListViewItemSelectionProgrammaticComponent,
        ListViewItemSelectionComponent,
        StylingItemSelectionComponent,
        ListViewItemSeparatorComponent,
        ListViewDynamicSizeAutoComponent,
        ListViewDynamicSizeManualComponent,
        ListViewFixedSizeAutoComponent,
        ListViewFixedSizeAutoWithSmallSourceComponent,
        ListViewFixedSizeManualComponent,
        ListViewMultipleTemplatesComponent,
        ListViewObservableArrayComponent,
        ListViewPullToRefreshComponent,
        ListViewPullToRefreshCustomizeComponent,
        ListViewScrollEventsComponent,
        ListViewScrollToIndexHorizontalComponent,
        ListViewScrollToIndexVerticalComponent,
        ListViewSelectionStatesComponent,
        ListViewSwipeActionsMultipleComponent,
        ListViewSwipeActionsThresholdsComponent,
        ListViewSwipeActionsComponent,
        ListViewSwipeDisableComponent,
        ListViewScrollToIndexInitialComponent,
        ListViewDataOperationsFilteringComponent,
        ListViewDataOperationsGroupingComponent,
        ListViewDataOperationsGroupingHeaderFooterComponent,
        ListViewDataOperationsGroupingTemplatesComponent,
        ListviewDataOperationsGroupingCollapsibleComponent,
        ListViewDataOperationsGroupingScrollToComponent,
        ListViewDataOperationsMultipleComponent,
        ListViewDataOperationsSortingComponent,
        ListViewWithBigDataComponent,
        ListviewHorizontalWithVariableItemWidthComponent,
        ListViewDataOperationsMultipleWithSwipeComponent,
        ListViewGroupSwipeLoadPullComponent,
        ListViewFirstVisibleIndexComponent,
        ListviewCompTemplateComponent
    ]
})
export class ListViewExamplesModule { }