// >> angular-listview-observable-array-component
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData } from "nativescript-ui-listview";

@Component({
    moduleId: module.id,
    selector: "tk-listview-observable-array",
    providers: [DataItemService],
    templateUrl: "listview-observable-array.component.html",
    styleUrls: ["listview-observable-array.component.css"]
})
export class ListViewObservableArrayComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>();
    }

    public onAddItemClick() {
        var id = Math.round(Math.random() * 100);
        this._dataItems.push(new DataItem(id, "This is a new item: " + id, "This is the new item's description."));
    }

    public onResetClick() {
        while (this._dataItems.length) {
            this._dataItems.pop();
        }
    }

    public onUpdateItemClick() {
        for (var index = 0; index < this._dataItems.length; index++) {
            this._dataItems.getItem(index).id = Math.random() * 100;
            this._dataItems.getItem(index).name = "This is an updated item";
            this._dataItems.getItem(index).description = "This is the updated item's description.";
        }
    }

    public onRemoveItemClick() {
        this._dataItems.splice(this._dataItems.length - 1, 1);
    }
}
// << angular-listview-observable-array-component
