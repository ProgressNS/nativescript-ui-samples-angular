import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import * as frameModule from "tns-core-modules/ui/frame";
import { View } from "tns-core-modules/ui/core/view";

@Component({
    moduleId: module.id,
    selector: "tk-listview-swipe-execute",
    providers: [DataItemService],
    templateUrl: "listview-swipe-execute.component.html",
    styleUrls: ["listview-swipe-execute.component.css"]
})
// >> angular-listview-item-swipe-component
export class ListViewSwipeExecuteComponent implements OnInit {
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
        var listView = frameModule.topmost().currentPage.getViewById("listView") as View;

        swipeLimits.threshold = listView.getMeasuredWidth();
        swipeLimits.left = listView.getMeasuredWidth();
        swipeLimits.right = listView.getMeasuredWidth();
    }

    public onSwipeCellFinished(args: listViewModule.ListViewEventData) {
        if (args.data.x > 200) {
            console.log("Perform left action");
        } else if (args.data.x < -200) {
            console.log("Perform right action");
        }
    }

    public onItemClick(args: listViewModule.ListViewEventData) {
        var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
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