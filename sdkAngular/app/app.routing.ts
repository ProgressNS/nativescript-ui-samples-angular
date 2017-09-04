import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

import { ListViewGettingStartedComponent } from "./listview/getting-started/listview-getting-started.component";
import { ListviewMultipleTemplatesComponent } from "./listview/multiple-templates/listview-multiple-templates.component";
import { ListViewHeaderFooterComponent } from "./listview/header-footer/listview-header-footer.component";
import { ListViewItemReorderComponent } from "./listview/item-reorder/listview-item-reorder.component";
import { ListViewItemSelectionComponent } from "./listview/item-selection/listview-item-selection.component";
import { ListviewSelectionStatesComponent } from "./listview/selection-states/listview-selection-states.component";
import { ListViewLoadOnDemandComponent } from "./listview/load-on-demand/listview-load-on-demand.component";
import { ListViewPullToRefreshComponent } from "./listview/pull-to-refresh/listview-pull-to-refresh.component";
import { ListViewItemAnimationsComponent } from "./listview/item-animations/listview-item-animations.component";
import { ListViewItemLayoutsGridComponent } from "./listview/item-layouts/listview-item-layouts-grid.component";
import { ListviewItemLayoutsLinearComponent } from "./listview/item-layouts/listview-item-layouts-linear.component";
import { ListviewItemLayoutsStaggeredComponent } from "./listview/item-layouts/listview-item-layouts-staggered.component";
import { ListviewItemLayoutsRuntimeComponent } from "./listview/item-layouts/listview-item-layouts-runtime.component";
import { ListviewItemLoadingComponent } from "./listview/item-loading/listview-item-loading.component";
import { ListviewItemReorderHandleComponent } from "./listview/item-reorder/listview-item-reorder-handle.component";
import { ListviewItemSelectionMultipleComponent } from "./listview/item-selection/listview-item-selection-multiple.component";
import { ListviewItemSelectionProgrammaticComponent } from "./listview/item-selection/listview-item-selection-programmatic.component";
import { ListviewObservableArrayComponent } from "./listview/observable-array/listview-observable-array.component";
import { ListViewSwipeActionsComponent } from "./listview/swipe-actions/listview-swipe-actions.component";
import { ListViewSwipeActionsMultipleComponent } from "./listview/swipe-actions/listview-swipe-actions-multiple.component";
import { ListViewSwipeActionsThresholdsComponent } from "./listview/swipe-actions/listview-swipe-actions-thresholds.component";
import { ListViewSwipeDisableComponent } from "./listview/swipe-actions/listview-swipe-disable.component";
import { ListviewItemSeparatorComponent } from "./listview/item-separator/listview-item-separator.component";
import { ListviewScrollToIndexVerticalComponent } from "./listview/scroll-to-index/listview-scroll-to-index-vertical.component";
import { ListviewScrollToIndexHorizontalComponent } from "./listview/scroll-to-index/listview-scroll-to-index-horizontal.component";
import { ListViewScrollEventsComponent } from "./listview/scroll-events/listview-scroll-events.component";
import { SideDrawerGettingStartedComponent } from "./sidedrawer/getting-started/getting-started.component";
import { SideDrawerOverNavigationComponent } from "./sidedrawer/over-navigation/over-navigation.component";
import { SecondSideDrawerOverNavigationComponent } from "./sidedrawer/over-navigation/second-page/second-over-navigation.component";
import { SideDrawerEventsComponent } from "./sidedrawer/events/events.component";
import { SideDrawerPositionComponent } from "./sidedrawer/position/position.component";
import { SideDrawerTransitionsComponent } from "./sidedrawer/transitions/transitions.component";
import { DataFormAdjustmentComponent } from "./dataform/adjustment/dataform-adjustment.component";
import { DataFormCommitModesComponent } from "./dataform/commit-modes/dataform-commit-modes.component";
import { DataFormEditorsComponent } from "./dataform/editors/dataform-editors.component";
import { DataFormaAutoCompleteComponent } from "./dataform/editors/autocomplete/dataform-autocomplete.component";
import { DataFormLabelsComponent } from "./dataform/editors/labels/dataform-labels.component";
import { DataformReadOnlyComponent } from "./dataform/editors/readonly/dataform-read-only.component";
import { DataformCustomEditorsComponent } from "./dataform/editors/custom-editors/dataform-custom-editors.component";
import { DataFormEventsComponent } from "./dataform/events/dataform-events.component";
import { DataFormGettingStartedComponent } from "./dataform/getting-started/dataform-getting-started.component";
import { DataformGettingStartedJsonComponent } from "./dataform/getting-started-json/dataform-getting-started-json.component";
import { DataFormGroupsComponent } from "./dataform/groups/dataform-groups.component";
import { DataFormPlatformSpecificsComponent } from "./dataform/platform-specifics/dataform-platform-specifics.component";
import { DataFormRuntimeUpdatesComponent } from "./dataform/runtime-updates/dataform-runtime-updates.component";
import { DataFormStylingComponent } from "./dataform/styling/common/dataform-styling.component";
import { DataformEditorStyleComponent } from "./dataform/styling/editor-style/dataform-editor-style.component";
import { DataFormValidationComponent } from "./dataform/validation/dataform-validation.component";
import { DataFormCustomValidatorComponent } from "./dataform/validation/custom-validator/dataform-custom-validator.component";
import { DataFormValueProvidersComponent } from "./dataform/value-providers/dataform-value-providers.component";
import { DataformCheckErrorsComponent } from "./dataform/validation/check-errors/dataform-check-errors.component";
import { DataformGridLayoutComponent } from "./dataform/layouts/dataform-grid-layout.component";
import { DataformStackLayoutComponent } from "./dataform/layouts/dataform-stack-layout.component";
import { DataformImageLabelsComponent } from "./dataform/image-labels/dataform-image-labels.component";
import { DataformPropertiesJsonComponent } from "./dataform/properties-json/dataform-properties-json.component";
import { DataformStylingAdvancedComponent } from "./dataform/styling/advanced/dataform-styling-advanced.component";
import { DataFormEditorBackgroundComponent } from "./dataform/styling/editor-background/dataform-editor-background.component";
import { DataFormScrollingComponent } from "./dataform/scrolling/dataform-scrolling.component";
import { DataFormValidationModesComponent } from "./dataform/validation/validation-modes/dataform-validation-modes.component";
import { DataFormAsyncValidationComponent } from "./dataform/validation/async-validation/dataform-async-validation.component";
import { DataFormValidationEventsComponent } from "./dataform/validation/validation-events/dataform-validation-events.component";
import { DataFormCustomValidationComponent } from "./dataform/validation/custom-validation/dataform-custom-validation.component";
import { DataFormValidationMetadataComponent } from "./dataform/validation/metadata/dataform-validation-metadata.component";
import { GaugesGettingStartedComponent } from "./gauges/getting-started/gauges-getting-started.component";
import { GaugesAnimationsComponent } from "./gauges/animations/gauges-animations.component";
import { GaugesCustomizationComponent } from "./gauges/customization/gauges-customization.component";
import { GaugesScalesComponent } from "./gauges/scales/gauges-scales.component";

