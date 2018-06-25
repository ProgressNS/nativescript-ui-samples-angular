import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

export const routes: Routes = [
  { path: 'localization', component: CalendarLocalizationComponent },
  { path: 'cell-styling', component: CalendarCellStylingComponent },
  { path: 'events-view-modes', component: CalendarEventsViewModesComponent },
  { path: 'getting-started', component: CalendarGettingStartedComponent },
  { path: 'populating', component: CalendarPopulatingWithDataComponent },
  { path: 'programmatic', component: CalendarProgrammaticControlComponent },
  { path: 'selection-modes', component: CalendarSelectionModesComponent },
  { path: 'transition-modes', component: CalendarTransitionModesComponent },
  { path: 'view-modes', component: CalendarViewModesComponent },
  { path: 'day-view', component: CalendarDayViewComponent }
];