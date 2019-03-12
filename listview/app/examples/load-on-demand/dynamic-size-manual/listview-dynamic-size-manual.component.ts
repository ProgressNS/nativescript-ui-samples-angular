import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../../dataItem";
import { ListViewLinearLayout, RadListView, LoadOnDemandListViewEventData, ListViewScrollDirection } from "nativescript-ui-listview";
import { android as androidApplication } from "tns-core-modules/application";
import { setTimeout } from "tns-core-modules/timer";
const posts = require("../../../examples/posts.json");

@Component({
    moduleId: module.id,
    selector: "tk-listview-dynamic-size-manual",
    templateUrl: "listview-dynamic-size-manual.component.html",
    styleUrls: ["listview-dynamic-size-manual.component.css"]
})

export class ListViewDynamicSizeManualComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _sourceDataItems: ObservableArray<DataItem>;
    private layout: ListViewLinearLayout;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.layout = new ListViewLinearLayout();
        this.layout.scrollDirection = ListViewScrollDirection.Vertical;
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        this._dataItems = new ObservableArray<DataItem>();
        this.addMoreItemsFromSource(6);
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }
    public addMoreItemsFromSource(chunkSize: number) {
        let newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    }

    public onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
        const that = new WeakRef(this);
        const listView: RadListView = args.object;
        if (this._sourceDataItems.length > 0) {
            setTimeout(function () {
                that.get().addMoreItemsFromSource(2);
                listView.notifyLoadOnDemandFinished();
            }, 1500);
            args.returnValue = true;
        } else {
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
    }

    private initDataItems() {
        this._sourceDataItems = new ObservableArray<DataItem>();
        for (let i = 0; i < posts.names.length; i++) {
            if (androidApplication) {
                this._sourceDataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._sourceDataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    }
}
