import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { Router, RouteParams } from "@angular/router-deprecated";
import * as frameModule from "ui/frame";
import { Page } from "ui/page";
import { RadListView } from "nativescript-telerik-ui-pro/listview";


@Component({
    moduleId: module.id,
    selector: "options",
    templateUrl: "options.component.html",
    styleUrls: ["options.component.css"]
})
export class OptionsComponent implements OnInit {
    private _dataItems: ObservableArray<string>;

    constructor( @Inject(Page) private _page, private _router: Router, private _routeParams: RouteParams) {

    }

    ngOnInit() {
        var listView: RadListView = <RadListView>this._page.getViewById("optionsListView");
        var index = this._routeParams.get('selectedIndex');
        var items = this._routeParams.get('items');
        var splitItems = items.toString().split(',');
        this._dataItems = new ObservableArray<string>(splitItems);
        //listView.selectItemAt(1);
    }

    get dataItems(): ObservableArray<string> {
        return this._dataItems;
    }

    public onItemTap(args) {
        var itemIndex = args.itemIndex;
        frameModule.topmost().goBack();
    }
}