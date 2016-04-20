// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./listview/item-reorder/listview-item-reorder.component";
import listViewModule = require('nativescript-telerik-ui-pro/listview');
import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui-pro/listview/angular/listview-directives'

nativeScriptBootstrap(AppComponent, LISTVIEW_PROVIDERS);