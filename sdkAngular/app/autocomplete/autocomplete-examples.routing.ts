import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoCompleteContainsModeComponent } from './completion-mode/autocomplete-contains-mode.component';
import { AutoCompleteStartsWithModeComponent } from './completion-mode/autocomplete-startswith-mode.component';
import { AutoCompleteCustomizationComponent } from './customization/autocomplete-customization.component';
import { AutoCompletePlainModeComponent } from './display-mode/autocomplete-plain-mode.component';
import { AutoCompleteTokensModeComponent } from './display-mode/autocomplete-tokens-mode.component';
import { AutoCompleteEventsComponent } from './events/autocomplete-events.component';
import { AutoCompleteGettingStartedComponent } from './getting-started/autocomplete-getting-started.component';
import { AutoCompleteLayoutsHorizontalComponent } from './layouts/autocomplete-layouts-horizontal.component';
import { AutoCompleteLayoutsRuntimeComponent } from './layouts/autocomplete-layouts-runtime.component';
import { AutoCompleteLayoutsWrapComponent } from './layouts/autocomplete-layouts-wrap.component';
import { AutoCompleteReadOnlyComponent } from './readonly/autocomplete-readonly.component';
import { AutoCompleteRemoteComponent } from './remote-data-fetch/autocomplete-remote.component';
import { AutoCompleteAppendModeComponent } from './suggest-mode/autocomplete-append-mode.component';
import { AutoCompleteSuggestAppendModeComponent } from './suggest-mode/autocomplete-suggest-append-mode.component';
import { AutocompleteSuggestModeComponent } from './suggest-mode/autocomplete-suggest-mode.component';

export const routes: Routes = [
  { path: 'contains', component: AutoCompleteContainsModeComponent },
  { path: 'starts-with', component: AutoCompleteStartsWithModeComponent },
  { path: 'customization', component: AutoCompleteCustomizationComponent },
  { path: 'plain-mode', component: AutoCompletePlainModeComponent },
  { path: 'tokens-mode', component: AutoCompleteTokensModeComponent },
  { path: 'events', component: AutoCompleteEventsComponent },
  { path: 'getting-started', component: AutoCompleteGettingStartedComponent },
  { path: 'layouts-horizontal', component: AutoCompleteLayoutsHorizontalComponent },
  { path: 'layouts-runtime', component: AutoCompleteLayoutsRuntimeComponent },
  { path: 'layouts-wrap', component: AutoCompleteLayoutsWrapComponent },
  { path: 'read-only', component: AutoCompleteReadOnlyComponent },
  { path: 'remote-data', component: AutoCompleteRemoteComponent },
  { path: 'append-mode', component: AutoCompleteAppendModeComponent },
  { path: 'append-suggest-mode', component: AutoCompleteSuggestAppendModeComponent },
  { path: 'suggest-mode', component: AutocompleteSuggestModeComponent }
];