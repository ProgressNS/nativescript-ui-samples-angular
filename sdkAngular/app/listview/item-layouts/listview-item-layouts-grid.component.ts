import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import * as Application from "application";
import * as Timer  from "timer";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-layouts-grid",
    providers: [DataItemService],
    templateUrl: "listview-item-layouts-grid.component.html",
    styleUrls: ["listview-item-layouts-grid.component.css"]
})
// >> angular-listview-item-layouts-grid-component
export class ListViewItemLayoutsGridComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private _dataItemService: DataItemService) {
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>(this._dataItemService.getListItemsFromJson());
        this._changeDetectionRef.detectChanges();
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }
}
// << angular-listview-item-layouts-grid-component
