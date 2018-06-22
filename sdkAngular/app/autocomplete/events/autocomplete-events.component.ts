import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-events.component",
    templateUrl: "autocomplete-events.component.html"
})
export class AutoCompleteEventsComponent {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];
    private _currentEventNumber: number;
    private _eventsText: string;
    private _eventName1: string;
    private _eventName2: string;
    private _eventName3: string;
    private _eventName4: string;
    private _eventName5: string;

    constructor() {
        this.initDataItems();
        this._currentEventNumber = 0;
        this.updateEventsText();
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this._items.push(new TokenModel(this.countries[i], undefined));
        }
    }

    get eventsText(): string {
        return this._eventsText;
    }

    get eventName1(): string {
        return this._eventName1;
    }

    get eventName2(): string {
        return this._eventName2;
    }

    get eventName3(): string {
        return this._eventName3;
    }

    get eventName4(): string {
        return this._eventName4;
    }

    get eventName5(): string {
        return this._eventName5;
    }

    // >> angular-autocomplete-events
    public onTokenAdded(args) {
        this.logEvent("Added Token: " + args.token.text);
    }

    public onTokenRemoved(args) {
        this.logEvent("Removed Token: " + args.token.text);
    }

    public onTokenSelected(args) {
        this.logEvent("Selected Token: " + args.token.text);
    }

    public onTokenDeselected(args) {
        this.logEvent("Deselected Token: " + args.token.text);
    }

    public onDidAutoComplete(args) {
        this.logEvent("DidAutoComplete with text: " + args.text);
    }

    public onTextChanged(args) {
        this.logEvent("Text Changed: " + args.text);
    }

    public onSuggestionViewBecameVisible(args) {
        this.logEvent("Suggestion View Became Visible");
    }
    // << angular-autocomplete-events

    private updateEventsText(): void {
        var text;
        if (this._currentEventNumber > 5) {
            text = "Latest 5 fired events:";
        } else if (this._currentEventNumber == 0) {
            text = "Events will appear here:";
        } else if (this._currentEventNumber == 1) {
            text = "Fired event:";
        } else {
            text = "Fired events:";
        }
        this._eventsText = text;
    }

    private logEvent(eventText: string) {
        this._currentEventNumber++;
        this.updateEventsText();
        switch (this._currentEventNumber) {
            case 1: this._eventName1 = eventText; return;
            case 2: this._eventName2 = eventText; return;
            case 3: this._eventName3 = eventText; return;
            case 4: this._eventName4 = eventText; return;
            case 5: this._eventName5 = eventText; return;
            default:
                this._eventName1 = this.eventName2;
                this._eventName2 = this.eventName3;
                this._eventName3 = this.eventName4;
                this._eventName4 = this.eventName5;
                this._eventName5 = eventText;
        }
    }
}
