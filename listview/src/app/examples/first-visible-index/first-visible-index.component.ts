import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { RadListViewComponent } from "nativescript-ui-listview/angular";

@Component({
    moduleId: module.id,
    selector: "tk-first-visible-index",
    providers: [DataItemService],
    templateUrl: "first-visible-index.component.html",
    styleUrls: ["first-visible-index.component.css"]
})
export class ListViewFirstVisibleIndexComponent implements OnInit, AfterViewInit {
    private _dataItems: ObservableArray<DataItem>;
    private _firstVisibleIndex: number;

    @ViewChild("myList", { static: false }) myListComp: RadListViewComponent;

    constructor(private _dataItemService: DataItemService) { }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(100));
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.updateFirstVisibleIndex();
        }, 100);
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get firstVisibleIndex(): number {
        return this._firstVisibleIndex;
    }

    set firstVisibleIndex(value: number) {
        this._firstVisibleIndex = value;
    }

    public getFirstVisiblePosition() {
        this.updateFirstVisibleIndex();
        console.log("First visible index:", this.firstVisibleIndex);
    }

    private updateFirstVisibleIndex() {
        this.firstVisibleIndex = this.myListComp.nativeElement.getFirstVisiblePosition();
    }
}