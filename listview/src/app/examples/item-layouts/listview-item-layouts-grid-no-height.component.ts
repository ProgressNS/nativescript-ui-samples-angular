import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-layouts-grid-no-height",
    providers: [DataItemService],
    templateUrl: "listview-item-layouts-grid-no-height.component.html",
    styleUrls: ["listview-item-layouts-grid-no-height.component.css"]
})
export class ListViewItemLayoutsGridNoHeightComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private _dataItemService: DataItemService) {
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>(this._dataItemService.getIdenticalDataItems(100));
        this._changeDetectionRef.detectChanges();
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }
}
