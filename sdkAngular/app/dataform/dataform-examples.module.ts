import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { DataFormAdjustmentComponent } from './adjustment/dataform-adjustment.component';
import { DataFormCommitModesComponent } from './commit-modes/dataform-commit-modes.component';
import { DataFormaAutoCompleteComponent } from './editors/autocomplete/dataform-autocomplete.component';
import { DataformCustomEditorsComponent } from './editors/custom-editors/dataform-custom-editors.component';
import { DataFormLabelsComponent } from './editors/labels/dataform-labels.component';
import { DataformReadOnlyComponent } from './editors/readonly/dataform-read-only.component';
import { DataFormEditorsComponent } from './editors/dataform-editors.component';
import { DataFormEventsComponent } from './events/dataform-events.component';
import { DataFormGettingStartedComponent } from './getting-started/dataform-getting-started.component';
import { DataformGettingStartedJsonComponent } from './getting-started-json/dataform-getting-started-json.component';
import { DataFormGroupsComponent } from './groups/dataform-groups.component';
import { DataformImageLabelsComponent } from './image-labels/dataform-image-labels.component';
import { DataformGridLayoutComponent } from './layouts/dataform-grid-layout.component';
import { DataformStackLayoutComponent } from './layouts/dataform-stack-layout.component';
import { DataFormPlatformSpecificsComponent } from './platform-specifics/dataform-platform-specifics.component';
import { DataformPropertiesJsonComponent } from './properties-json/dataform-properties-json.component';
import { DataFormRuntimeUpdatesComponent } from './runtime-updates/dataform-runtime-updates.component';
import { DataFormScrollingComponent } from './scrolling/dataform-scrolling.component';
import { DataformStylingAdvancedComponent } from './styling/advanced/dataform-styling-advanced.component';
import { DataFormStylingComponent } from './styling/common/dataform-styling.component';
import { DataFormEditorBackgroundComponent } from './styling/editor-background/dataform-editor-background.component';
import { DataformEditorStyleComponent } from './styling/editor-style/dataform-editor-style.component';
import { DataFormAsyncValidationComponent } from './validation/async-validation/dataform-async-validation.component';
import { DataformCheckErrorsComponent } from './validation/check-errors/dataform-check-errors.component';
import { DataFormCustomValidationComponent } from './validation/custom-validation/dataform-custom-validation.component';
import { DataFormCustomValidatorComponent } from './validation/custom-validator/dataform-custom-validator.component';
import { DataFormValidationMetadataComponent } from './validation/metadata/dataform-validation-metadata.component';
import { DataFormValidationEventsComponent } from './validation/validation-events/dataform-validation-events.component';
import { DataFormValidationModesComponent } from './validation/validation-modes/dataform-validation-modes.component';
import { DataFormValidationComponent } from './validation/dataform-validation.component';
import { DataFormValueProvidersComponent } from './value-providers/dataform-value-providers.component';

import { routes } from './dataform-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        CommonDirectivesModule,
        NativeScriptUIDataFormModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes),
        NativeScriptCommonModule,
    ],
    declarations: [
        DataFormAdjustmentComponent,
        DataFormCommitModesComponent,
        DataFormaAutoCompleteComponent,
        DataformCustomEditorsComponent,
        DataFormLabelsComponent,
        DataformReadOnlyComponent,
        DataFormEditorsComponent,
        DataFormEventsComponent,
        DataFormGettingStartedComponent,
        DataformGettingStartedJsonComponent,
        DataFormGroupsComponent,
        DataformImageLabelsComponent,
        DataformGridLayoutComponent,
        DataformStackLayoutComponent,
        DataFormPlatformSpecificsComponent,
        DataformPropertiesJsonComponent,
        DataFormRuntimeUpdatesComponent,
        DataFormScrollingComponent,
        DataformStylingAdvancedComponent,
        DataFormStylingComponent,
        DataFormEditorBackgroundComponent,
        DataformEditorStyleComponent,
        DataFormAsyncValidationComponent,
        DataformCheckErrorsComponent,
        DataFormCustomValidationComponent,
        DataFormCustomValidatorComponent,
        DataFormValidationMetadataComponent,
        DataFormValidationEventsComponent,
        DataFormValidationModesComponent,
        DataFormValidationComponent,
        DataFormValueProvidersComponent,
    ]
})
export class DataFormExamplesModule { }
