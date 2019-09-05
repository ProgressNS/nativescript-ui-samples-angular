import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel, AutoCompleteEventData } from "nativescript-ui-autocomplete";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-css.component",
    templateUrl: "autocomplete-css.component.html",
    styleUrls: ['autocomplete-css.component.css']
})
export class AutoCompleteCssComponent {
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
            for (let i = 0; i < this.countries.length; i++) {
                this._items.push(new TokenModel(this.countries[i], null));
            }
        }
    }
}