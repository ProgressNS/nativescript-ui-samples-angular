import {Component, OnInit} from "@angular/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";
import listViewModule = require("nativescript-telerik-ui-pro/listview");

@Component({
    moduleId: module.id,
    selector: "listview-item-reorder",
    providers: [DataItemService],
    templateUrl: "listview-item-reorder.component.html",
    styleUrls: ["listview-item-reorder.component.css"]
})
// >> angular-listview-reorder-component
export class ListViewItemReorderComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPersonDataItems());
    }

    public onItemReordered(args: listViewModule.ListViewEventData) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    }
}
// << angular-listview-reorder-component