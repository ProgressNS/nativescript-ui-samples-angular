import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

var excludedComponents = [];

let APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
    {
        path: "ListViewMultipleTemplatesComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Item Templates"
        }
    },
    {
        path: "ListViewGettingStartedComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewDataOperationsFilteringComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Filtering"
        }
    },
    {
        path: "ListViewDataOperationsSortingComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Sorting"
        }
    },
    {
        path: "ListViewDataOperationsGroupingComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping"
        }
    },
    {
        path: "ListViewDataOperationsMultipleComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple operations"
        }
    },
    {
        path: "ListViewHeaderFooterComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Header and Footer"
        }
    },
    {
        path: "ListViewItemReorderComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder"
        }
    },
    {
        path: "ListViewItemSelectionComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Single Selection"
        }
    },
    {
        path: "ListViewSelectionStatesComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Selection states"
        }
    },
    {
        path: "ListViewPullToRefreshComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Pull to Refresh"
        }
    },
    {
        path: "ListViewItemLayoutsGridComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grid"
        }
    },
    {
        path: "ListViewItemLayoutsLinearComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Linear"
        }
    },
    {
        path: "ListViewItemLoadingComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Loading"
        }
    },
    {
        path: "ListViewItemLayoutsStaggeredComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Staggered"
        }
    },
    {
        path: "ListViewItemLayoutsRuntimeComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Change at runtime"
        }
    },
    {
        path: "ListViewItemReorderHandleComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder with handle"
        }
    },
    {
        path: "ListViewItemSelectionMultipleComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Selection"
        }
    },
    {
        path: "ListViewItemSelectionProgrammaticComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Programmatic Selection"
        }
    },
    {
        path: "ListViewItemSeparatorComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item separators"
        }
    },
    {
        path: "ListViewDynamicSizeAutoComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Variable Item Size"
        }
    },
    {
        path: "ListViewDynamicSizeManualComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Variable Item Size"
        }
    },
    {
        path: "ListViewFixedSizeAutoComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Fixed Item Size"
        }
    },
    {
        path: "ListViewFixedSizeManualComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Fixed Item Size"
        }
    },
    {
        path: "SideDrawerGettingStartedComponent",
        loadChildren: './sidedrawer/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "SideDrawerEventsComponent",
        loadChildren: './sidedrawer/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Events"
        }
    },
    {
        path: "SideDrawerPositionComponent",
        loadChildren: './sidedrawer/sidedrawer-examples.module#SideDrawerExamplesModule',
        data: {
            "title": "Position"
        }
    },
    {
        path: "SideDrawerTransitionsComponent",
        loadChildren: './sidedrawer/sidedrawer-examples.module#SideDrawerExamplesModule',
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
        path: "CalendarDayViewComponent",
        loadChildren: './calendar/calendar-examples.module#CalendarExamplesModule',
        data: {
            "title": "Day view"
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
        path: "ChartLabelVisibilityComponent",
        loadChildren: './chart/chart-examples.module#ChartExamplesModule',
        data: {
            "title": "Label visibility"
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
        path: "ListViewScrollToIndexVerticalComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In vertical direction"
        }
    },
    {
        path: "ListViewScrollToIndexHorizontalComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In horizontal direction"
        }
    },
    {
        path: "ListViewScrollToIndexInitialComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Initially scrolled"
        }
    },
    {
        path: "ListViewScrollEventsComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Scroll Events"
        }
    },
    {
        path: "DataFormAdjustmentComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Properties"
        }
    },
    {
        path: "DataFormCommitModesComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Commit Modes"
        }
    },
    {
        path: "DataFormEditorsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Common"
        }
    },
    {
        path: "DataFormLabelsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Labels"
        }
    },
    {
        path: "DataFormEventsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Events"
        }
    },
    {
        path: "DataFormGettingStartedComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Getting started"
        }
    },
    {
        path: "DataFormGroupsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Groups"
        }
    },
    {
        path: "DataFormPlatformSpecificsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Platform adjustments"
        }
    },
    {
        path: "DataFormRuntimeUpdatesComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Runtime updates"
        }
    },
    {
        path: "DataFormStylingComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Styling"
        }
    },
    {
        path: "DataFormValidationComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validators"
        }
    },
    {
        path: "DataFormCustomValidationComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Custom Validation"
        }
    },
    {
        path: "DataFormValidationModesComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validation Modes"
        }
    },
    {
        path: "DataFormValidationEventsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validation Events"
        }
    },
    {
        path: "DataFormValidationMetadataComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Validators JSON"
        }
    },
    {
        path: "DataFormAsyncValidationComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Async Validation"
        }
    },
    {
        path: "DataFormCustomValidatorComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Custom Validator"
        }
    },
    {
        path: "DataFormValueProvidersComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Value Providers"
        }
    },
    {
        path: "DataFormScrollingComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Scrollable Form"
        }
    },
    {
        path: "ListViewObservableArrayComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Observable Array"
        }
    },
    {
        path: "ListViewItemAnimationsComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
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
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Grid"
        }
    },
    {
        path: "DataformStackLayoutComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Stack"
        }
    },
    {
        path: "DataformGettingStartedJsonComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Getting started JSON"
        }
    },
    {
        path: "DataformImageLabelsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Image Labels"
        }
    },
    {
        path: "DataformPropertiesJsonComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Properties JSON"
        }
    },
    {
        path: "DataformStylingAdvancedComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Styling Advanced"
        }
    },
    {
        path: "DataFormEditorBackgroundComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Editor Background"
        }
    },
    {
        path: "DataformCheckErrorsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Check Validation State"
        }
    },
    {
        path: "DataFormaAutoCompleteComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "AutoComplete"
        }
    },
    {
        path: "ListViewSwipeActionsComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewSwipeActionsMultipleComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple actions"
        }
    },
    {
        path: "ListViewSwipeActionsThresholdsComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Animated thresholds"
        }
    },
    {
        path: "AutoCompleteGettingStartedComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Getting started"
        }
    },
    {
        path: "AutocompletePreselectedTokensComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Preselected items"
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
        path: "AutoCompleteHintComponent",
        loadChildren: './autocomplete/autocomplete-examples.module#AutoCompleteExamplesModule',
        data: {
            "title": "Hint"
        }
    },
    {
        path: "ListViewSwipeDisableComponent",
        loadChildren: './listview/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Disable\\Enable"
        }
    },
    {
        path: "GaugesGettingStartedComponent",
        loadChildren: './gauges/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "GaugesAnimationsComponent",
        loadChildren: './gauges/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Animations"
        }
    },
    {
        path: "GaugesCustomizationComponent",
        loadChildren: './gauges/gauges-examples.module#GaugesExamplesModule',
        data: {
            "title": "Customization"
        }
    },
    {
        path: "GaugesScalesComponent",
        loadChildren: './gauges/gauges-examples.module#GaugesExamplesModule',
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
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Read Only"
        }
    },
    {
        path: "DataformEditorStyleComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "At runtime"
        }
    },
    {
        path: "DataformCustomEditorsComponent",
        loadChildren: './dataform/dataform-examples.module#DataFormExamplesModule',
        data: {
            "title": "Custom Editors"
        }
    }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);
