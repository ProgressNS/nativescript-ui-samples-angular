import { Component, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor() {
        this.initDataItems();
    }

    @ViewChild("autocomplete") autocomplete: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();

        for (let i = 0; i < this.countries.length; i++) {
            this._items.push(new TokenModel(this.countries[i], undefined));
        }
    }

    public onSuggestSelected(args) {
        this.autocomplete.autoCompleteTextView.suggestMode = "Suggest";
        this.autocomplete.autoCompleteTextView.resetAutocomplete();
    }

    public onAppendSelected(args) {
        this.autocomplete.autoCompleteTextView.suggestMode = "Append";
        this.autocomplete.autoCompleteTextView.completionMode = "StartsWith";
        this.autocomplete.autoCompleteTextView.resetAutocomplete();
    }

    public onSuggestAppendSelected(args) {
        this.autocomplete.autoCompleteTextView.suggestMode = "SuggestAppend";
        this.autocomplete.autoCompleteTextView.completionMode = "StartsWith";
        this.autocomplete.autoCompleteTextView.resetAutocomplete();
    }

    public onStartsWithSelected(args) {
        this.autocomplete.autoCompleteTextView.completionMode = "StartsWith";
        this.autocomplete.autoCompleteTextView.resetAutocomplete();
    }

    public onContainsSelected(args) {
        this.autocomplete.autoCompleteTextView.completionMode = "Contains";
        this.autocomplete.autoCompleteTextView.suggestMode = "Suggest";
        this.autocomplete.autoCompleteTextView.resetAutocomplete();
    }

    public onPlainSelected(args) {
        this.autocomplete.autoCompleteTextView.displayMode = "Plain";
        this.autocomplete.autoCompleteTextView.resetAutocomplete();
    }

    public onTokensSelected(args) {
        this.autocomplete.autoCompleteTextView.displayMode = "Tokens";
        this.autocomplete.autoCompleteTextView.resetAutocomplete();
    }
}