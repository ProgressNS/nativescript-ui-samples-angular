import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { View } from "ui/view";
import { topmost } from "ui/frame";
import { RadListView, ListViewEventData } from "nativescript-telerik-ui-pro/listview";

import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

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

    public onCellSwiping(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;

        if (args.data.x > 200) {
            console.log("Notify perform left action");
        } else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var listView = topmost().currentPage.getViewById("listView") as View;

        swipeLimits.threshold = listView.getMeasuredWidth();
        swipeLimits.left = listView.getMeasuredWidth();
        swipeLimits.right = listView.getMeasuredWidth();
    }

    public onSwipeCellFinished(args: ListViewEventData) {
        if (args.data.x > 200) {
            console.log("Perform left action");
        } else if (args.data.x < -200) {
            console.log("Perform right action");
        }
    }

    public onItemClick(args: ListViewEventData) {
        var listView = <RadListView>topmost().currentPage.getViewById("listView");
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
