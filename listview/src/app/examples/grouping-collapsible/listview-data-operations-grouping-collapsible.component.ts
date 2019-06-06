import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-data-operations-grouping-collapsible",
    providers: [DataItemService],
    templateUrl: "listview-data-operations-grouping-collapsible.component.html",
    styleUrls: ["listview-data-operations-grouping-collapsible.component.css"]
})
export class ListviewDataOperationsGroupingCollapsibleComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _myGroupingFunc: (item: any) => any;

    constructor(private _dataItemService: DataItemService) {
        this.myGroupingFunc = (item: DataItem) => {
            return item.category;
        };
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataOperationsItems());
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get myGroupingFunc(): (item: any) => any {
        return this._myGroupingFunc;
    }

    set myGroupingFunc(value: (item: any) => any) {
        this._myGroupingFunc = value;
    }
}