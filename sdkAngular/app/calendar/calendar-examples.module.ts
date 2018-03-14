import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { CalendarLocalizationComponent } from './calendar-localization/calendar-localization.component';
import { CalendarCellStylingComponent } from './cell-styling/calendar-cell-styling.component';
import { CalendarEventsViewModesComponent } from './events-view-modes/calendar-events-view-modes.component';
import { CalendarGettingStartedComponent } from './getting-started/calendar-getting-started.component';
import { CalendarPopulatingWithDataComponent } from './populating-with-data/calendar-populating-with-data.component';
import { CalendarProgrammaticControlComponent } from './programmatic-control/calendar-programmatic-control.component';
import { CalendarSelectionModesComponent } from './selection-modes/calendar-selection-modes.component';
import { CalendarTransitionModesComponent } from './transition-modes/calendar-transition-modes.component';
import { CalendarViewModesComponent } from './view-modes/calendar-view-modes.component';
import { CalendarDayViewComponent } from './day-view/calendar-day-view.component';
import { routes } from './calendar-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        CommonDirectivesModule,
        NativeScriptUICalendarModule,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes),
        NativeScriptCommonModule,
    ],
    declarations: [
        CalendarLocalizationComponent,
        CalendarCellStylingComponent,
        CalendarEventsViewModesComponent,
        CalendarGettingStartedComponent,
        CalendarPopulatingWithDataComponent,
        CalendarProgrammaticControlComponent,
        CalendarSelectionModesComponent,
        CalendarTransitionModesComponent,
        CalendarViewModesComponent,
        CalendarDayViewComponent
    ]
})
export class CalendarExamplesModule { }
