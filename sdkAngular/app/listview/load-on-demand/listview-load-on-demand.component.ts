import {Component, OnInit} from "angular2/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import * as Application from "application";
import * as Timer  from "timer";
var posts = require("../../listview/posts.json")

@Component({
    selector: "listview-load-on-demand",
    templateUrl: "listview/load-on-demand/listview-load-on-demand.component.html",
    styleUrls: ["listview/load-on-demand/listview-load-on-demand.component.css"]
})
// >> angular-listview-load-on-demand-code
export class AppComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _numberOfAddedItems;

    constructor() {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this.initDataItems();
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