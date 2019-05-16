import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
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
        AppRoutingModule,
        CommonDirectivesModule,
        TNSImageModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptRouterModule,
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
export class AppModule { }
