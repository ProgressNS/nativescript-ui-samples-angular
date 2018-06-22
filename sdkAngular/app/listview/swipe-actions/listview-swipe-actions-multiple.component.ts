import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { View } from "tns-core-modules/ui/core/view";
import { layout } from "tns-core-modules/utils/utils";

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
    private leftItem: View;
    private rightItem: View;
    private mainView: View;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    @ViewChild("myListView") listViewComponent: RadListViewComponent;

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPostDataItems());
    }

    // >> angular-listview-swipe-action-multiple
    public onCellSwiping(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['swipeView'];
        this.mainView = args['mainView'];
        this.leftItem = swipeView.getViewById('left-stack');
        this.rightItem = swipeView.getViewById('right-stack');

        if (args.data.x > 0) {
            var leftDimensions = View.measureChild(
                <View>this.leftItem.parent,
                this.leftItem,
                layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
                layout.makeMeasureSpec(this.mainView.getMeasuredHeight(), layout.EXACTLY));
            View.layoutChild(<View>this.leftItem.parent, this.leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
            this.hideOtherSwipeTemplateView("left");
        } else {
            var rightDimensions = View.measureChild(
                <View>this.rightItem.parent,
                this.rightItem,
                layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
                layout.makeMeasureSpec(this.mainView.getMeasuredHeight(), layout.EXACTLY));

            View.layoutChild(<View>this.rightItem.parent, this.rightItem, this.mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, this.mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
            this.hideOtherSwipeTemplateView("right");
        }
    }

    private hideOtherSwipeTemplateView(currentSwipeView: string) {
        switch (currentSwipeView) {
            case "left":
                if (this.rightItem.getActualSize().width != 0) {
                    View.layoutChild(<View>this.rightItem.parent, this.rightItem, this.mainView.getMeasuredWidth(), 0, this.mainView.getMeasuredWidth(), 0);
                }
                break;
            case "right":
                if (this.leftItem.getActualSize().width != 0) {
                    View.layoutChild(<View>this.leftItem.parent, this.leftItem, 0, 0, 0, 0);
                }
                break;
            default:
                break;
        }
    }
    // << angular-listview-swipe-action-multiple

    // >> angular-listview-swipe-action-multiple-limits
    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = args['mainView'].getMeasuredWidth() * 0.2; // 20% of whole width
        swipeLimits.left = swipeLimits.right = args['mainView'].getMeasuredWidth() * 0.65 // 65% of whole width
    }
    // << angular-listview-swipe-action-multiple-limits

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