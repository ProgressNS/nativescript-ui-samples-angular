import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-data-operations-filtering",
    providers: [DataItemService],
    templateUrl: "listview-data-operations-filtering.component.html",
    styleUrls: ["listview-data-operations-filtering.component.css"]
})
export class ListViewDataOperationsFilteringComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _isEnabled: boolean;
    private _myFilteringFunc: (item: any) => any;

    @ViewChild("myListView") myListViewComponent: RadListViewComponent;

    constructor(private _dataItemService: DataItemService) {
        // >> listview-data-operations-filtering-angular
        this.myFilteringFunc = (item: DataItem) => {
            return item.name.includes("Special Item");
        };
        // << listview-data-operations-filtering-angular
        this.isEnabled = true;
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get isEnabled() {
        return this._isEnabled;
    }

    set isEnabled(value: boolean) {
        this._isEnabled = value;
    }

    get myFilteringFunc(): (item: any) => any {
        return this._myFilteringFunc;
    }

    set myFilteringFunc(value: (item: any) => any) {
        this._myFilteringFunc = value;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataOperationsItems());
    }

    public toggleFilter() {
        let listView = this.myListViewComponent.listView;
        if (!listView.filteringFunction) {
            listView.filteringFunction = this.myFilteringFunc;
            this.isEnabled = true;
        } else {
            listView.filteringFunction = undefined;
            this.isEnabled = false;
        }
    }
}