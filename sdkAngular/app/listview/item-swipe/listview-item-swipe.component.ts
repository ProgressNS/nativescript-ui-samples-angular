import {Component, OnInit} from "@angular/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import * as FrameModule from "ui/frame";
var posts = require("../../listview/posts.json")

@Component({
    moduleId: module.id,
    selector: "listview-item-swipe",
    providers: [DataItemService],
    templateUrl: "listview-item-swipe.component.html",
    styleUrls: ["listview-item-swipe.component.css"]
})
// >> angular-listview-item-swipe-component
export class ListViewItemSwipeComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _selectedItems: string;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPostDataItems());
    }

    public onCellSwiping(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;

        if (args.data.x > 200) {
            console.log("Notify perform left action");
        } else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    }

    public onSwipeCellStarted(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var listview = FrameModule.topmost().currentPage.getViewById("listView");

        swipeLimits.threshold = listview.getMeasuredWidth();
        swipeLimits.left = listview.getMeasuredWidth();
        swipeLimits.right = listview.getMeasuredWidth();
    }

    public onSwipeCellFinished(args: listViewModule.ListViewEventData) {
        if (args.data.x > 200) {
            console.log("Perform left action");
        } else if (args.data.x < -200) {
            console.log("Perform right action");
        }
    }

    public onItemClick(args: listViewModule.ListViewEventData) {
        var listView = <listViewModule.RadListView>FrameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
        console.log("Item click: " + args.itemIndex);
    }

    public onLeftSwipeClick(args) {
        console.log("Left swipe click");
    }

    public onRightSwipeClick(args) {
        console.log("Right swipe click");
    }
}
// << angular-listview-item-swipe-component