// >> angular-listview-item-reorder-handle-component
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData } from "nativescript-ui-listview";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-reorder-handle",
    providers: [DataItemService],
    templateUrl: "listview-item-reorder-handle.component.html",
    styleUrls: ["listview-item-reorder-handle.component.css"]
})
export class ListViewItemReorderHandleComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPersonDataItems());
    }

    public onItemReordered(args: ListViewEventData) {
        console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
    }
}
// << angular-listview-item-reorder-handle-component