import {Component, OnInit} from "angular2/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
var namesAndEmails = require("../../listview/NamesAndEmails.json")

@Component({
    selector: "my-app",
    providers: [DataItemService],
    templateUrl: "listview/item-selection/listview-item-selection.component.html",
    styleUrls: ["listview/item-selection/listview-item-selection.component.css"]
})
// >> angular-listview-selection-component
export class AppComponent implements OnInit {
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

    public onItemSelected(args: listViewModule.ListViewEventData) {
        var listview = args.object as listViewModule.RadListView;
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

    public onItemDeselected(args: listViewModule.ListViewEventData) {
        var listview = args.object as listViewModule.RadListView;
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