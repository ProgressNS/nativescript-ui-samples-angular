import { Routes } from '@angular/router';

import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

import { ListViewGettingStartedComponent } from "./listview/getting-started/listview-getting-started.component";
import { ListViewHeaderFooterComponent } from "./listview/header-footer/listview-header-footer.component";
import { ListViewItemReorderComponent } from "./listview/item-reorder/listview-item-reorder.component";
import { ListViewItemSelectionComponent } from "./listview/item-selection/listview-item-selection.component";
import { ListviewSelectionStatesComponent } from "./listview/selection-states/listview-selection-states.component";
import { ListViewSwipeExecuteComponent } from "./listview/swipe-execute/listview-swipe-execute.component";
import { ListViewLoadOnDemandComponent } from "./listview/load-on-demand/listview-load-on-demand.component";
import { ListViewPullToRefreshComponent } from "./listview/pull-to-refresh/listview-pull-to-refresh.component";
import { ListViewItemAnimationsComponent } from "./listview/item-animations/listview-item-animations.component";
import { ListViewItemLayoutsGridComponent } from "./listview/item-layouts/listview-item-layouts-grid.component";
import { ListviewItemLayoutsLinearComponent } from "./listview/item-layouts/listview-item-layouts-linear.component";
import { ListviewItemLayoutsStaggeredComponent } from "./listview/item-layouts/listview-item-layouts-staggered.component";
import { ListviewItemLoadingComponent } from "./listview/item-loading/listview-item-loading.component";
import { ListviewItemReorderHandleComponent } from "./listview/item-reorder/listview-item-reorder-handle.component";
import { ListviewItemSelectionMultipleComponent } from "./listview/item-selection/listview-item-selection-multiple.component";
import { ListviewItemSelectionProgrammaticComponent } from "./listview/item-selection/listview-item-selection-programmatic.component";
import { ListviewObservableArrayComponent } from "./listview/observable-array/listview-observable-array.component";
import { ListviewSwipeExecuteStickyComponent } from "./listview/swipe-execute/listview-swipe-execute-sticky.component";
import { ListviewSwipeExecuteStretchComponent } from "./listview/swipe-execute/listview-swipe-execute-stretch.component";
import { ListViewSwipeActionsComponent } from "./listview/swipe-actions/listview-swipe-actions.component";
import { ListViewSwipeActionsMultipleComponent } from "./listview/swipe-actions/listview-swipe-actions-multiple.component";
import { ListViewSwipeActionsThresholdsComponent } from "./listview/swipe-actions/listview-swipe-actions-thresholds.component";
import { ListViewSwipeDisableComponent } from "./listview/swipe-actions/listview-swipe-disable.component";
import { ListviewItemSeparatorComponent } from "./listview/item-separator/listview-item-separator.component";
import { ListviewScrollToIndexVerticalComponent } from "./listview/scroll-to-index/listview-scroll-to-index-vertical.component";
import { ListviewScrollToIndexHorizontalComponent } from "./listview/scroll-to-index/listview-scroll-to-index-horizontal.component";
import { SideDrawerGettingStartedComponent } from "./sidedrawer/getting-started/getting-started.component";
import { SideDrawerOverNavigationComponent } from "./sidedrawer/over-navigation/over-navigation.component";
import { SecondSideDrawerOverNavigationComponent } from "./sidedrawer/over-navigation/second-page/second-over-navigation.component";
import { SideDrawerEventsComponent } from "./sidedrawer/events/events.component";
import { SideDrawerPositionComponent } from "./sidedrawer/position/position.component";
import { SideDrawerTransitionsComponent } from "./sidedrawer/transitions/transitions.component";
import { CalendarGettingStartedComponent } from "./calendar/getting-started/calendar-getting-started.component";
import { CalendarLocalizationComponent } from "./calendar/calendar-localization/calendar-localization.component";
import { CalendarPopulatingWithDataComponent } from "./calendar/populating-with-data/calendar-populating-with-data.component";
import { CalendarProgrammaticControlComponent } from "./calendar/programmatic-control/calendar-programmatic-control.component";
import { CalendarViewModesComponent } from "./calendar/view-modes/calendar-view-modes.component";
import { CalendarSelectionModesComponent } from "./calendar/selection-modes/calendar-selection-modes.component";
import { CalendarCellStylingComponent } from "./calendar/cell-styling/calendar-cell-styling.component";
import { CalendarEventsViewModesComponent } from "./calendar/events-view-modes/calendar-events-view-modes.component";
import { CalendarTransitionModesComponent } from "./calendar/transition-modes/calendar-transition-modes.component";
import { ChartSeriesAreaComponent } from "./chart/series/area/chart-series-area.component";
import { ChartSeriesStackedAreaComponent } from "./chart/series/area/chart-series-stacked-area.component";
import { ChartSeriesBarComponent } from "./chart/series/bar/chart-series-bar.component";
import { ChartSeriesRangeBarComponent } from "./chart/series/bar/chart-series-range-bar.component";
import { ChartSeriesStackedBarComponent } from "./chart/series/bar/chart-series-stacked-bar.component";
import { ChartSeriesBubbleComponent } from "./chart/series/bubble/chart-series-bubble.component";
import { ChartSeriesScatterBubbleComponent } from "./chart/series/bubble/chart-series-scatter-bubble.component";
import { ChartSeriesCandlestickComponent } from "./chart/series/financial/chart-series-candlestick.component";
import { ChartSeriesOhlcComponent } from "./chart/series/financial/chart-series-ohlc.component";
import { ChartSeriesLineComponent } from "./chart/series/line/chart-series-line.component";
import { ChartSeriesPieComponent } from "./chart/series/pie/chart-series-pie.component";
import { ChartSeriesScatterComponent } from "./chart/series/scatter/chart-series-scatter.component";
import { ChartSeriesSplineComponent } from "./chart/series/spline/chart-series-spline.component";
import { ChartAnnotationsGridLineComponent } from "./chart/annotations/chart-annotations-grid-line.component";
import { ChartAnnotationsPlotBandComponent } from "./chart/annotations/chart-annotations-plot-band.component";
import { ChartBehaviorsDatapointSelectionComponent } from "./chart/behaviors/chart-behaviors-datapoint-selection.component";
import { ChartBehaviorsPanZoomComponent } from "./chart/behaviors/chart-behaviors-pan-zoom.component";
import { ChartBehaviorsChartPieSelectionComponent } from "./chart/behaviors/chart-behaviors-chart-pie-selection.component";
import { ChartBehaviorsSeriesSelectionComponent } from "./chart/behaviors/chart-behaviors-series-selection.component";
import { ChartLegendComponent } from "./chart/legend/chart-legend.component";
import { ChartAxesCustomizationComponent } from "./chart/axes/customization/chart-axes-customization.component";
import { ChartAxesDateTimeComponent } from "./chart/axes/date-time-axes/chart-axes-date-time.component";
import { ChartAxesMultipleComponent } from "./chart/axes/multiple/chart-axes-multiple.component";
import { ChartAxesNegativeValuesComponent } from "./chart/axes/negative-values/chart-axes-negative-values.component";
import { ChartStylingAxesComponent } from "./chart/styling/chart-styling-axes.component";
import { ChartStylingGridComponent } from "./chart/styling/chart-styling-grid.component";
import { ChartStylingLabelComponent } from "./chart/styling/chart-styling-label.component";
import { ChartStylingSelectionComponent } from "./chart/styling/chart-styling-selection.component";
import { ChartStylingSeriesComponent } from "./chart/styling/chart-styling-series.component";
import { ChartStylingPieSeriesComponent } from "./chart/styling/chart-styling-pie-series.component";
import { DataFormAdjustmentComponent } from "./dataform/adjustment/dataform-adjustment.component";
import { DataFormCommitModesComponent } from "./dataform/commit-modes/dataform-commit-modes.component";
import { DataFormEditorsComponent } from "./dataform/editors/dataform-editors.component";
import { DataFormaAutoCompleteComponent } from "./dataform/editors/autocomplete/dataform-autocomplete.component";
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
import { DataformCheckErrorsComponent } from "./dataform/validation/check-errors/dataform-check-errors.component";
import { DataformGridLayoutComponent } from "./dataform/layouts/dataform-grid-layout.component";
import { DataformStackLayoutComponent } from "./dataform/layouts/dataform-stack-layout.component";
import { DataformImageLabelsComponent } from "./dataform/image-labels/dataform-image-labels.component";
import { DataformPropertiesJsonComponent } from "./dataform/properties-json/dataform-properties-json.component";
import { DataformStylingAdvancedComponent } from "./dataform/styling/advanced/dataform-styling-advanced.component";
import { AutoCompleteGettingStartedComponent } from "./autocomplete/getting-started/autocomplete-getting-started.component";
import { AutoCompleteLayoutsRuntimeComponent } from "./autocomplete/layouts/autocomplete-layouts-runtime.component";
import { AutoCompleteLayoutsWrapComponent } from "./autocomplete/layouts/autocomplete-layouts-wrap.component";
import { AutoCompleteLayoutsHorizontalComponent } from "./autocomplete/layouts/autocomplete-layouts-horizontal.component";
import { AutoCompleteRemoteComponent } from "./autocomplete/remote-data-fetch/autocomplete-remote.component";
import { AutoCompleteCustomizationComponent } from "./autocomplete/customization/autocomplete-customization.component";
import { AutoCompleteEventsComponent } from "./autocomplete/events/autocomplete-events.component";
import { AutoCompleteContainsModeComponent } from "./autocomplete/completion-mode/autocomplete-contains-mode.component";
import { AutoCompleteStartsWithModeComponent } from "./autocomplete/completion-mode/autocomplete-startswith-mode.component";
import { AutoCompletePlainModeComponent } from "./autocomplete/display-mode/autocomplete-plain-mode.component";
import { AutoCompleteTokensModeComponent } from "./autocomplete/display-mode/autocomplete-tokens-mode.component";
import { AutocompleteSuggestModeComponent } from "./autocomplete/suggest-mode/autocomplete-suggest-mode.component";
import { AutoCompleteAppendModeComponent } from "./autocomplete/suggest-mode/autocomplete-append-mode.component";
import { AutoCompleteSuggestAppendModeComponent } from "./autocomplete/suggest-mode/autocomplete-suggest-append-mode.component";
import { AutoCompleteReadOnlyComponent } from "./autocomplete/readonly/autocomplete-readonly.component";
import { GaugesGettingStartedComponent } from "./gauges/getting-started/gauges-getting-started.component";
import { GaugesAnimationsComponent } from "./gauges/animations/gauges-animations.component";
import { GaugesCustomizationComponent } from "./gauges/customization/gauges-customization.component";
import { GaugesScalesComponent } from "./gauges/scales/gauges-scales.component";

