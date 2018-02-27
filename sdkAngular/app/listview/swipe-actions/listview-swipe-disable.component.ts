import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, SwipeActionsEventData, RadListView } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { View } from 'tns-core-modules/ui/core/view';

@Component({
    moduleId: module.id,
    selector: "tk-listview-swipe-disable",
    providers: [DataItemService],
    templateUrl: "listview-swipe-disable.component.html",
    styleUrls: ["listview-swipe-disable.component.css"]
})
export class ListViewSwipeDisableComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _enabled: boolean = true;
    private _currentStatus: string;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    set enabled(value: boolean) {
        this._enabled = value;
        this.updateStatusText();
    }

    get currentStatus(): string {
        return this._currentStatus;
    }

    set currentStatus(value: string) {
        this._currentStatus = value;
    }

    @ViewChild("myListView") listViewComponent: RadListViewComponent;

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPostDataItems());
        this.enabled = true;
    }

    public onCellSwiping(args: SwipeActionsEventData) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.swipeView;

        if (args.data.x > 200) {
            console.log("Notify perform left action");
        } else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    }

    public onSwipeCellStarted(args: SwipeActionsEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.swipeView;
        var leftItem = swipeView.getViewById<View>('mark-view');
        var rightItem = swipeView.getViewById<View>('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }

    public onSwipeCellFinished(args: SwipeActionsEventData) {
    }

    public onLeftSwipeClick(args: ListViewEventData) {
        console.log("Left swipe click");
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        console.log("Right swipe click");
        this.dataItems.splice(this.dataItems.indexOf(args.object.bindingContext), 1);
    }

    public onDisableEnableTap() {
        this.enabled = !this.enabled;
    }

    public onItemSwiping(args) {
        args.returnValue = this.enabled;
    }

    private updateStatusText() {
        this.currentStatus = !this.enabled ? "Enable" : "Disable";
    }
}