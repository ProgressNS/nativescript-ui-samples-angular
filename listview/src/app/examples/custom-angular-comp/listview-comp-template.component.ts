import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { ListViewLinearLayout } from "nativescript-ui-listview";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-comp-template",
    providers: [DataItemService],
    templateUrl: "listview-comp-template.component.html",
    styleUrls: ["listview-comp-template.component.css"]
})
export class ListviewCompTemplateComponent implements OnInit {
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
