import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { ListViewLinearLayout, ListViewGridLayout, ListViewStaggeredLayout } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { ios as isIOS } from "application";
import * as Application from "application";
import * as Timer from "timer";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-layouts-runtime",
    providers: [DataItemService],
    templateUrl: "listview-item-layouts-runtime.component.html",
    styleUrls: ["listview-item-layouts-runtime.component.css"]
})
export class ListViewItemLayoutsRuntimeComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _layout: ListViewLinearLayout;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private _dataItemService: DataItemService) {
    }

    @ViewChild("myListView") listViewComponent: RadListViewComponent;

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>(this._dataItemService.getListItemsFromJson());
        this._changeDetectionRef.detectChanges();
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    public changeToLinear(args) {
        var layout = new ListViewLinearLayout()
        this.listViewComponent.listView.listViewLayout = layout;
    }

    public changeToGrid(args) {
        var layout = new ListViewGridLayout()
        if (isIOS) {
            layout.itemHeight = 200;
        }

        layout.spanCount = 2;
        this.listViewComponent.listView.listViewLayout = layout;
    }

    public changeToStaggered(args) {
        var layout = new ListViewStaggeredLayout()
        layout.spanCount = 3;
        this.listViewComponent.listView.listViewLayout = layout;
    }
}