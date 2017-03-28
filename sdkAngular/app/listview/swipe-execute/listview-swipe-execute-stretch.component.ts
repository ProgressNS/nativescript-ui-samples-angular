// >> angular-listview-swipe-execute-stretch-component
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView }  from "nativescript-telerik-ui-pro/listview";
import { View } from "tns-core-modules/ui/core/view";
import * as frameModule from "tns-core-modules/ui/frame";
import * as utilsModule from "tns-core-modules/utils/utils";

@Component({
    moduleId: module.id,
    selector: "tk-listview-swipe-execute-stretch",
    providers: [DataItemService],
    templateUrl: "listview-swipe-execute-stretch.component.html",
    styleUrls: ["listview-swipe-execute-stretch.component.css"]
})
export class ListviewSwipeExecuteStretchComponent implements OnInit {
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

    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var listView = frameModule.topmost().currentPage.getViewById("listView") as View;

        swipeLimits.threshold = listView.getMeasuredWidth();
        swipeLimits.left = listView.getMeasuredWidth();
        swipeLimits.right = listView.getMeasuredWidth();
    }

    public onItemClick(args: ListViewEventData) {
        var listView = <RadListView>frameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
        console.log("Item click: " + args.itemIndex);
    }

    public onLeftSwipeClick(args) {
        var listView = <RadListView>frameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        var listView = <RadListView>frameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
    }

    public onCellSwiping(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x >= 0) {
            currentView = currentItemView.getViewById("mark-view");
            var dimensions = View.measureChild(
                currentView.parent,
                currentView,
                utilsModule.layout.makeMeasureSpec(args.data.x, utilsModule.layout.EXACTLY),
                utilsModule.layout.makeMeasureSpec(currentView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
            View.layoutChild(currentView.parent, currentView, 0, 0, dimensions.measuredWidth, dimensions.measuredHeight);
        } else {
            currentView = currentItemView.getViewById("delete-view");
            var dimensions = View.measureChild(
                currentView.parent,
                currentView,
                utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
                utilsModule.layout.makeMeasureSpec(currentView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
            View.layoutChild(currentView.parent, currentView, currentItemView.getMeasuredWidth() - dimensions.measuredWidth, 0, currentItemView.getMeasuredWidth(), dimensions.measuredHeight);
        }

        if (args.data.x > 200) {
            console.log("Notify perform left action");
        } else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    }

    public onSwipeCellFinished(args: ListViewEventData) {
        if (args.data.x < 0) {
            var currentItemView = args.object;
            var deleteView = currentItemView.getViewById("delete-view");
            var dimensions = View.measureChild(
                deleteView.parent,
                deleteView,
                utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
                utilsModule.layout.makeMeasureSpec(deleteView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
            View.layoutChild(deleteView.parent, deleteView, currentItemView.getMeasuredWidth(), 0, currentItemView.getMeasuredWidth(), dimensions.measuredHeight);
        }

        if (args.data.x > 200) {
            console.log("Perform left action");
        } else if (args.data.x < -200) {
            console.log("Perform right action");
        }
    }
}
// << angular-listview-swipe-execute-stretch-component