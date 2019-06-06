import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../../dataItem";
import { DataItemService } from "../../dataItem.service";
import { RadListViewComponent } from "nativescript-ui-listview/angular";

@Component({
    moduleId: module.id,
    selector: "tk-listview-change-size-at-runtime",
    providers: [DataItemService],
    templateUrl: "listview-change-size-at-runtime.component.html",
    styleUrls: ["listview-change-size-at-runtime.component.css"]
})
export class ListviewChangeSizeAtRuntimeComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _headerTitle: string;
    private _footerTitle: string;
    private _isSecondVisible: boolean = false;
    private _isThirdVisible: boolean = false;

    constructor(private _dataItemService: DataItemService) { }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(30));
        this.footerTitle = "This is list footer";
        this.headerTitle = "This is list header";

        setTimeout(() => {
            this.isSecondVisible = true;
            if (this.listViewComponent) {
                this.listViewComponent.listView.updateHeaderFooter();
            }
        }, 2000);
    }

    @ViewChild("listView", { read: RadListViewComponent, static: true }) listViewComponent: RadListViewComponent;

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

    set isSecondVisible(value: boolean) {
        this._isSecondVisible = value;
    }

    get isSecondVisible(): boolean {
        return this._isSecondVisible;
    }

    set isThirdVisible(value: boolean) {
        this._isThirdVisible = value;
    }

    get isThirdVisible(): boolean {
        return this._isThirdVisible;
    }

    public tabUpdate() {
        this.isThirdVisible = true;
        this.listViewComponent.listView.updateHeaderFooter();
    }
}