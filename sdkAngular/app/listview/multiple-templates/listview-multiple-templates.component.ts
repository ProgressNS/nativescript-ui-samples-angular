// >> listview-multiple-templates-angular
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

@Component({
    moduleId: module.id,
    selector: "tk-listview-multiple-templates",
    providers: [DataItemService],
    templateUrl: "listview-multiple-templates.component.html",
    styleUrls: ["listview-multiple-templates.component.css"]
})
export class ListViewMultipleTemplatesComponent implements OnInit {
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
        let itemsCount = 50;
        for (var i = 0; i <= itemsCount; i++) {
            this._dataItems.push(new DataItem(i, "Item " + i, "This is item description", undefined, undefined, undefined, undefined, this.getType(i, itemsCount)));
        }
    }

    private getType(index: number, end: number): string {
        let lastDigit = index % 10;
        let type = index == 0 ? "start" : index == end ? "end" : undefined;
        if (!type) {
            type = lastDigit == 0 ? "default" : lastDigit <= 3 ? "red" : lastDigit <= 6 ? "blue" : lastDigit <= 9 ? "green" : "default";
        }

        return type;
    }

    get templateSelector(): (item: DataItem, index: number, items: any) => string {
        return this._templateSelector;
    }

    set templateSelector(value: (item: DataItem, index: number, items: any) => string) {
        this._templateSelector = value;
    }

    public templateSelectorFunction = (item: DataItem, index: number, items: any) => {
        return item.type;
    }
}
// << listview-multiple-templates-angular