// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import elementRegistry = require('nativescript-angular/element-registry');
import {FrescoDrawee} from "fresco/fresco";
var application = require("application");

// SideDrawer components and providers
//import {AppComponent} from "./sidedrawer/getting-started/getting-started.component";
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

// ListView components and providers
//import {AppComponent} from "./listview/load-on-demand/listview-load-on-demand.component";
import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui-pro/listview/angular/listview-directives';

//import applicationAngular = require("nativescript-angular/application");
//applicationAngular.cssFile = "./app.css";

import {MainComponent} from "./main/main.component";


if (application.android) {
    application.onLaunch = function (intent) {
        com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context);
    };
}

elementRegistry.registerElement("FrescoDrawee", () => FrescoDrawee);
//nativeScriptBootstrap(AppComponent, LISTVIEW_PROVIDERS);
nativeScriptBootstrap(MainComponent, [LISTVIEW_PROVIDERS, SIDEDRAWER_PROVIDERS]);
//nativeScriptBootstrap(AppComponent, SIDEDRAWER_PROVIDERS);