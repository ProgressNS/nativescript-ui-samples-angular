import {nativeScriptBootstrap} from "nativescript-angular/application";
import elementRegistry = require('nativescript-angular/element-registry');
import {FrescoDrawee} from "fresco/fresco";
// >> using-global-directives
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui-pro/sidedrawer/angular";
import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui-pro/listview/angular';
import {CALENDAR_PROVIDERS} from 'nativescript-telerik-ui-pro/calendar/angular';
import {AppComponent} from "./navigation/app.component";
// >> (hide)
import * as applicationModule from "application";

if (applicationModule.android) {
    applicationModule.onLaunch = function (intent) {
        com.facebook.drawee.backends.pipeline.Fresco.initialize(applicationModule.android.context);
    };
}
elementRegistry.registerElement("FrescoDrawee", () => FrescoDrawee);
// << (hide)
nativeScriptBootstrap(AppComponent, [LISTVIEW_PROVIDERS, SIDEDRAWER_PROVIDERS, CALENDAR_PROVIDERS], { startPageActionBarHidden: false });
// << using-global-directives