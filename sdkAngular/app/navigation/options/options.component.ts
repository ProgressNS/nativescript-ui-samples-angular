import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { Router, RouteParams } from "@angular/router-deprecated";
import * as frameModule from "ui/frame";
import { Page } from "ui/page";
import { RadListView } from "nativescript-telerik-ui-pro/listview";
import { OptionsService } from "../../navigation/options/options.service";


@Component({
    moduleId: module.id,
    selector: "options",
    templateUrl: "options.component.html",
    styleUrls: ["options.component.css"]
})
export class OptionsComponent implements OnInit {
    private _dataItems: ObservableArray<string>;
    private _listView: RadListView;
    
    constructor( @Inject(Page) private _page, private _router: Router, private _routeParams: RouteParams, private _optionsService: OptionsService) {
        this._page.on("loaded", this.onLoaded, this);
    }

    ngOnInit() {
        var items = this._routeParams.get('items');
        var splitItems = items.toString().split(',');
        this._dataItems = new ObservableArray<string>(splitItems);
    }
    
    public onLoaded() {
        this._listView = <RadListView>this._page.getViewById("optionsListView");
        var index = this._routeParams.get('selectedIndex');
        this._listView.selectItemAt(parseInt(index));
    }

    get dataItems(): ObservableArray<string> {
        return this._dataItems;
    }
    

    public onItemTap(args) {
        var selectedItems = this._listView.getSelectedItems() as Array<string>;
        this._optionsService.paramValue = selectedItems[0];
        frameModule.topmost().goBack();
    }
}