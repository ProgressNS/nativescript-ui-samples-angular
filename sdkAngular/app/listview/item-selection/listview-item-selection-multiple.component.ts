import {Component, OnInit} from "@angular/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "listview-item-selection-multiple",
    providers: [DataItemService],
    templateUrl: "listview-item-selection-multiple.component.html",
    styleUrls: ["listview-item-selection-multiple.component.css"]
})
// >> angular-listview-item-selection-multiple.component
export class ListviewItemSelectionMultipleComponent implements OnInit {
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
// << angular-listview-item-selection-multiple.component