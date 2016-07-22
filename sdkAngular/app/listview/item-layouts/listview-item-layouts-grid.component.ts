import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import * as Application from "application";
import * as Timer  from "timer";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "listview-item-layouts-grid",
    providers: [DataItemService],
    templateUrl: "listview-item-layouts-grid.component.html",
    styleUrls: ["listview-item-layouts-grid.component.css"]
})
// >> angular-listview-item-layouts-grid-code
export class ListViewItemLayoutsGridComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _numberOfAddedItems;
    private _layout: listViewModule.ListViewLinearLayout;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private _dataItemService: DataItemService) {
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>(this._dataItemService.getListItemsFromJson());
        this._changeDetectionRef.detectChanges();
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    public get layout(): listViewModule.ListViewLinearLayout {
        return this._layout;
    }

    public set layout(value: listViewModule.ListViewLinearLayout) {
        this._layout = value;
    }
}
// << angular-listview-item-layouts-grid-code