var excludedComponents = [ListviewItemLayoutsStaggeredComponent];

export const EXAMPLES_COMPONENTS = [ListViewGettingStartedComponent, ListViewHeaderFooterComponent, ListViewItemReorderComponent, ListViewItemSelectionComponent, ListviewSelectionStatesComponent, ListViewSwipeExecuteComponent, ListViewLoadOnDemandComponent, ListViewPullToRefreshComponent, ListViewItemLayoutsGridComponent, ListviewItemLayoutsLinearComponent, ListviewItemLoadingComponent, ListviewItemReorderHandleComponent, ListviewItemSelectionMultipleComponent, ListviewItemSelectionProgrammaticComponent, ListviewSwipeExecuteStickyComponent, ListviewSwipeExecuteStretchComponent, ListviewItemSeparatorComponent, SideDrawerGettingStartedComponent, SideDrawerOverNavigationComponent, SecondSideDrawerOverNavigationComponent, SideDrawerEventsComponent, SideDrawerPositionComponent, SideDrawerTransitionsComponent, CalendarGettingStartedComponent, CalendarLocalizationComponent, CalendarPopulatingWithDataComponent, CalendarProgrammaticControlComponent, CalendarViewModesComponent, CalendarSelectionModesComponent, CalendarCellStylingComponent, CalendarEventsViewModesComponent, CalendarTransitionModesComponent, ChartSeriesAreaComponent, ChartSeriesStackedAreaComponent, ChartSeriesBarComponent, ChartSeriesRangeBarComponent, ChartSeriesStackedBarComponent, ChartSeriesBubbleComponent, ChartSeriesScatterBubbleComponent, ChartSeriesCandlestickComponent, ChartSeriesOhlcComponent, ChartSeriesLineComponent, ChartSeriesPieComponent, ChartSeriesScatterComponent, ChartSeriesSplineComponent, ChartAnnotationsGridLineComponent, ChartAnnotationsPlotBandComponent, ChartBehaviorsDatapointSelectionComponent, ChartBehaviorsPanZoomComponent, ChartBehaviorsChartPieSelectionComponent, ChartBehaviorsSeriesSelectionComponent, ChartLegendComponent, ChartAxesCustomizationComponent, ChartAxesDateTimeComponent, ChartAxesMultipleComponent, ChartAxesNegativeValuesComponent, ChartStylingAxesComponent, ChartStylingGridComponent, ChartStylingLabelComponent, ChartStylingSelectionComponent, ChartStylingSeriesComponent, ListviewScrollToIndexVerticalComponent, ListviewScrollToIndexHorizontalComponent, DataFormAdjustmentComponent, DataFormCommitModesComponent, DataFormEditorsComponent, DataFormEventsComponent, DataFormGettingStartedComponent, DataFormGroupsComponent, DataFormPlatformSpecificsComponent, DataFormRuntimeUpdatesComponent, DataFormStylingComponent, DataFormValidationComponent, ListviewObservableArrayComponent, ListViewItemAnimationsComponent, ChartStylingPieSeriesComponent, DataformGridLayoutComponent, DataformStackLayoutComponent, DataformGettingStartedJsonComponent, DataformImageLabelsComponent, DataformPropertiesJsonComponent, DataformStylingAdvancedComponent, DataformCheckErrorsComponent, DataFormaAutoCompleteComponent, ListViewSwipeActionsComponent, ListViewSwipeActionsMultipleComponent, ListViewSwipeActionsThresholdsComponent, ListviewItemLayoutsStaggeredComponent, AutoCompleteGettingStartedComponent, AutoCompleteLayoutsRuntimeComponent, AutoCompleteRemoteComponent, AutoCompleteCustomizationComponent, AutoCompleteEventsComponent, AutoCompleteContainsModeComponent, AutoCompleteStartsWithModeComponent, AutoCompletePlainModeComponent, AutoCompleteTokensModeComponent, AutoCompleteLayoutsWrapComponent, AutoCompleteLayoutsHorizontalComponent, AutocompleteSuggestModeComponent, AutoCompleteAppendModeComponent, AutoCompleteSuggestAppendModeComponent, ListViewSwipeDisableComponent, GaugesGettingStartedComponent, GaugesAnimationsComponent, GaugesCustomizationComponent, GaugesScalesComponent, AutoCompleteReadOnlyComponent, DataformReadOnlyComponent, DataformEditorStyleComponent, DataformCustomEditorsComponent];
export const APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
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
        path: "ListViewSwipeExecuteComponent",
        component: ListViewSwipeExecuteComponent,
        data: {
            "title": "Swipe to Execute"
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
        path: "ListviewSwipeExecuteStickyComponent",
        component: ListviewSwipeExecuteStickyComponent,
        data: {
            "title": "Swipe to execute with sticky actions"
        }
    },
    {
        path: "ListviewSwipeExecuteStretchComponent",
        component: ListviewSwipeExecuteStretchComponent,
        data: {
            "title": "Swipe to execute with stretched content"
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
        component: CalendarGettingStartedComponent,
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "CalendarLocalizationComponent",
        component: CalendarLocalizationComponent,
        data: {
            "title": "Localization"
        }
    },
    {
        path: "CalendarPopulatingWithDataComponent",
        component: CalendarPopulatingWithDataComponent,
        data: {
            "title": "Populating with data"
        }
    },
    {
        path: "CalendarProgrammaticControlComponent",
        component: CalendarProgrammaticControlComponent,
        data: {
            "title": "Programmatic control"
        }
    },
    {
        path: "CalendarViewModesComponent",
        component: CalendarViewModesComponent,
        data: {
            "title": "View modes"
        }
    },
    {
        path: "CalendarSelectionModesComponent",
        component: CalendarSelectionModesComponent,
        data: {
            "title": "Selection modes"
        }
    },
    {
        path: "CalendarCellStylingComponent",
        component: CalendarCellStylingComponent,
        data: {
            "title": "Cell styling"
        }
    },
    {
        path: "CalendarEventsViewModesComponent",
        component: CalendarEventsViewModesComponent,
        data: {
            "title": "Events view modes"
        }
    },
    {
        path: "CalendarTransitionModesComponent",
        component: CalendarTransitionModesComponent,
        data: {
            "title": "Transition modes"
        }
    },
    {
        path: "ChartSeriesAreaComponent",
        component: ChartSeriesAreaComponent,
        data: {
            "title": "Area Series"
        }
    },
    {
        path: "ChartSeriesStackedAreaComponent",
        component: ChartSeriesStackedAreaComponent,
        data: {
            "title": "Stacked Area Series"
        }
    },
    {
        path: "ChartSeriesBarComponent",
        component: ChartSeriesBarComponent,
        data: {
            "title": "Bar series"
        }
    },
    {
        path: "ChartSeriesRangeBarComponent",
        component: ChartSeriesRangeBarComponent,
        data: {
            "title": "Range Bar series"
        }
    },
    {
        path: "ChartSeriesStackedBarComponent",
        component: ChartSeriesStackedBarComponent,
        data: {
            "title": "Stacked Bar series"
        }
    },
    {
        path: "ChartSeriesBubbleComponent",
        component: ChartSeriesBubbleComponent,
        data: {
            "title": "Bubble series"
        }
    },
    {
        path: "ChartSeriesScatterBubbleComponent",
        component: ChartSeriesScatterBubbleComponent,
        data: {
            "title": "Scatter Bubble series"
        }
    },
    {
        path: "ChartSeriesCandlestickComponent",
        component: ChartSeriesCandlestickComponent,
        data: {
            "title": "Candlestick series"
        }
    },
    {
        path: "ChartSeriesOhlcComponent",
        component: ChartSeriesOhlcComponent,
        data: {
            "title": "Ohlc series"
        }
    },
    {
        path: "ChartSeriesLineComponent",
        component: ChartSeriesLineComponent,
        data: {
            "title": "Line series"
        }
    },
    {
        path: "ChartSeriesPieComponent",
        component: ChartSeriesPieComponent,
        data: {
            "title": "Pie series"
        }
    },
    {
        path: "ChartSeriesScatterComponent",
        component: ChartSeriesScatterComponent,
        data: {
            "title": "Scatter series"
        }
    },
    {
        path: "ChartSeriesSplineComponent",
        component: ChartSeriesSplineComponent,
        data: {
            "title": "Spline series"
        }
    },
    {
        path: "ChartAnnotationsGridLineComponent",
        component: ChartAnnotationsGridLineComponent,
        data: {
            "title": "Grid line"
        }
    },
    {
        path: "ChartAnnotationsPlotBandComponent",
        component: ChartAnnotationsPlotBandComponent,
        data: {
            "title": "Plot band"
        }
    },
    {
        path: "ChartBehaviorsDatapointSelectionComponent",
        component: ChartBehaviorsDatapointSelectionComponent,
        data: {
            "title": "Datapoint selection"
        }
    },
    {
        path: "ChartBehaviorsPanZoomComponent",
        component: ChartBehaviorsPanZoomComponent,
        data: {
            "title": "Pan & Zoom"
        }
    },
    {
        path: "ChartBehaviorsChartPieSelectionComponent",
        component: ChartBehaviorsChartPieSelectionComponent,
        data: {
            "title": "Pie selection"
        }
    },
    {
        path: "ChartBehaviorsSeriesSelectionComponent",
        component: ChartBehaviorsSeriesSelectionComponent,
        data: {
            "title": "Series selection"
        }
    },
    {
        path: "ChartLegendComponent",
        component: ChartLegendComponent,
        data: {
            "title": "Legend"
        }
    },
    {
        path: "ChartAxesCustomizationComponent",
        component: ChartAxesCustomizationComponent,
        data: {
            "title": "Customization"
        }
    },
    {
        path: "ChartAxesDateTimeComponent",
        component: ChartAxesDateTimeComponent,
        data: {
            "title": "Date time axis"
        }
    },
    {
        path: "ChartAxesMultipleComponent",
        component: ChartAxesMultipleComponent,
        data: {
            "title": "Multiple axes"
        }
    },
    {
        path: "ChartAxesNegativeValuesComponent",
        component: ChartAxesNegativeValuesComponent,
        data: {
            "title": "Negative values"
        }
    },
    {
        path: "ChartStylingAxesComponent",
        component: ChartStylingAxesComponent,
        data: {
            "title": "Styling axes"
        }
    },
    {
        path: "ChartStylingGridComponent",
        component: ChartStylingGridComponent,
        data: {
            "title": "Styling grid"
        }
    },
    {
        path: "ChartStylingLabelComponent",
        component: ChartStylingLabelComponent,
        data: {
            "title": "Styling labels"
        }
    },
    {
        path: "ChartStylingSelectionComponent",
        component: ChartStylingSelectionComponent,
        data: {
            "title": "Styling series selection"
        }
    },
    {
        path: "ChartStylingSeriesComponent",
        component: ChartStylingSeriesComponent,
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
        component: ChartStylingPieSeriesComponent,
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
        component: AutoCompleteGettingStartedComponent,
        data: {
            "title": "Getting started"
        }
    },
    {
        path: "AutoCompleteLayoutsRuntimeComponent",
        component: AutoCompleteLayoutsRuntimeComponent,
        data: {
            "title": "Switch at runtime"
        }
    },
    {
        path: "AutoCompleteRemoteComponent",
        component: AutoCompleteRemoteComponent,
        data: {
            "title": "Async Data Fetch"
        }
    },
    {
        path: "AutoCompleteCustomizationComponent",
        component: AutoCompleteCustomizationComponent,
        data: {
            "title": "Customization"
        }
    },
    {
        path: "AutoCompleteEventsComponent",
        component: AutoCompleteEventsComponent,
        data: {
            "title": "Events"
        }
    },
    {
        path: "AutoCompleteContainsModeComponent",
        component: AutoCompleteContainsModeComponent,
        data: {
            "title": "Contains"
        }
    },
    {
        path: "AutoCompleteStartsWithModeComponent",
        component: AutoCompleteStartsWithModeComponent,
        data: {
            "title": "Starts with"
        }
    },
    {
        path: "AutoCompleteTokensModeComponent",
        component: AutoCompleteTokensModeComponent,
        data: {
            "title": "Tokens"
        }
    },
    {
        path: "AutoCompletePlainModeComponent",
        component: AutoCompletePlainModeComponent,
        data: {
            "title": "Plain"
        }
    },
    {
        path: "AutoCompleteLayoutsWrapComponent",
        component: AutoCompleteLayoutsWrapComponent,
        data: {
            "title": "Wrap"
        }
    },
    {
        path: "AutoCompleteLayoutsHorizontalComponent",
        component: AutoCompleteLayoutsHorizontalComponent,
        data: {
            "title": "Horizontal"
        }
    },
    {
        path: "AutocompleteSuggestModeComponent",
        component: AutocompleteSuggestModeComponent,
        data: {
            "title": "Suggest"
        }
    },
    {
        path: "AutoCompleteAppendModeComponent",
        component: AutoCompleteAppendModeComponent,
        data: {
            "title": "Append"
        }
    },
    {
        path: "AutoCompleteSuggestAppendModeComponent",
        component: AutoCompleteSuggestAppendModeComponent,
        data: {
            "title": "Suggest & Append"
        }
    },
    {
        path: "ListViewSwipeDisableComponent",
        component: ListViewSwipeDisableComponent,
        data: {
            "title": "Disable/Enable"
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
        component: AutoCompleteReadOnlyComponent,
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