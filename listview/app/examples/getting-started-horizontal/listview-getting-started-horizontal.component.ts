import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-getting-started-horizontal",
    providers: [DataItemService],
    templateUrl: "listview-getting-started-horizontal.component.html",
    styleUrls: ["listview-getting-started-horizontal.component.css"]
})
export class ListViewGettingStartedHorizontalComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
    }
}