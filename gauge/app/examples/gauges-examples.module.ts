import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";

import { GaugesAnimationsComponent } from './animations/gauges-animations.component';
import { GaugesCustomizationComponent } from './customization/gauges-customization.component';
import { GaugesStyleBindingsComponent } from './style-bindings/gauges-style-bindings.component';
import { GaugesGettingStartedComponent } from './getting-started/gauges-getting-started.component';
import { GaugesScalesComponent } from './scales/gauges-scales.component';

import { routes } from './gauges-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        CommonDirectivesModule,
        NativeScriptCommonModule,
        NativeScriptUIGaugeModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        GaugesAnimationsComponent,
        GaugesCustomizationComponent,
        GaugesStyleBindingsComponent,
        GaugesGettingStartedComponent,
        GaugesScalesComponent
    ]
})
export class GaugesExamplesModule { }