import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import * as Application from "application";
import * as Timer  from "timer";
var posts = require("../../listview/posts.json")

@Component({
    moduleId: module.id,
    selector: "listview-load-on-demand",
    templateUrl: "listview-load-on-demand.component.html",
    styleUrls: ["listview-load-on-demand.component.css"]
})
// >> angular-listview-load-on-demand-code
export class ListViewLoadOnDemandComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _numberOfAddedItems;
    private _layout: listViewModule.ListViewLinearLayout;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.layout = new listViewModule.ListViewLinearLayout();
        this.layout.scrollDirection = "Vertical";
        this.layout.itemHeight = 120;
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
    }

    public get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    public get layout(): listViewModule.ListViewLinearLayout {
        return this._layout;
    }

    public set layout(value: listViewModule.ListViewLinearLayout) {
        this._layout = value;
    }

    public onLoadMoreItemsRequested(args: listViewModule.ListViewEventData) {
        var that = new WeakRef(this);
        Timer.setTimeout(function () {
            var listView: listViewModule.RadListView = args.object;
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    listView.loadOnDemandMode = listViewModule.ListViewLoadOnDemandMode[listViewModule.ListViewLoadOnDemandMode.None];
                    break;
                }

                var imageUri = Application.android ? posts.images[i].toLowerCase() : posts.images[i];
                that.get()._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }

            listView.notifyLoadOnDemandFinished();
        }, 1000);
        args.returnValue = true;
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
// << angular-listview-load-on-demand-code