// >> angular-listview-scroll-events-component
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewScrollEventData } from "nativescript-ui-listview";

@Component({
    moduleId: module.id,
    selector: "tk-listview-scroll-events",
    providers: [DataItemService],
    templateUrl: "listview-scroll-events.component.html",
    styleUrls: ["listview-scroll-events.component.css"]
})
export class ListViewScrollEventsComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _stateText: string = "State: ";

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get stateText(): string {
        return this._stateText;
    }

    set stateText(value: string) {
        this._stateText = value;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(25));
    }

    // >> angular-listview-scroll-events
    public onScrolled(args: ListViewScrollEventData) {
        this.stateText = "State: Scrolled with offset: " + args.scrollOffset;
    }

    public onScrollStarted(args: ListViewScrollEventData) {
        this.stateText = "State: Scroll started with offset: " + args.scrollOffset;
    }

    public onScrollEnded(args: ListViewScrollEventData) {
        this.stateText = "State: Scroll ended with offset: " + args.scrollOffset;
    }
    // << angular-listview-scroll-events
}
// << angular-listview-scroll-events-component