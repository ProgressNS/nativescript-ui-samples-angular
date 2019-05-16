import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";

@Component({
    moduleId: module.id,
    selector: "tk-listview-with-big-data",
    templateUrl: "listview-with-big-data.component.html",
    styleUrls: ["listview-with-big-data.component.css"]
})
export class ListViewWithBigDataComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor() {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        let tempArray = [];
        for (let i = 0; i < 10000; i++) {
            tempArray.push({name: "Item " + i, description: "Description for item " + i });
        }

        this._dataItems = new ObservableArray(tempArray);
    }
}