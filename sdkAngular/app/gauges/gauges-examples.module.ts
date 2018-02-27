import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";

import { GaugesAnimationsComponent } from './animations/gauges-animations.component';
import { GaugesCustomizationComponent } from './customization/gauges-customization.component';
import { GaugesGettingStartedComponent } from './getting-started/gauges-getting-started.component';
import { GaugesScalesComponent } from './scales/gauges-scales.component';

import { routes } from './gauges-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,        
        CommonDirectivesModule,
        NativeScriptUIGaugeModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        GaugesAnimationsComponent,
        GaugesCustomizationComponent,
        GaugesGettingStartedComponent,
        GaugesScalesComponent
    ]
})
export class GaugesExamplesModule { }