var excludedComponents = [];

export const EXAMPLES_COMPONENTS = [ListviewItemLayoutsStaggeredComponent, ListViewGettingStartedComponent, ListViewHeaderFooterComponent, ListViewItemReorderComponent, ListViewItemSelectionComponent, ListviewSelectionStatesComponent, ListViewLoadOnDemandComponent, ListViewPullToRefreshComponent, ListViewItemLayoutsGridComponent, ListviewItemLayoutsLinearComponent, ListviewItemLoadingComponent, ListviewItemReorderHandleComponent, ListviewItemSelectionMultipleComponent, ListviewItemSelectionProgrammaticComponent, ListviewItemSeparatorComponent, SideDrawerGettingStartedComponent, SideDrawerOverNavigationComponent, SecondSideDrawerOverNavigationComponent, SideDrawerEventsComponent, SideDrawerPositionComponent, SideDrawerTransitionsComponent, ListviewScrollToIndexVerticalComponent, ListViewScrollEventsComponent, ListviewScrollToIndexHorizontalComponent, DataFormAdjustmentComponent, DataFormCommitModesComponent, DataFormEditorsComponent, DataFormEventsComponent, DataFormGettingStartedComponent, DataFormGroupsComponent, DataFormPlatformSpecificsComponent, DataFormRuntimeUpdatesComponent, DataFormStylingComponent, DataFormValidationComponent, ListviewObservableArrayComponent, ListViewItemAnimationsComponent, DataformGridLayoutComponent, DataformStackLayoutComponent, DataformGettingStartedJsonComponent, DataformImageLabelsComponent, DataformPropertiesJsonComponent, DataformStylingAdvancedComponent, DataformCheckErrorsComponent, DataFormaAutoCompleteComponent, ListViewSwipeActionsComponent, ListViewSwipeActionsMultipleComponent, ListViewSwipeActionsThresholdsComponent, ListviewItemLayoutsStaggeredComponent, ListViewSwipeDisableComponent, GaugesGettingStartedComponent, GaugesAnimationsComponent, GaugesCustomizationComponent, GaugesScalesComponent, DataformReadOnlyComponent, DataformEditorStyleComponent, DataformCustomEditorsComponent, DataFormValueProvidersComponent, DataFormScrollingComponent, ListviewMultipleTemplatesComponent, DataFormCustomValidatorComponent, DataFormCustomValidationComponent, DataFormAsyncValidationComponent, DataFormValidationModesComponent, DataFormValidationEventsComponent, DataFormValidationMetadataComponent, DataFormLabelsComponent, ListviewItemLayoutsRuntimeComponent, DataFormEditorBackgroundComponent];
let APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
    {
        path: "ListviewMultipleTemplatesComponent",
        component: ListviewMultipleTemplatesComponent,
        data: {
            "title": "Multiple Item Templates"
        }
    },
    {
        path: "ListViewGettingStartedComponent",
        component: ListViewGettingStartedComponent,
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewHeaderFooterComponent",
        component: ListViewHeaderFooterComponent,
        data: {
            "title": "Header and Footer"
        }
    },
    {
        path: "ListViewItemReorderComponent",
        component: ListViewItemReorderComponent,
        data: {
            "title": "Item Reorder"
        }
    },
    {
        path: "ListViewItemSelectionComponent",
        component: ListViewItemSelectionComponent,
        data: {
            "title": "Single Selection"
        }
    },
    {
        path: "ListviewSelectionStatesComponent",
        component: ListviewSelectionStatesComponent,
        data: {
            "title": "Selection states"
        }
    },
    {
        path: "ListViewLoadOnDemandComponent",
        component: ListViewLoadOnDemandComponent,
        data: {
            "title": "Load on Demand"
        }
    },
    {
        path: "ListViewPullToRefreshComponent",
        component: ListViewPullToRefreshComponent,
        data: {
            "title": "Pull to Refresh"
        }
    },
    {
        path: "ListViewItemLayoutsGridComponent",
        component: ListViewItemLayoutsGridComponent,
        data: {
            "title": "Grid"
        }
    },
    {
        path: "ListviewItemLayoutsLinearComponent",
        component: ListviewItemLayoutsLinearComponent,
        data: {
            "title": "Linear"
        }
    },
    {
        path: "ListviewItemLoadingComponent",
        component: ListviewItemLoadingComponent,
        data: {
            "title": "Item Loading"
        }
    },
    {
        path: "ListviewItemLayoutsStaggeredComponent",
        component: ListviewItemLayoutsStaggeredComponent,
        data: {
            "title": "Staggered"
        }
    },
    {
        path: "ListviewItemLayoutsRuntimeComponent",
        component: ListviewItemLayoutsRuntimeComponent,
        data: {
            "title": "Change at runtime"
        }
    },
    {
        path: "ListviewItemReorderHandleComponent",
        component: ListviewItemReorderHandleComponent,
        data: {
            "title": "Item Reorder with handle"
        }
    },
    {
        path: "ListviewItemSelectionMultipleComponent",
        component: ListviewItemSelectionMultipleComponent,
        data: {
            "title": "Multiple Selection"
        }
    },
    {
        path: "ListviewItemSelectionProgrammaticComponent",
        component: ListviewItemSelectionProgrammaticComponent,
        data: {
            "title": "Programmatic Selection"
        }
    },
    {
        path: "ListviewItemSeparatorComponent",
        component: ListviewItemSeparatorComponent,
        data: {
            "title": "Item separators"
        }
    },
    {
        path: "SideDrawerGettingStartedComponent",
        component: SideDrawerGettingStartedComponent,
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "SideDrawerOverNavigationComponent",
        component: SideDrawerOverNavigationComponent,
        data: {
            "title": "Over Navigation"
        }
    },
    {
        path: "SecondSideDrawerOverNavigationComponent",
        component: SecondSideDrawerOverNavigationComponent,
        data: {
            "title": "Over Navigation Second"
        }
    },
    {
        path: "SideDrawerEventsComponent",
        component: SideDrawerEventsComponent,
        data: {
            "title": "Events"
        }
    },
    {
        path: "SideDrawerPositionComponent",
        component: SideDrawerPositionComponent,
        data: {
            "title": "Position"
        }
    },
    {
        path: "SideDrawerTransitionsComponent",
        component: SideDrawerTransitionsComponent,
        data: {
            "title": "Transitions"
        }
    },
    {
        path: "CalendarGettingStartedComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "CalendarLocalizationComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Localization"
        }
    },
    {
        path: "CalendarPopulatingWithDataComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Populating with data"
        }
    },
    {
        path: "CalendarProgrammaticControlComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Programmatic control"
        }
    },
    {
        path: "CalendarViewModesComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "View modes"
        }
    },
    {
        path: "CalendarSelectionModesComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Selection modes"
        }
    },
    {
        path: "CalendarCellStylingComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Cell styling"
        }
    },
    {
        path: "CalendarEventsViewModesComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Events view modes"
        }
    },
    {
        path: "CalendarTransitionModesComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Transition modes"
        }
    },
    {
        path: "ChartSeriesAreaComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Area Series"
        }
    },
    {
        path: "ChartSeriesStackedAreaComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Stacked Area Series"
        }
    },
    {
        path: "ChartSeriesBarComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Bar series"
        }
    },
    {
        path: "ChartSeriesRangeBarComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Range Bar series"
        }
    },
    {
        path: "ChartSeriesStackedBarComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Stacked Bar series"
        }
    },
    {
        path: "ChartSeriesBubbleComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Bubble series"
        }
    },
    {
        path: "ChartSeriesScatterBubbleComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Scatter Bubble series"
        }
    },
    {
        path: "ChartSeriesCandlestickComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Candlestick series"
        }
    },
    {
        path: "ChartSeriesOhlcComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Ohlc series"
        }
    },
    {
        path: "ChartSeriesLineComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Line series"
        }
    },
    {
        path: "ChartSeriesPieComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Pie series"
        }
    },
    {
        path: "ChartSeriesScatterComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Scatter series"
        }
    },
    {
        path: "ChartSeriesSplineComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Spline series"
        }
    },
    {
        path: "ChartSeriesSplineAreaComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Spline Area series"
        }
    },
    {
        path: "ChartAnnotationsGridLineComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Grid line"
        }
    },
    {
        path: "ChartAnnotationsPlotBandComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Plot band"
        }
    },
    {
        path: "ChartBehaviorsDatapointSelectionComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Datapoint selection"
        }
    },
    {
        path: "ChartBehaviorsPanZoomComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Pan & Zoom"
        }
    },
    {
        path: "ChartBehaviorsChartPieSelectionComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Pie selection"
        }
    },
    {
        path: "ChartBehaviorsSeriesSelectionComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Series selection"
        }
    },
    {
        path: "ChartBehaviorsTrackballComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Trackball"
        }
    },
    {
        path: "ChartLegendComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Legend"
        }
    },
    {
        path: "ChartAxesCustomizationComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Customization"
        }
    },
    {
        path: "ChartAxesDateTimeComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Date time axis"
        }
    },
    {
        path: "ChartAxesMultipleComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Multiple axes"
        }
    },
    {
        path: "ChartAxesNegativeValuesComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Negative values"
        }
    },
    {
        path: "ChartStylingAxesComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling axes"
        }
    },
    {
        path: "ChartStylingGridComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling grid"
        }
    },
    {
        path: "ChartStylingLabelComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling labels"
        }
    },
    {
        path: "ChartStylingSelectionComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling series selection"
        }
    },
    {
        path: "ChartStylingSeriesComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling series"
        }
    },
    {
        path: "ListviewScrollToIndexVerticalComponent",
        component: ListviewScrollToIndexVerticalComponent,
        data: {
            "title": "In vertical direction"
        }
    },
    {
        path: "ListviewScrollToIndexHorizontalComponent",
        component: ListviewScrollToIndexHorizontalComponent,
        data: {
            "title": "In horizontal direction"
        }
    },
    {
        path: "ListViewScrollEventsComponent",
        component: ListViewScrollEventsComponent,
        data: {
            "title": "Scroll Events"
        }
    },
    {
        path: "DataFormAdjustmentComponent",
        component: DataFormAdjustmentComponent,
        data: {
            "title": "Properties"
        }
    },
    {
        path: "DataFormCommitModesComponent",
        component: DataFormCommitModesComponent,
        data: {
            "title": "Commit Modes"
        }
    },
    {
        path: "DataFormEditorsComponent",
        component: DataFormEditorsComponent,
        data: {
            "title": "Common"
        }
    },
    {
        path: "DataFormLabelsComponent",
        component: DataFormLabelsComponent,
        data: {
            "title": "Labels"
        }
    },
    {
        path: "DataFormEventsComponent",
        component: DataFormEventsComponent,
        data: {
            "title": "Events"
        }
    },
    {
        path: "DataFormGettingStartedComponent",
        component: DataFormGettingStartedComponent,
        data: {
            "title": "Getting started"
        }
    },
    {
        path: "DataFormGroupsComponent",
        component: DataFormGroupsComponent,
        data: {
            "title": "Groups"
        }
    },
    {
        path: "DataFormPlatformSpecificsComponent",
        component: DataFormPlatformSpecificsComponent,
        data: {
            "title": "Platform adjustments"
        }
    },
    {
        path: "DataFormRuntimeUpdatesComponent",
        component: DataFormRuntimeUpdatesComponent,
        data: {
            "title": "Runtime updates"
        }
    },
    {
        path: "DataFormStylingComponent",
        component: DataFormStylingComponent,
        data: {
            "title": "Styling"
        }
    },
    {
        path: "DataFormValidationComponent",
        component: DataFormValidationComponent,
        data: {
            "title": "Validators"
        }
    },
    {
        path: "DataFormCustomValidationComponent",
        component: DataFormCustomValidationComponent,
        data: {
            "title": "Custom Validation"
        }
    },
    {
        path: "DataFormValidationModesComponent",
        component: DataFormValidationModesComponent,
        data: {
            "title": "Validation Modes"
        }
    },
    {
        path: "DataFormValidationEventsComponent",
        component: DataFormValidationEventsComponent,
        data: {
            "title": "Validation Events"
        }
    },
    {
        path: "DataFormValidationMetadataComponent",
        component: DataFormValidationMetadataComponent,
        data: {
            "title": "Validators JSON"
        }
    },
    {
        path: "DataFormAsyncValidationComponent",
        component: DataFormAsyncValidationComponent,
        data: {
            "title": "Async Validation"
        }
    },
    {
        path: "DataFormCustomValidatorComponent",
        component: DataFormCustomValidatorComponent,
        data: {
            "title": "Custom Validator"
        }
    },
    {
        path: "DataFormValueProvidersComponent",
        component: DataFormValueProvidersComponent,
        data: {
            "title": "Value Providers"
        }
    },
    {
        path: "DataFormScrollingComponent",
        component: DataFormScrollingComponent,
        data: {
            "title": "Scrollable Form"
        }
    },
    {
        path: "ListviewObservableArrayComponent",
        component: ListviewObservableArrayComponent,
        data: {
            "title": "Observable Array"
        }
    },
    {
        path: "ListViewItemAnimationsComponent",
        component: ListViewItemAnimationsComponent,
        data: {
            "title": "Item Animations"
        }
    },
    {
        path: "ChartStylingPieSeriesComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Styling Pie Chart series"
        }
    },
    {
        path: "DataformGridLayoutComponent",
        component: DataformGridLayoutComponent,
        data: {
            "title": "Grid"
        }
    },
    {
        path: "DataformStackLayoutComponent",
        component: DataformStackLayoutComponent,
        data: {
            "title": "Stack"
        }
    },
    {
        path: "DataformGettingStartedJsonComponent",
        component: DataformGettingStartedJsonComponent,
        data: {
            "title": "Getting started JSON"
        }
    },
    {
        path: "DataformImageLabelsComponent",
        component: DataformImageLabelsComponent,
        data: {
            "title": "Image Labels"
        }
    },
    {
        path: "DataformPropertiesJsonComponent",
        component: DataformPropertiesJsonComponent,
        data: {
            "title": "Properties JSON"
        }
    },
    {
        path: "DataformStylingAdvancedComponent",
        component: DataformStylingAdvancedComponent,
        data: {
            "title": "Styling Advanced"
        }
    },
    {
        path: "DataFormEditorBackgroundComponent",
        component: DataFormEditorBackgroundComponent,
        data: {
            "title": "Editor Background"
        }
    },
    {
        path: "DataformCheckErrorsComponent",
        component: DataformCheckErrorsComponent,
        data: {
            "title": "Check Validation State"
        }
    },
    {
        path: "DataFormaAutoCompleteComponent",
        component: DataFormaAutoCompleteComponent,
        data: {
            "title": "AutoComplete"
        }
    },
    {
        path: "ListViewSwipeActionsComponent",
        component: ListViewSwipeActionsComponent,
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewSwipeActionsMultipleComponent",
        component: ListViewSwipeActionsMultipleComponent,
        data: {
            "title": "Multiple actions"
        }
    },
    {
        path: "ListViewSwipeActionsThresholdsComponent",
        component: ListViewSwipeActionsThresholdsComponent,
        data: {
            "title": "Animated thresholds"
        }
    },
    {
        path: "AutocompleteGettingStartedComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Getting started"
        }
    },
    {
        path: "AutoCompleteLayoutsRuntimeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Switch at runtime"
        }
    },
    {
        path: "AutoCompleteRemoteComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Async Data Fetch"
        }
    },
    {
        path: "AutoCompleteCustomizationComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Customization"
        }
    },
    {
        path: "AutoCompleteEventsComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Events"
        }
    },
    {
        path: "AutoCompleteContainsModeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Contains"
        }
    },
    {
        path: "AutoCompleteStartsWithModeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Starts with"
        }
    },
    {
        path: "AutoCompleteTokensModeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Tokens"
        }
    },
    {
        path: "AutoCompletePlainModeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Plain"
        }
    },
    {
        path: "AutoCompleteLayoutsWrapComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Wrap"
        }
    },
    {
        path: "AutoCompleteLayoutsHorizontalComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Horizontal"
        }
    },
    {
        path: "AutocompleteSuggestModeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Suggest"
        }
    },
    {
        path: "AutoCompleteAppendModeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Append"
        }
    },
    {
        path: "AutoCompleteSuggestAppendModeComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Suggest & Append"
        }
    },
    {
        path: "ListViewSwipeDisableComponent",
        component: ListViewSwipeDisableComponent,
        data: {
            "title": "Disable\\Enable"
        }
    },
    {
        path: "GaugesGettingStartedComponent",
        component: GaugesGettingStartedComponent,
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "GaugesAnimationsComponent",
        component: GaugesAnimationsComponent,
        data: {
            "title": "Animations"
        }
    },
    {
        path: "GaugesCustomizationComponent",
        component: GaugesCustomizationComponent,
        data: {
            "title": "Customization"
        }
    },
    {
        path: "GaugesScalesComponent",
        component: GaugesScalesComponent,
        data: {
            "title": "Scales"
        }
    },
    {
        path: "AutoCompleteReadOnlyComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',        
        data: {
            "title": "Read Only"
        }
    },
    {
        path: "DataformReadOnlyComponent",
        component: DataformReadOnlyComponent,
        data: {
            "title": "Read Only"
        }
    },
    {
        path: "DataformEditorStyleComponent",
        component: DataformEditorStyleComponent,
        data: {
            "title": "At runtime"
        }
    },
    {
        path: "DataformCustomEditorsComponent",
        component: DataformCustomEditorsComponent,
        data: {
            "title": "Custom Editors"
        }
    }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);