// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from "nativescript-angular/platform-static";
import { AppModule } from "./app.module.ngfactory";

platformNativeScript().bootstrapModule(AppModule);
