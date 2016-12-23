import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView } from "nativescript-telerik-ui-pro/listview";
import { RadListViewComponent } from "nativescript-telerik-ui-pro/listview/angular";
import { View } from "ui/core/view";
import { layout } from "utils/utils";

@Component({
    moduleId: module.id,
    selector: "tk-listview-swipe-actions-multiple",
    providers: [DataItemService],
    templateUrl: "listview-swipe-actions-multiple.component.html",
    styleUrls: ["listview-swipe-actions-multiple.component.css"]
})
export class ListViewSwipeActionsMultipleComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private animationApplied = false;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    @ViewChild("myListView") listViewComponent: RadListViewComponent;

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPostDataItems());
    }

    // >> listview-swipe-action-multiple
    public onCellSwiping(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['swipeView'];
        var mainView = args['mainView'];
        var leftItem = swipeView.getViewById('left-stack');
        var rightItem = swipeView.getViewById('right-stack');

        if (args.data.x > 0) {
            var leftDimensions = View.measureChild(
                leftItem.parent,
                leftItem,
                layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
                layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY));
            View.layoutChild(leftItem.parent, leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
        } else {
            var rightDimensions = View.measureChild(
                rightItem.parent,
                rightItem,
                layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
                layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY));

            View.layoutChild(rightItem.parent, rightItem, mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
        }
    }
    // << listview-swipe-action-multiple

    // >> listview-swipe-action-multiple-limits
    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = args['mainView'].getMeasuredWidth() * 0.2; // 20% of whole width
        swipeLimits.left = swipeLimits.right = args['mainView'].getMeasuredWidth() * 0.7 //70% of whole width
    }
    // << listview-swipe-action-multiple-limits

    public onSwipeCellFinished(args: ListViewEventData) {
        if (args.data.x > 200) {
            console.log("Perform left action");
        } else if (args.data.x < -200) {
            console.log("Perform right action");
        }
        this.animationApplied = false;
    }

    public onLeftSwipeClick(args: ListViewEventData) {
        console.log("Button clicked: " + args.object.id + " for item with index: " + this.listViewComponent.listView.items.indexOf(args.object.bindingContext));
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        console.log("Button clicked: " + args.object.id + " for item with index: " + this.listViewComponent.listView.items.indexOf(args.object.bindingContext));
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    }
}