// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";

//import {AppComponent} from "./listview/getting-started/listview-getting-started.component";
//import {AppComponent} from "./listview/header-footer/listview-header-footer.component";
//import {AppComponent} from "./listview/item-reorder/listview-item-reorder.component";
//import {AppComponent} from "./listview/item-selection/listview-item-selection.component";
//import {AppComponent} from "./listview/item-swipe/listview-item-swipe.component";
import {AppComponent} from "./listview/load-on-demand/listview-load-on-demand.component";

import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui-pro/listview/angular/listview-directives'


// TODO: This will be the starting point for the application main view (component)
nativeScriptBootstrap(AppComponent, LISTVIEW_PROVIDERS);