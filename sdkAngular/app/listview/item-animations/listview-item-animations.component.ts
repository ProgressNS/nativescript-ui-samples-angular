import { Component, OnInit, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import { OptionsExampleBase } from "../../options-example-base";
import { Page } from "ui/page";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";
import { OptionsService } from "../../navigation/options/options.service";
import * as applicationModule from "application";


@Component({
    moduleId: module.id,
    selector: "tk-listview-item-animations",
    templateUrl: "listview-item-animations.component.html",
    styleUrls: ["listview-item-animations.component.css"]
})
@Injectable()
export class ListViewItemAnimationsComponent extends OptionsExampleBase implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _itemInsertAnimation: string;
    private _itemDeleteAnimation: string;
    private _optionsParamName: string;

    constructor(private _page: Page, private _optionsService: OptionsService, private _router: Router) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "animation";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = {
                selectedIndex: 0, paramName: this._optionsParamName,
                items: ["Default", "Fade", "Scale", "Slide"]
            };
        }
        this.onDefaultTap();
    }

    ngOnInit() {
        this._dataItems = new ObservableArray<DataItem>();
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get itemInsertAnimation(): string {
        return this._itemInsertAnimation;
    }

    set itemInsertAnimation(value: string) {
        this._itemInsertAnimation = value;
    }

    get itemDeleteAnimation(): string {
        return this._itemDeleteAnimation;
    }

    set itemDeleteAnimation(value: string) {
        this._itemDeleteAnimation = value;
    }

    public onAddItemClick(args: ListViewEventData) {
        var id = Math.round(Math.random() * 100);
        this._dataItems.push(new DataItem(id, "This is a new item: " + id, "This is the new item's description."));
    }

    public onResetClick(args: ListViewEventData) {
        while (this._dataItems.length) {
            this._dataItems.pop();
        }
    }

    public onUpdateItemClick(args: ListViewEventData) {
        for (var index = 0; index < this._dataItems.length; index++) {
            this._dataItems.getItem(index).id = Math.random() * 100;
            this._dataItems.getItem(index).name = "This is an updated item";
            this._dataItems.getItem(index).description = "This is the updated item's description.";
        }
    }

    public onRemoveItemClick(args: ListViewEventData) {
        this._dataItems.splice(this._dataItems.length - 1, 1);
    }

    public onDefaultTap() {
        this.itemInsertAnimation = "Default";
        this.itemDeleteAnimation = "Default";
    }

    public onFadeTap() {
        this.itemInsertAnimation = "Fade";
        this.itemDeleteAnimation = "Fade";
    }

    public onScaleTap() {
        this.itemInsertAnimation = "Scale";
        this.itemDeleteAnimation = "Scale";
    }

    public onSlideTap() {
        this.itemInsertAnimation = "Slide";
        this.itemDeleteAnimation = "Slide";
    }

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "Default":
                        this.onDefaultTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case "Fade":
                        this.onFadeTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case "Scale":
                        this.onScaleTap();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case "Slide":
                        this.onSlideTap();
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}