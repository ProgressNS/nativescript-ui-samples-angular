import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../../dataItem";
import { DataItemService } from "../../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-big-footer",
    providers: [DataItemService],
    templateUrl: "listview-big-footer.component.html",
    styleUrls: ["listview-big-footer.component.css"]
})
export class ListViewBigFooterComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _headerTitle: string;
    private _footerTitle: string;

    constructor(private _dataItemService: DataItemService) { }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(5));
        this.headerTitle = "This is list header with height 50";
        this.footerTitle = "This is list footer with height 100";
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