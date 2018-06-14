import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";

const APP_ROUTES: Routes = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: ExamplesListDepth1Component },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: ExamplesListDepth2Component },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: ExamplesListDepth3Component },
    { path: "options", component: OptionsComponent },
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
    }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES);