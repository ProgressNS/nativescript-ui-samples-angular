import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-selection",
    providers: [DataItemService],
    templateUrl: "listview-item-selection.component.html",
    styleUrls: ["listview-item-selection.component.css"]
})
// >> angular-listview-selection-component
export class ListViewItemSelectionComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;
    private _selectedItems: string;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    get selectedItems(): string {
        return this._selectedItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getNameEmailDataItems());
        this._selectedItems = "No Selected items.";
    }

    public onItemSelected(args: ListViewEventData) {
        var listview = args.object as RadListView;
        var selectedItems = listview.getSelectedItems() as Array<DataItem>;
        var selectedTitles = "Selected items: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i].name;

            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }

        this._selectedItems = selectedTitles;
        console.log("Item selected.");
    }

    public onItemDeselected(args: ListViewEventData) {
        var listview = args.object as RadListView;
        var selectedItems = listview.getSelectedItems() as Array<DataItem>;
        if (selectedItems.length > 0) {
            var selectedTitles = "Selected items: ";
            for (var i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i].name;

                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }

            this._selectedItems = selectedTitles;
        } else {
            this._selectedItems = "No Selected items.";
        }

        console.log("Item deselected.");
    }
}
// << angular-listview-selection-component