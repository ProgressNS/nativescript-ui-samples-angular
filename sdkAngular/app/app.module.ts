import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// >> using-global-directives
// --- The built-in 'nativescript-pro-ui' modules, if you are not using 'lazy' loading, uncomment and import the below modules into the 'imports' of the first ngModule (AppModule) of the app. 
// import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
// import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
// import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
// import { NativeScriptUIGaugesModule } from "nativescript-pro-ui/gauges/angular";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

// Not required imports, these are used by the nativescript-samples-angular SDK examples - https://github.com/telerik/nativescript-ui-samples-angular
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./navigation/app.component";
import { routing } from "./app.routing";
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
    ],
    imports: [
        NativeScriptModule,
        CommonModule,
        CommonDirectivesModule,
        TNSFrescoModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
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
