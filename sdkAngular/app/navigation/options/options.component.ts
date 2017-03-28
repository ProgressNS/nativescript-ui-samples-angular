import { Component, OnInit, Injectable } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ActivatedRoute } from '@angular/router';
import * as frameModule from "tns-core-modules/ui/frame";
import { Page } from "tns-core-modules/ui/page";
import { RadListView } from "nativescript-telerik-ui-pro/listview";
import { OptionsService } from "../../navigation/options/options.service";

@Component({
    moduleId: module.id,
    selector: "tk-options",
    templateUrl: "options.component.html",
    styleUrls: ["options.component.css"]
})
@Injectable()
export class OptionsComponent implements OnInit {
    private _dataItems: ObservableArray<string>;
    private _listView: RadListView;
    private _sub: any;
    private _selectedIndex: number = -1;

    constructor(private _page: Page, private _route: ActivatedRoute, private _optionsService: OptionsService) {
        this._page.on("loaded", this.onLoaded, this);
        this._dataItems = new ObservableArray<string>();
    }

    ngOnInit() {
        this._sub = this._route.queryParams.subscribe(
             (params: any) => 
             {
                 this._listView = <RadListView>this._page.getViewById("optionsListView");
                var items = params['items'];
                this._selectedIndex = +params['selectedIndex'];
                if (items) {
                    var splitItems = items.toString().split(',');
                    this._dataItems = new ObservableArray<string>(splitItems);
                    this.tryUpdateListViewSelection();
                }
             }
         );
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

    public onLoaded() {
        this._listView = <RadListView>this._page.getViewById("optionsListView");
        this.tryUpdateListViewSelection();
    }

    private tryUpdateListViewSelection() {
        if (this._selectedIndex >= 0 && this._listView) {
            this._listView.selectItemAt(this._selectedIndex);
        }
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