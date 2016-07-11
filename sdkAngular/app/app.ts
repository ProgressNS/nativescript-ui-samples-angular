import * as elementRegistryModule from 'nativescript-angular/element-registry';
// >> using-global-directives
import { nativeScriptBootstrap } from "nativescript-angular/application";
import { SIDEDRAWER_PROVIDERS } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { LISTVIEW_PROVIDERS } from 'nativescript-telerik-ui-pro/listview/angular';
import { CALENDAR_PROVIDERS } from 'nativescript-telerik-ui-pro/calendar/angular';
import { CHART_PROVIDERS } from 'nativescript-telerik-ui-pro/chart/angular';
import { AppComponent } from "./navigation/app.component";
import { APP_ROUTER_PROVIDERS } from "./navigation/app.routes";
// >> (hide)
import * as frescoModule from "nativescript-fresco";
import * as applicationModule from "application";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import { RouterConfig, ActivatedRoute, Router, ROUTER_DIRECTIVES, RouterOutletMap, Event } from '@angular/router';

if (applicationModule.android) {
    applicationModule.onLaunch = function (intent) {
        frescoModule.initialize();
    };
}
elementRegistryModule.registerElement("FrescoDrawee", () => frescoModule.FrescoDrawee);
// << (hide)

nativeScriptBootstrap(AppComponent, [LISTVIEW_PROVIDERS, SIDEDRAWER_PROVIDERS, CALENDAR_PROVIDERS, CHART_PROVIDERS, 
                                        APP_ROUTER_PROVIDERS, OptionsService, ExampleItemService, NS_ROUTER_PROVIDERS, RouterOutletMap], 
                                    { startPageActionBarHidden: false });
// << using-global-directives