import {nativeScriptBootstrap} from "nativescript-angular/application";
import elementRegistry = require('nativescript-angular/element-registry');
import {FrescoDrawee} from "fresco/fresco";
// >> using-global-directives
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";
import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui-pro/listview/angular/listview-directives';
import {MainComponent} from "./main/main.component";
// >> (hide)
import * as applicationModule from "application";

if (applicationModule.android) {
    applicationModule.onLaunch = function (intent) {
        com.facebook.drawee.backends.pipeline.Fresco.initialize(applicationModule.android.context);
    };
}
// << (hide)
elementRegistry.registerElement("FrescoDrawee", () => FrescoDrawee);
nativeScriptBootstrap(MainComponent, [LISTVIEW_PROVIDERS, SIDEDRAWER_PROVIDERS]);
// << using-global-directives