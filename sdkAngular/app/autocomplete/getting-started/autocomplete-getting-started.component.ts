// >> angular-autocomplete-getting-started
import { Component, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");
import { RadAutoCompleteTextViewComponent } from "nativescript-telerik-ui-pro/autocomplete/angular";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-getting-started",
    templateUrl: "autocomplete-getting-started.component.html"
})
export class AutoCompleteGettingStartedComponent {
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
// >> (hide)
    public onSuggestSelected(args) {
        this.autocmp.autoCompleteTextView.suggestMode = "Suggest";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }

    public onAppendSelected(args) {
        this.autocmp.autoCompleteTextView.suggestMode = "Append";
        this.autocmp.autoCompleteTextView.completionMode = "StartsWith";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }

    public onSuggestAppendSelected(args) {
        this.autocmp.autoCompleteTextView.suggestMode = "SuggestAppend";
        this.autocmp.autoCompleteTextView.completionMode = "StartsWith";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }

    public onStartsWithSelected(args) {
        this.autocmp.autoCompleteTextView.completionMode = "StartsWith";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }

    public onContainsSelected(args) {
        this.autocmp.autoCompleteTextView.completionMode = "Contains";
        this.autocmp.autoCompleteTextView.suggestMode = "Suggest";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }

    public onPlainSelected(args) {
        this.autocmp.autoCompleteTextView.displayMode = "Plain";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }

    public onTokensSelected(args) {
        this.autocmp.autoCompleteTextView.displayMode = "Tokens";
        this.autocmp.autoCompleteTextView.resetAutocomplete();
    }
    // << (hide)
}
// << angular-autocomplete-getting-started
