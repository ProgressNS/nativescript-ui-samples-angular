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
import { AutoCompleteHintComponent } from './hint/autocomplete-hint.component';
import { AutocompletePreselectedTokensComponent } from './preselected-tokens/autocomplete-preselected-tokens.component';

export const routes: Routes = [
  { path: 'AutoCompleteContainsModeComponent', component: AutoCompleteContainsModeComponent },
  { path: 'AutoCompleteStartsWithModeComponent', component: AutoCompleteStartsWithModeComponent },
  { path: 'AutoCompleteCustomizationComponent', component: AutoCompleteCustomizationComponent },
  { path: 'AutoCompletePlainModeComponent', component: AutoCompletePlainModeComponent },
  { path: 'AutoCompleteTokensModeComponent', component: AutoCompleteTokensModeComponent },
  { path: 'AutoCompleteEventsComponent', component: AutoCompleteEventsComponent },
  { path: 'AutoCompleteGettingStartedComponent', component: AutoCompleteGettingStartedComponent },
  { path: 'AutoCompleteLayoutsHorizontalComponent', component: AutoCompleteLayoutsHorizontalComponent },
  { path: 'AutoCompleteLayoutsRuntimeComponent', component: AutoCompleteLayoutsRuntimeComponent },
  { path: 'AutoCompleteLayoutsWrapComponent', component: AutoCompleteLayoutsWrapComponent },
  { path: 'AutoCompleteReadOnlyComponent', component: AutoCompleteReadOnlyComponent },
  { path: 'AutoCompleteRemoteComponent', component: AutoCompleteRemoteComponent },
  { path: 'AutoCompleteAppendModeComponent', component: AutoCompleteAppendModeComponent },
  { path: 'AutoCompleteSuggestAppendModeComponent', component: AutoCompleteSuggestAppendModeComponent },
  { path: 'AutocompleteSuggestModeComponent', component: AutocompleteSuggestModeComponent },
  { path: 'AutoCompleteHintComponent', component: AutoCompleteHintComponent },
  { path: 'AutocompletePreselectedTokensComponent', component: AutocompletePreselectedTokensComponent }
];