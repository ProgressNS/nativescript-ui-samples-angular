import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Color } from "tns-core-modules/color";
import { Label } from "tns-core-modules/ui/label";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData } from 'nativescript-ui-listview';

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-loading",
    providers: [DataItemService],
    templateUrl: "listview-item-loading.component.html",
    styleUrls: ["listview-item-loading.component.css"]
})

export class ListViewItemLoadingComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private _dataItemService: DataItemService) {
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>(this._dataItemService.getDataItems());
        this._changeDetectionRef.detectChanges();
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }
    
    // >> angular-listview-item-loading-component
    public onItemLoading(args: ListViewEventData) {
        if (args.index % 2 == 0) {
            args.view.backgroundColor = new Color("#b3ecff");
            args.view.getViewById<Label>("nameLabel").fontSize = 24;
            args.view.getViewById<Label>("descLabel").fontSize = 18;
        }
        else {
            args.view.backgroundColor =  new Color("#ccf2ff");
            args.view.getViewById<Label>("nameLabel").fontSize = 20;
            args.view.getViewById<Label>("descLabel").fontSize = 14;
        }
    }
    // << angular-listview-item-loading-component
}