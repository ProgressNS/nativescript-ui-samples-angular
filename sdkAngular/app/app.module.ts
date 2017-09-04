import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// >> using-global-directives
// --- The built-in 'nativescript-telerik-ui-pro' modules
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";
import { NativeScriptUIChartModule } from "nativescript-telerik-ui-pro/chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-telerik-ui-pro/dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-telerik-ui-pro/autocomplete/angular";
import { NativeScriptUIGaugesModule } from "nativescript-telerik-ui-pro/gauges/angular";

// Not required imports, these are used by the nativescript-samples-angular SDK examples - https://github.com/telerik/nativescript-ui-samples-angular
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./navigation/app.component";
import { routing, EXAMPLES_COMPONENTS } from "./app.routing";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { COMMON_DIRECTIVES } from './navigation/directives';
import { CommonDirectivesModule } from './navigation/directives/common-directives.module';
import { TNSFrescoModule } from "nativescript-fresco/angular";

// >> (hide)
import * as applicationModule from "tns-core-modules/application";
import * as frescoModule from "nativescript-fresco";

if (applicationModule.android) {
    applicationModule.on("launch", () => {
        frescoModule.initialize();
    });
}
// << (hide)

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ExamplesListDepthComponents,
        OptionsComponent,
        EXAMPLES_COMPONENTS,
    ],
    imports: [
        NativeScriptModule,
        CommonModule,
        CommonDirectivesModule,
        TNSFrescoModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugesModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        routing
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    providers: [
        OptionsService,
        ExampleItemService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { 
}
// << using-global-directives
