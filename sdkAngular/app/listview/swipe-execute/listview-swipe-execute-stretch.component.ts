// >> angular-listview-swipe-execute-stretch-component
import {Component, OnInit} from "@angular/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";
import * as listViewModule from "nativescript-telerik-ui-pro/listview";
import * as viewModule from 'ui/core/view';
import * as FrameModule from "ui/frame";
import * as utilsModule from "utils/utils";

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

    public onSwipeCellStarted(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var listView = FrameModule.topmost().currentPage.getViewById("listView");

        swipeLimits.threshold = listView.getMeasuredWidth();
        swipeLimits.left = listView.getMeasuredWidth();
        swipeLimits.right = listView.getMeasuredWidth();
    }

    public onItemClick(args: listViewModule.ListViewEventData) {
        var listView = <listViewModule.RadListView>FrameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
        console.log("Item click: " + args.itemIndex);
    }

    public onLeftSwipeClick(args) {
        var listView = <listViewModule.RadListView>FrameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        var listView = <listViewModule.RadListView>FrameModule.topmost().currentPage.getViewById("listView");
        listView.notifySwipeToExecuteFinished();
    }

    public onCellSwiping(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x >= 0) {
            currentView = currentItemView.getViewById("mark-view");
            var dimensions = viewModule.View.measureChild(
                currentView.parent,
                currentView,
                utilsModule.layout.makeMeasureSpec(args.data.x, utilsModule.layout.EXACTLY),
                utilsModule.layout.makeMeasureSpec(currentView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
            viewModule.View.layoutChild(currentView.parent, currentView, 0, 0, dimensions.measuredWidth, dimensions.measuredHeight);
        } else {
            currentView = currentItemView.getViewById("delete-view");
            var dimensions = viewModule.View.measureChild(
                currentView.parent,
                currentView,
                utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
                utilsModule.layout.makeMeasureSpec(currentView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
            viewModule.View.layoutChild(currentView.parent, currentView, currentItemView.getMeasuredWidth() - dimensions.measuredWidth, 0, currentItemView.getMeasuredWidth(), dimensions.measuredHeight);
        }

        if (args.data.x > 200) {
            console.log("Notify perform left action");
        } else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    }

    public onSwipeCellFinished(args: listViewModule.ListViewEventData) {
        if (args.data.x < 0) {
            var currentItemView = args.object;
            var deleteView = currentItemView.getViewById("delete-view");
            var dimensions = viewModule.View.measureChild(
                deleteView.parent,
                deleteView,
                utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
                utilsModule.layout.makeMeasureSpec(deleteView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
            viewModule.View.layoutChild(deleteView.parent, deleteView, currentItemView.getMeasuredWidth(), 0, currentItemView.getMeasuredWidth(), dimensions.measuredHeight);
        }

        if (args.data.x > 200) {
            console.log("Perform left action");
        } else if (args.data.x < -200) {
            console.log("Perform right action");
        }
    }
}
// << angular-listview-swipe-execute-stretch-component