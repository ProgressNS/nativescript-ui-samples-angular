import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { AppComponent } from "./navigation/app.component";
import { routing } from "./app.routing";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { COMMON_DIRECTIVES } from './navigation/directives';
import { CommonDirectivesModule } from './navigation/directives/common-directives.module';

import { TNSImageModule } from "nativescript-image/angular";

// >> (hide)
import * as applicationModule from "tns-core-modules/application";
import * as imageModule from "nativescript-image";

if (applicationModule.android) {
    applicationModule.on("launch", () => {
        imageModule.initialize();
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
        OptionsComponent
    ],
    imports: [
        NativeScriptModule,
        CommonDirectivesModule,
        TNSImageModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
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
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
