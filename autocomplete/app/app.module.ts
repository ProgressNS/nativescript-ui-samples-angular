import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routing } from "./app.routing";
import { AppComponent } from "./navigation/app.component";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { NativeScriptRouterModule} from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { CommonDirectivesModule } from './navigation/directives/common-directives.module';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ExamplesListDepthComponents,
        OptionsComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    imports: [
        NativeScriptModule,
        CommonDirectivesModule,
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
        ExampleItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}

