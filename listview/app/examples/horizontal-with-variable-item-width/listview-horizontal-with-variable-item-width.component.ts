import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-horizontal-with-variable-item-width",
    providers: [DataItemService],
    templateUrl: "listview-horizontal-with-variable-item-width.component.html",
    styleUrls: ["listview-horizontal-with-variable-item-width.component.css"]
})
export class ListviewHorizontalWithVariableItemWidthComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getVariableWidthItems());
    }
}