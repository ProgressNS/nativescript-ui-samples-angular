import { OptionsExampleBase } from "../../options-example-base";
import { Component, OnInit, Injectable, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { Page, NavigatedData } from "tns-core-modules/ui/page";
import { OptionsService } from "../../navigation/options/options.service";
import * as frameModule from "tns-core-modules/ui/frame";
import * as applicationModule from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { EventData } from "tns-core-modules/data/observable";
import { ios as isIOS } from "tns-core-modules/application";
import { RadListView, ListViewItemSnapMode } from "nativescript-ui-listview";

@Component({
    moduleId: module.id,
    providers: [DataItemService],
    selector: "tk-listview-scroll-to-index-initial",
    templateUrl: "listview-scroll-to-index-initial.component.html",
    styleUrls: ["listview-scroll-to-index.component.css"]
})
@Injectable()
export class ListViewScrollToIndexInitialComponent extends OptionsExampleBase implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private timer;

    constructor(private _page: Page, private _dataItemService: DataItemService, private _optionsService: OptionsService, private _router: Router) {
        super();
    }

    @ViewChild('myRadListView') listViewComponent: RadListViewComponent;

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(100));
    }

    private scrollFunc(listView: RadListView) {
        listView.scrollToIndex(20, false, ListViewItemSnapMode.Start);
    }

    public onDataPopulated(args: EventData) {
        var listView = args.object as RadListView;
        // Uses "setTimeout()" to only execute scrollToIndex when the RadListView on iOS has finished populating its native objects
        if (isIOS) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
    
            this.timer = setTimeout(this.scrollFunc, 10, listView);
        } else {
            this.scrollFunc(listView);
        }
    }
}
