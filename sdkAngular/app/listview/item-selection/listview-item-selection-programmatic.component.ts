import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import listViewModule = require("nativescript-telerik-ui-pro/listview/angular");
import listViewAnularModule = require("nativescript-telerik-ui-pro/listview/angular");

@Component({
    moduleId: module.id,
    selector: "listview-item-selection-programmatic",
    providers: [DataItemService],
    templateUrl: "listview-item-selection-programmatic.component.html",
    styleUrls: ["listview-item-selection-programmatic.component.css"]
})
// >> angular-listview-item-selection-programmatic.component
export class ListviewItemSelectionProgrammaticComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _txtDeselectItemIndex: string;
    private _txtSelectItemIndex: string;

    constructor(private _dataItemService: DataItemService) {
    }

    @ViewChild('myRadListView') listView: listViewAnularModule.RadListViewComponent;

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get txtDeselectItemIndex(): string {
        return this._txtDeselectItemIndex;
    }

    set txtDeselectItemIndex(value: string) {
        this._txtDeselectItemIndex = value;
    }

    get txtSelectItemIndex(): string {
        return this._txtSelectItemIndex;
    }

    set txtSelectItemIndex(value: string) {
        this._txtSelectItemIndex = value;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getNameEmailDataItems());
    }

    public onSelectItemAtTap(args) {
        this.listView.listView.selectItemAt(Number(this.txtSelectItemIndex));
    }

    public onDeselectItemAtTap(args) {
        this.listView.listView.deselectItemAt(Number(this.txtDeselectItemIndex));
    }

    public onSelectAllTap(args) {
        this.listView.listView.selectAll();
    }

    public onDeselectAllTap(args) {
        this.listView.listView.deselectAll();
    }
}
// << angular-listview-item-selection-programmatic.component