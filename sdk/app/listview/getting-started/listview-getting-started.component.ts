import {Component, OnInit} from "angular2/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";

@Component({
    selector: "my-app",
    providers: [DataItemService],
    templateUrl: "listview/getting-started/listview-getting-started.component.html",
    styleUrls: ["listview/getting-started/listview-getting-started.component.css"]
})
export class AppComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
    }
}