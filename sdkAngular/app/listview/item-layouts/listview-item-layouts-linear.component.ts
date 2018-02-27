// >> angular-listview-item-layouts-linear-component
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { ListViewLinearLayout } from "nativescript-ui-listview";
import * as Application from "application";
import * as Timer  from "timer";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-layouts-linear",
    providers: [DataItemService],
    templateUrl: "listview-item-layouts-linear.component.html",
    styleUrls: ["listview-item-layouts-linear.component.css"]
})
export class ListViewItemLayoutsLinearComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _layout: ListViewLinearLayout;

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
// << angular-listview-item-layouts-linear-component
