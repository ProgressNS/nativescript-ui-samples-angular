// >> angular-listview-item-selection-multiple-component
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-selection-multiple",
    providers: [DataItemService],
    templateUrl: "listview-item-selection-multiple.component.html",
    styleUrls: ["listview-item-selection-multiple.component.css"]
})
export class ListViewItemSelectionMultipleComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getNameEmailDataItems());
    }
}
// << angular-listview-item-selection-multiple-component