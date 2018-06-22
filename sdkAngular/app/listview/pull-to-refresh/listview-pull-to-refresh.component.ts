import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { ListViewEventData } from "nativescript-ui-listview";
import * as Application from "tns-core-modules/application";
import * as timerModule  from "tns-core-modules/timer";
var posts = require("../../listview/posts.json")

@Component({
    moduleId: module.id,
    selector: "tk-listview-pull-to-refresh",
    templateUrl: "listview-pull-to-refresh.component.html",
    styleUrls: ["listview-pull-to-refresh.component.css"]
})
// >> angular-listview-pull-to-refresh-code
export class ListViewPullToRefreshComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _numberOfAddedItems;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    public onPullToRefreshInitiated(args: ListViewEventData) {
        var that = new WeakRef(this);
        timerModule.setTimeout(function () {
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    break;
                }
                var imageUri = Application.android ? posts.images[i].toLowerCase() : posts.images[i];

                that.get()._dataItems.splice(0, 0, new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    }

    private initDataItems() {
        this._dataItems = new ObservableArray<DataItem>();
        this._numberOfAddedItems = 0;
        for (var i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (Application.android) {
                this._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    }
}
// << angular-listview-pull-to-refresh-code