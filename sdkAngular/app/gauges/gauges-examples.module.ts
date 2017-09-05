import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIGaugesModule } from "nativescript-telerik-ui-pro/gauges/angular";

import { GaugesAnimationsComponent } from './animations/gauges-animations.component';
import { GaugesCustomizationComponent } from './customization/gauges-customization.component';
import { GaugesGettingStartedComponent } from './getting-started/gauges-getting-started.component';
import { GaugesScalesComponent } from './scales/gauges-scales.component';

import { routes } from './gauges-examples.routing';
import { CommonDirectivesModule } from '../navigation/directives/common-directives.module';

@NgModule({
    imports: [
        NativeScriptModule,        
        CommonDirectivesModule,
        NativeScriptUIGaugesModule,
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