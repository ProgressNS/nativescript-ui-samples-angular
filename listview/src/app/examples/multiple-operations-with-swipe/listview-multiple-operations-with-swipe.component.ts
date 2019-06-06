import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { ListViewEventData } from "nativescript-ui-listview";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { View } from 'tns-core-modules/ui/core/view';
import { EventData } from "tns-core-modules/data/observable";

@Component({
    moduleId: module.id,
    selector: "tk-listview-multiple-operations-with-swipe",
    providers: [DataItemService],
    templateUrl: "listview-multiple-operations-with-swipe.component.html",
    styleUrls: ["listview-multiple-operations-with-swipe.component.css"]
})
export class ListViewDataOperationsMultipleWithSwipeComponent implements OnInit {
    private _event: string;
    private _dataItems: ObservableArray<DataItem>;
    private _isGroupingEnabled: boolean;
    private _isFilteringEnabled: boolean;
    private _isSortingEnabled: boolean;
    private _myGroupingFunc: (item: any) => any;
    private _mySortingFunc: (item: any, otherItem: any) => number;
    private _myFilteringFunc: (item: any) => any;

    @ViewChild("myListView", { read: RadListViewComponent, static: false }) myListViewComponent: RadListViewComponent;

    constructor(private _dataItemService: DataItemService) {
        this.myGroupingFunc = (item: DataItem) => {
            return item.category;
        };
        this.mySortingFunc = (item: DataItem, otherItem: DataItem) => {
            const res = item.id < otherItem.id ? -1 : item.id > otherItem.id ? 1 : 0;
            return res;
        };
        this.myFilteringFunc = (item: DataItem) => {
            return item && item.name.includes("Special Item");
        };
        this.isFilteringEnabled = true;
        this.isSortingEnabled = true;
        this.isGroupingEnabled = true;
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get isGroupingEnabled() {
        return this._isGroupingEnabled;
    }

    set isGroupingEnabled(value: boolean) {
        this._isGroupingEnabled = value;
    }

    get isFilteringEnabled() {
        return this._isFilteringEnabled;
    }

    set isFilteringEnabled(value: boolean) {
        this._isFilteringEnabled = value;
    }

    get isSortingEnabled() {
        return this._isSortingEnabled;
    }

    set isSortingEnabled(value: boolean) {
        this._isSortingEnabled = value;
    }

    get myFilteringFunc(): (item: any) => any {
        return this._myFilteringFunc;
    }

    set myFilteringFunc(value: (item: any) => any) {
        this._myFilteringFunc = value;
    }

    get myGroupingFunc(): (item: any) => any {
        return this._myGroupingFunc;
    }

    set myGroupingFunc(value: (item: any) => any) {
        this._myGroupingFunc = value;
    }

    get mySortingFunc(): (item: any, otherItem: any) => number {
        return this._mySortingFunc;
    }

    set mySortingFunc(value: (item: any, otherItem: any) => number) {
        this._mySortingFunc = value;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataOperationsItems());
        this._event = "No event";
    }

    get event(): string {
        return this._event;
    }

    public onCellSwiping(args: ListViewEventData) {
        let item = this.dataItems.getItem(args.index) || {};
        if (args.data.x > 200) {
            console.log("Notify perform left action on: " + item.name);
        } else if (args.data.x < -200) {
            console.log("Notify perform right action on: " + item.name);
        }
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args.object;
        const leftItem = swipeView.getViewById<View>('mark-view');
        const rightItem = swipeView.getViewById<View>('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
        let item = this.dataItems.getItem(args.index) || {};
        const message = ">>> onSwipeCellStarted item: " + item.name;
        console.log(message);
        this._event = message;
    }

    public onSwipeCellFinished(args: ListViewEventData) {
        let item = this.dataItems.getItem(args.index) || {};
        const message = ">>> onSwipeCellFinished item: " + item.name;
        console.log(message);
        this._event = message;
    }

    public onLeftSwipeClick(args: EventData) {
        let itemView = args.object as View;
        let itemIndex = this.myListViewComponent.listView.items.indexOf(itemView.bindingContext);
        let item = this.dataItems.getItem(itemIndex) || {};
        const message = "Left swipe click for: " + item.name;
        console.log(message);
        this._event = message;
        alert(message);
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args: EventData) {
        let swipeView = args.object as View;
        const context = swipeView.bindingContext || {};
        const message = "Right swipe click for: " + context.name;
        console.log(message);
        this._event = message;
        alert(message);

        // Currently it is not supported to change the items with splice while using data operations.
        // this.dataItems.splice(this.dataItems.indexOf(swipeView.bindingContext), 1);
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    }

    public onItemSelected(args: ListViewEventData) {
        let item = this.dataItems.getItem(args.index) || {};
        item.selected = true;
        const message = "onItemSelected for: " + item.name;
        console.log(message);
        this._event = message;
    }

    public onItemDeselected(args: ListViewEventData) {
        let item = this.dataItems.getItem(args.index) || {};
        item.selected = false;
        const message = "onItemDeselected for: " + item.name;
        console.log(message);
        this._event = message;
    }

    public onItemTap(args: ListViewEventData) {
        let item = this.dataItems.getItem(args.index) || {};
        const message = "onItemTap for: " + item.name;
        console.log(message);
        this._event = message;
    }
}