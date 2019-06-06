import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../../dataItem";
import { ListViewEventData, PullToRefreshStyle } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { android as androidApplication } from "tns-core-modules/application";
import { setTimeout } from "tns-core-modules/timer";
import { Color } from "tns-core-modules/color";

const posts = require("../../../examples/posts.json");

@Component({
    moduleId: module.id,
    selector: "tk-listview-pull-to-refresh-customize.component",
    templateUrl: "listview-pull-to-refresh-customize.component.html",
    styleUrls: ["listview-pull-to-refresh-customize.component.css"]
})
export class ListViewPullToRefreshCustomizeComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _numberOfAddedItems;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild("listView", { read: RadListViewComponent, static: true }) myListViewComponent: RadListViewComponent;

    ngOnInit() {
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        if (this.myListViewComponent && this.myListViewComponent.listView) {
            let style = new PullToRefreshStyle();
            style.indicatorColor = new Color("red");
            style.indicatorBackgroundColor = new Color("blue");
            this.myListViewComponent.listView.pullToRefreshStyle = style;
        }
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    public onPullToRefreshInitiated(args: ListViewEventData) {
        const that = new WeakRef(this);
        setTimeout(function () {
            const initialNumberOfItems = that.get()._numberOfAddedItems;
            for (let i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    break;
                }
                const imageUri = androidApplication ? posts.images[i].toLowerCase() : posts.images[i];

                that.get()._dataItems.splice(0, 0, new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }
            const listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    }

    private initDataItems() {
        this._dataItems = new ObservableArray<DataItem>();
        this._numberOfAddedItems = 0;
        for (let i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (androidApplication) {
                this._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    }
}