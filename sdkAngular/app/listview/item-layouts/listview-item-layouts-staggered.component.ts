// >> angular-listview-item-layouts-staggered-component
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-layouts-staggered",
    providers: [DataItemService],
    templateUrl: "listview-item-layouts-staggered.component.html",
    styleUrls: ["listview-item-layouts-staggered.component.css"]
})
export class ListViewItemLayoutsStaggeredComponent implements OnInit {
    private _staggeredItems: ObservableArray<DataItem>;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private _dataItemService: DataItemService) {
    }

    ngOnInit() {
        this._staggeredItems = new ObservableArray<DataItem>(this._dataItemService.getStaggeredItems());
        this._changeDetectionRef.detectChanges();
    }

    public get staggeredItems(): ObservableArray<DataItem> {
        return this._staggeredItems;
    }
}
// << angular-listview-item-layouts-staggered-component