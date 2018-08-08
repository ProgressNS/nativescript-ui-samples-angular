import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../../dataItem";
import { DataItemService } from "../../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-big-header",
    providers: [DataItemService],
    templateUrl: "listview-big-header.component.html",
    styleUrls: ["listview-big-header.component.css"]
})
export class ListViewBigHeaderComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _headerTitle: string;
    private _footerTitle: string;

    constructor(private _dataItemService: DataItemService) { }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(5));
        this.headerTitle = "This is list header with height 100";
        this.footerTitle = "This is list footer with height 50";
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get headerTitle(): string {
        return this._headerTitle;
    }

    set headerTitle(value: string) {
        this._headerTitle = value;
    }

    get footerTitle(): string {
        return this._footerTitle;
    }

    set footerTitle(value: string) {
        this._footerTitle = value;
    }
}