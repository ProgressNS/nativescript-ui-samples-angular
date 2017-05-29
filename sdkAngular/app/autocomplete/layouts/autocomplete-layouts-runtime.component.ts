import { Component, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");
import { RadAutoCompleteTextViewComponent } from "nativescript-telerik-ui-pro/autocomplete/angular";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-layouts-runtime",
    templateUrl: "autocomplete-layouts-runtime.component.html"
})
export class AutoCompleteLayoutsRuntimeComponent {
    private _items: ObservableArray<autocompleteModule.TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor() {
        this.initDataItems();
    }

    @ViewChild("autocmp") autocmp: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<autocompleteModule.TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<autocompleteModule.TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this._items.push(new autocompleteModule.TokenModel(this.countries[i], undefined));
        }
    }

    public onHorizontalSelected(args) {
        this.autocmp.autoCompleteTextView.layoutMode = "Horizontal";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }

    public onWrapSelected(args) {
        this.autocmp.autoCompleteTextView.layoutMode = "Wrap";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }
}
