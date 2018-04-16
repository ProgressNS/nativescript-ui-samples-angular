import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as application from "tns-core-modules/application";

platformNativeScriptDynamic().bootstrapModule(AppModule);
