import { Component, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-readonly",
    templateUrl: "autocomplete-readonly.component.html"
})
export class AutoCompleteReadOnlyComponent {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor() {
        this.initDataItems();
    }

    @ViewChild("autoToken") autoToken: RadAutoCompleteTextViewComponent;
    @ViewChild("autoPlain") autoPlain: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this._items.push(new TokenModel(this.countries[i], undefined));
        }
    }

    public onSetTrue(args) {
        this.autoToken.autoCompleteTextView.readOnly = true;
        this.autoPlain.autoCompleteTextView.readOnly = true;
    }

    public onSetFalse(args) {
        this.autoToken.autoCompleteTextView.readOnly = false;
        this.autoPlain.autoCompleteTextView.readOnly = false;
    }
}
