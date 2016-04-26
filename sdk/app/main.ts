// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./sidedrawer/getting-started/getting-started.component";
//import listViewModule = require('nativescript-telerik-ui-pro/listview');
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives"
import application = require("nativescript-angular/application");
//application.cssFile = "./app.css";


nativeScriptBootstrap(AppComponent);