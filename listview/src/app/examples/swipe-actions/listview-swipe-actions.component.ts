import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { View } from 'tns-core-modules/ui/core/view';
import { Label } from 'tns-core-modules/ui/label';
import { Frame } from "tns-core-modules/ui/frame/frame";

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

    @ViewChild("myListView", { read: RadListViewComponent, static: false }) myListViewComponent: RadListViewComponent;

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPostDataItems());
    }

    // >> angular-listview-swipe-action-release-notify
    public onCellSwiping(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const currentItemView = args.object;

        if (args.data.x > 200) {
            console.log("Notify perform left action");
        } else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    }
    // << angular-listview-swipe-action-release-notify

    // >> angular-listview-swipe-action-release-limits
    public onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args['object'];
        const leftItem = swipeView.getViewById<View>('mark-view');
        const rightItem = swipeView.getViewById<View>('delete-view');
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
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        console.log("Right swipe click");
        this.dataItems.splice(this.dataItems.indexOf(args.object.bindingContext), 1);
    }
    // << angular-listview-swipe-action-handlers

    public onLayoutTap(args) {
        const message = "Tap on Layout for item: " + (<DataItem>args.object.bindingContext).name;
        console.log(message);
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
        let lbl = <Label>Frame.topmost().getViewById("lbl");
        lbl.text += " \n" + message;
    }

    public onLabelTap(args) {
        const message = "Tap on Title: " + (<Label>args.object).text;
        console.log(message);
        let lbl = <Label>Frame.topmost().getViewById("lbl");
        lbl.text = message;
    }
}