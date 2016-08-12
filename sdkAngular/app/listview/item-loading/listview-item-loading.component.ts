import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "listview-item-loading",
    providers: [DataItemService],
    templateUrl: "listview-item-loading.component.html",
    styleUrls: ["listview-item-loading.component.css"]
})

export class ListviewItemLoadingComponent implements OnInit {
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
    public onItemLoading(args) {
        if (args.itemIndex % 2 == 0) {
            args.view.backgroundColor = "#b3ecff";
            args.view._subViews[0].fontSize = "24";
            args.view._subViews[1].fontSize = "18";
        }
        else {
            args.view.backgroundColor = "#ccf2ff";
            args.view._subViews[0].fontSize = "20";
            args.view._subViews[1].fontSize = "14";
        }
    }
    // << angular-listview-item-loading-component
}