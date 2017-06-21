import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

var data = require("./items.json")

@Component({
    moduleId: module.id,
    selector: "tk-listview-multiple-templates",
    providers: [DataItemService],
    templateUrl: "listview-multiple-templates.component.html",
    styleUrls: ["listview-multiple-templates.component.css"]
})
export class ListviewMultipleTemplatesComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _templateSelector: (item: DataItem, index: number, items: any) => string;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray();
        this._templateSelector = this.templateSelectorFunction;
        for (var i = 0; i < data.items.length; i++) {
            this._dataItems.push(new DataItem(i, data.items[i].name, data.items[i].description, undefined, undefined, undefined, undefined, data.items[i].type));
        }
    }

    get templateSelector(): (item: DataItem, index: number, items: any) => string {
        return this._templateSelector;
    }

    set templateSelector(value: (item: DataItem, index: number, items: any) => string) {
        this._templateSelector =  value;
    }

    public templateSelectorFunction = (item: DataItem, index: number, items: any) => {
        return item.type;
    }
}