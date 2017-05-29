// >> angular-autocomplete-events
import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");
import { RadAutoCompleteTextViewComponent } from "nativescript-telerik-ui-pro/autocomplete/angular";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-events.component",
    templateUrl: "autocomplete-events.component.html"
})
export class AutoCompleteEventsComponent {
    private _items: ObservableArray<autocompleteModule.TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];
    private _eventName: string;

    constructor() {
        this.initDataItems();
    }

    get dataItems(): ObservableArray<autocompleteModule.TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<autocompleteModule.TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this._items.push(new autocompleteModule.TokenModel(this.countries[i], undefined));
        }
    }

    get eventName(): string {
        return this._eventName;
    }

    set eventName(value: string) {
        this._eventName = value;
    }

    public onTokenAdded(args) {
        this.eventName = "Token Added!";
    }

    public onTokenRemoved(args) {
        this.eventName = "Token Removed!";
    }

    public onTokenSelected(args) {
        this.eventName = "Token Selected!";
    }

    public onTokenDeselected(args) {
        this.eventName = "Token Deselected!";
    }

    public onSuggestionViewVisible(args) {
        this.eventName = "Suggestion View Visible!";
    }
}
// << angular-autocomplete-events
