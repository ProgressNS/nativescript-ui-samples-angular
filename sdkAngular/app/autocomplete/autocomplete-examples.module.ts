import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-telerik-ui-pro/autocomplete/angular";

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

import { routes } from './autocomplete-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,        
        CommonDirectivesModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        AutoCompleteContainsModeComponent,
        AutoCompleteStartsWithModeComponent,
        AutoCompleteCustomizationComponent,
        AutoCompletePlainModeComponent,
        AutoCompleteTokensModeComponent,
        AutoCompleteEventsComponent,
        AutoCompleteGettingStartedComponent,
        AutoCompleteLayoutsHorizontalComponent,
        AutoCompleteLayoutsRuntimeComponent,
        AutoCompleteLayoutsWrapComponent,
        AutoCompleteReadOnlyComponent,
        AutoCompleteRemoteComponent,
        AutoCompleteAppendModeComponent,
        AutoCompleteSuggestAppendModeComponent,
        AutocompleteSuggestModeComponent,
        AutoCompleteHintComponent
    ]
})
export class AutoCompleteExamplesModule { }
