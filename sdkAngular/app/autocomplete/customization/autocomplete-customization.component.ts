import { Component, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";
var data = require("./countries.json")

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-customization.component",
    templateUrl: "autocomplete-customization.component.html"
})
export class AutoCompleteCustomizationComponent {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor() {
        this.initDataItems();
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        if (!this._items) {
            this._items = new ObservableArray<TokenModel>();
            for (var i = 0; i < data.items.length; i++) {
                var d = data.items[i].flag;
                var ds = "res://" + d;
                this._items.push(new TokenModel(data.items[i].country, ds));
            }
        }
    }
}
