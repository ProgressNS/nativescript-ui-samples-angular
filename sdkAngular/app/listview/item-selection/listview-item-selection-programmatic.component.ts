// >> angular-listview-item-selection-programmatic-component
import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { RadListViewComponent } from "nativescript-ui-listview/angular";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-selection-programmatic",
    providers: [DataItemService],
    templateUrl: "listview-item-selection-programmatic.component.html",
    styleUrls: ["listview-item-selection-programmatic.component.css"]
})
export class ListViewItemSelectionProgrammaticComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _txtDeselectItemIndex: string;
    private _txtSelectItemIndex: string;

    constructor(private _dataItemService: DataItemService) {
    }

    @ViewChild('myRadListView') listView: RadListViewComponent;

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

    public onSelectItemAtTap() {
        this.listView.listView.selectItemAt(Number(this.txtSelectItemIndex));
    }

    public onDeselectItemAtTap() {
        this.listView.listView.deselectItemAt(Number(this.txtDeselectItemIndex));
    }

    public onSelectAllTap() {
        this.listView.listView.selectAll();
    }

    public onDeselectAllTap() {
        this.listView.listView.deselectAll();
    }
}
// << angular-listview-item-selection-programmatic-component
