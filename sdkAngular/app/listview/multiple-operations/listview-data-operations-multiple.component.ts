// >> listview-angular-multiple-operations-code
import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-data-operations-multiple",
    providers: [DataItemService],
    templateUrl: "listview-data-operations-multiple.component.html",
    styleUrls: ["listview-data-operations-multiple.component.css"]
})
export class ListViewDataOperationsMultipleComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _isEnabled: boolean;
    private _isGroupingEnabled: boolean;
    private _isFilteringEnabled: boolean;
    private _isSortingEnabled: boolean;
    private _myGroupingFunc: (item: any) => any;
    private _mySortingFunc: (item: any, otherItem: any) => number;
    private _myFilteringFunc: (item: any) => any;

    @ViewChild("myListView") myListViewComponent: RadListViewComponent;

    constructor(private _dataItemService: DataItemService) {
        this.myGroupingFunc = (item: DataItem) => {
            return item.category;
        };
        this.mySortingFunc = (item: DataItem, otherItem: DataItem) => {
            var res = item.id < otherItem.id ? -1 : item.id > otherItem.id ? 1 : 0;
            return res;
        };
        this.myFilteringFunc = (item: DataItem) => {
            return item.name.includes("Special Item");
        };
        this.isFilteringEnabled = true;
        this.isSortingEnabled = true;
        this.isGroupingEnabled = true;
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get isGroupingEnabled() {
        return this._isGroupingEnabled;
    }

    set isGroupingEnabled(value: boolean) {
        this._isGroupingEnabled = value;
    }

    get isFilteringEnabled() {
        return this._isFilteringEnabled;
    }

    set isFilteringEnabled(value: boolean) {
        this._isFilteringEnabled = value;
    }

    get isSortingEnabled() {
        return this._isSortingEnabled;
    }

    set isSortingEnabled(value: boolean) {
        this._isSortingEnabled = value;
    }

    get myFilteringFunc(): (item: any) => any {
        return this._myFilteringFunc;
    }

    set myFilteringFunc(value: (item: any) => any) {
        this._myFilteringFunc = value;
    }

    get myGroupingFunc(): (item: any) => any {
        return this._myGroupingFunc;
    }

    set myGroupingFunc(value: (item: any) => any) {
        this._myGroupingFunc = value;
    }

    get mySortingFunc(): (item: any, otherItem: any) => number {
        return this._mySortingFunc;
    }

    set mySortingFunc(value: (item: any, otherItem: any) => number) {
        this._mySortingFunc = value;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataOperationsItems());
    }

    public toggleFilter() {
        var listView = this.myListViewComponent.listView;
        if (!listView.filteringFunction) {
            listView.filteringFunction = this.myFilteringFunc;
            this.isFilteringEnabled = true;
        } else {
            listView.filteringFunction = undefined;
            this.isFilteringEnabled = false;
        }
    }

    public toggleSorting() {
        var listView = this.myListViewComponent.listView;
        if (!listView.sortingFunction) {
            listView.sortingFunction = this.mySortingFunc;
            this.isSortingEnabled = true;
        } else {
            listView.sortingFunction = undefined;
            this.isSortingEnabled = false;
        }
    }

    public toggleGrouping() {
        var listView = this.myListViewComponent.listView;
        if (!listView.groupingFunction) {
            listView.groupingFunction = this.myGroupingFunc;
            this.isGroupingEnabled = true;
        } else {
            listView.groupingFunction = undefined;
            this.isGroupingEnabled = false;
        }
    }
}
// << listview-angular-multiple-operations-code