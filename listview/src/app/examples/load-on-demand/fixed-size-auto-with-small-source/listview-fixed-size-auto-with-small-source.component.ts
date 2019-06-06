import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../../dataItem";
import { ListViewLinearLayout, ListViewEventData, RadListView, LoadOnDemandListViewEventData, ListViewLoadOnDemandMode, ListViewScrollDirection } from "nativescript-ui-listview";
import { android as androidApplication } from "tns-core-modules/application";
import { setTimeout } from "tns-core-modules/timer";
import { RadListViewComponent } from "nativescript-ui-listview/angular";

const serverPeopleCollection = require("../../../examples/people.json");

@Component({
    moduleId: module.id,
    selector: "tk-listview-fixed-size-auto-with-small-source",
    templateUrl: "listview-fixed-size-auto-with-small-source.component.html",
    styleUrls: ["listview-fixed-size-auto-with-small-source.component.css"]
})

export class ListViewFixedSizeAutoWithSmallSourceComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _sourceDataItems: ObservableArray<DataItem>;
    private layout: ListViewLinearLayout;
    private _itemsLoading: boolean;
    private _allItems: Array<{name: string, title: string, text: string, image: string}>;

    constructor() {
        this._allItems = serverPeopleCollection.people.slice();
    }

    @ViewChild("myListView", { read: RadListViewComponent, static: true }) myListViewComponent: RadListViewComponent;

    ngOnInit() {
        this.layout = new ListViewLinearLayout();
        this.layout.scrollDirection = ListViewScrollDirection.Vertical;
        this._sourceDataItems = new ObservableArray<DataItem>();
        this.initSourceDataItems(1);
        this._dataItems = new ObservableArray<DataItem>();
        this.addMoreItemsFromSource(1);
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    public onLoadMoreDataRequested(args: LoadOnDemandListViewEventData) {
        const that = new WeakRef(this);
        const listView: RadListView = args.object;
        if (!this._itemsLoading) {
            if (this._sourceDataItems.length !== 0) {
                console.log("Load More Data Requested WILL LOAD");

                // Set flag to make sure that items are being loaded in the correct order.
                // This is necessary due to the asyc nature of getting and adding new items
                // to the 'items' property of the RadListView that may be caused by remote server API lag.
                this._itemsLoading = true;

                setTimeout(function () {
                    let thatInstance = that.get();
                    thatInstance.addMoreItemsFromSource(1);

                    // Reset the flag to allow next calls of 'loadMoreDataRequested' to load more items
                    thatInstance._itemsLoading = false;

                    listView.notifyLoadOnDemandFinished();
                }, 1500);
            } else {
                console.log("Load More Data Requested CANNOT LOAD");

                args.returnValue = false;
                listView.notifyLoadOnDemandFinished(true);
            }
        }
    }

    public onPullToRefreshInitiated(args: ListViewEventData) {
        console.log("Pull To Refresh Initiated");
        const listView = args.object;
        const that = new WeakRef(this);
        if (this._allItems.length !== 0) {

            // Add 1 more item to the '_sourceDataItems',
            // Simulating a scenario where the 'backend' has been updated with 1 more item that could be loaded by 'load on demand'
            this.addItemsToSourceDataItems(1);

            setTimeout(function () {
                let thisInstance = that.get();
                let numberOfItemsToAdd = 1;
                for (let i = 0; i < numberOfItemsToAdd; i++) {
                    if (thisInstance._allItems.length !== 0) {
                        thisInstance._dataItems.splice(0, 0, thisInstance.getNextItemFromServer());
                    }
                }
                listView.notifyPullToRefreshFinished(thisInstance.isLoadOnDemandModeNeeded());
            }, 1000);
        } else {
            args.returnValue = false;
            listView.notifyPullToRefreshFinished(this.isLoadOnDemandModeNeeded());
        }
    }

    private isLoadOnDemandModeNeeded(): boolean {
        if (this._allItems.length !== 0) {
            return true;
        }

        return false;
    }

    private initSourceDataItems(size: number) {
        this.addItemsToSourceDataItems(size);
    }

    private addItemsToSourceDataItems(size: number) {
        for (let i = 0; i < size; i++) {
            this._sourceDataItems.push(this.getNextItemFromServer());
        }
    }

    private addMoreItemsFromSource(chunkSize: number) {
        let newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    }

    private getNextItemFromServer() {
        let item = this._allItems.splice(0, 1)[0];
        let imagePath: string;
        if (androidApplication) {
            imagePath = item.image.toLowerCase();
        }
        else {
            imagePath = item.image;
        }

        return new DataItem(this._sourceDataItems.length, item.name, "This is item description", item.title, item.text, imagePath);
    }

    public onChangeAuto() {
        this.myListViewComponent.listView.loadOnDemandMode = ListViewLoadOnDemandMode.Auto;
    }

    public onChangeNone() {
        this.myListViewComponent.listView.loadOnDemandMode = ListViewLoadOnDemandMode.None;
    }

    public onChangeManual() {
        this.myListViewComponent.listView.loadOnDemandMode = ListViewLoadOnDemandMode.Manual;
    }
}
