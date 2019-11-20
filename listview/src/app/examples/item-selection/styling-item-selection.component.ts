import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";

@Component({
    moduleId: module.id,
    selector: "tk-listview-item-selection",
    providers: [DataItemService],
    templateUrl: "styling-item-selection.component.html",
    styleUrls: ["styling-item-selection.component.css"]
})
export class StylingItemSelectionComponent implements OnInit {
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
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedTitles = "Selected items: ";
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";

            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }

        this._selectedItems = selectedTitles;
        const selectedItem = this.dataItems.getItem(args.index);
        console.log("Item selected: " + (selectedItem && selectedItem.name));
    }

    public onItemSelecting(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedTitles = "Selecting item: ";
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";

            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }

        const selectedItem = this.dataItems.getItem(args.index);
        console.log("Item selecting: " + (selectedItem && selectedItem.name));
    }

    public onItemDeselecting(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedTitles = "Deselecting item: ";
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";

            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }

        const selectedItem = this.dataItems.getItem(args.index);
        console.log("Item deselecting: " + (selectedItem && selectedItem.name));
    }

    public onItemDeselected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        if (selectedItems.length > 0) {
            let selectedTitles = "Selected items: ";
            for (let i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i] ? selectedItems[i].name : "";

                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }

            this._selectedItems = selectedTitles;
        } else {
            this._selectedItems = "No Selected items.";
        }

        const deselectedItem = this.dataItems.getItem(args.index);
        console.log("Item deselected: " + (deselectedItem && deselectedItem.name));
    }
}