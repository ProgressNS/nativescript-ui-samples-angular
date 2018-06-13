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

@Component({
    moduleId: module.id,
    providers: [DataItemService],
    selector: "tk-listview-scroll-to-index-vertical",
    templateUrl: "listview-scroll-to-index-vertical.component.html",
    styleUrls: ["listview-scroll-to-index.component.css"]
})
@Injectable()
export class ListViewScrollToIndexVerticalComponent extends OptionsExampleBase implements OnInit {
    private _optionsParamName: string;
    private _dataItems: ObservableArray<DataItem>;
    private _options: Array<string> = ["Auto", "Start", "Center", "End"];

    myScrollPosition: any;

    constructor(private _page: Page, private _dataItemService: DataItemService, private _optionsService: OptionsService, private _router: Router) {
        super();
        let selectedIndex = 1;
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "scrollDirection";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: selectedIndex, paramName: this._optionsParamName, items: this._options };
        }
        this.set("myScrollPosition", this._options[selectedIndex]);
    }

    // >> angular-listview-scroll-to-index
    @ViewChild('myRadListView') listViewComponent: RadListViewComponent;

    public onTap() {
        this.listViewComponent.listView.scrollToIndex(50, false, this.get('myScrollPosition'));
    }
    // << angular-listview-scroll-to-index

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(100));
    }

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case this._options[0]:
                        this.set("myScrollPosition", this._options[0]);
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case this._options[1]:
                        this.set("myScrollPosition", this._options[1]);
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case this._options[2]:
                        this.set("myScrollPosition", this._options[2]);
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case this._options[3]:
                        this.set("myScrollPosition", this._options[3]);
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    }

    public onOptionsTapped(args: any) {
        if (applicationModule.android) {
            this.set('myScrollPosition', args.object.text);
        } else {
            super.onOptionsTapped(args);
        }
    }
}
