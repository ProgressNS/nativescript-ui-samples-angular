import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

enum SortingOrder {
    NSOrderedAscending = -1,
    NSOrderedSame = 0,
    NSOrderedDescending = 1
}

@Component({
    moduleId: module.id,
    selector: "tk-listview-data-operations-sorting",
    providers: [DataItemService],
    templateUrl: "listview-data-operations-sorting.component.html",
    styleUrls: ["listview-data-operations-sorting.component.css"]
})
export class ListViewDataOperationsSortingComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _isEnabled: boolean;
    private _mySortingFunc: (item: any, otherItem: any) => number;

    @ViewChild("myListView") myListViewComponent: RadListViewComponent;

    constructor(private _dataItemService: DataItemService) {
        // >> listview-data-operations-sorting-angular
        this.mySortingFunc = (item: DataItem, otherItem: DataItem) => {
            var res = item.id < otherItem.id ? SortingOrder.NSOrderedAscending : item.id > otherItem.id ? SortingOrder.NSOrderedDescending : SortingOrder.NSOrderedSame;
            return res;
        };
        // << listview-data-operations-sorting-angular
        this.isEnabled = true;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>(this._dataItemService.getDataOperationsItems());
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

    get mySortingFunc(): (item: any, otherItem: any) => number {
        return this._mySortingFunc;
    }

    set mySortingFunc(value: (item: any, otherItem: any) => number) {
        this._mySortingFunc = value;
    }

    public toggleSorting() {
        let listView = this.myListViewComponent.listView;
        if (!listView.sortingFunction) {
            listView.sortingFunction = this.mySortingFunc;
            this.isEnabled = true;
        } else {
            listView.sortingFunction = undefined;
            this.isEnabled = false;
        }
    }
}