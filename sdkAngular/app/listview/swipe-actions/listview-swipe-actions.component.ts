import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { View } from 'tns-core-modules/ui/core/view';

@Component({
    moduleId: module.id,
    selector: "tk-listview-swipe-actions",
    providers: [DataItemService],
    templateUrl: "listview-swipe-actions.component.html",
    styleUrls: ["listview-swipe-actions.component.css"]
})
export class ListViewSwipeActionsComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    @ViewChild("myListView") listViewComponent: RadListViewComponent;

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPostDataItems());
    }

    // >> angular-listview-swipe-action-release-notify
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
    // << angular-listview-swipe-action-release-notify

    // >> angular-listview-swipe-action-release-limits
    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById<View>('mark-view');
        var rightItem = swipeView.getViewById<View>('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }
    // << angular-listview-swipe-action-release-limits

    // >> angular-listview-swipe-action-release-execute
    public onSwipeCellFinished(args: ListViewEventData) {
    }
    // << angular-listview-swipe-action-release-execute

    // >> angular-listview-swipe-action-handlers
    public onLeftSwipeClick(args: ListViewEventData) {
        console.log("Left swipe click");
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        console.log("Right swipe click");
        this.dataItems.splice(this.dataItems.indexOf(args.object.bindingContext), 1);
    }
    // << angular-listview-swipe-action-handlers
}