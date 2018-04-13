import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
require("./main-activity.android.ts");

platformNativeScriptDynamic().bootstrapModule(AppModule);
