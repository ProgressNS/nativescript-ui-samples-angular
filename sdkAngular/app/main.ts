import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as application from "tns-core-modules/application";

if (application.android) {
    require("./main-activity.android.ts");
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
