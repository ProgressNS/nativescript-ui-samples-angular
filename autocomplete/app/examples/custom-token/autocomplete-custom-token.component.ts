import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel, AutoCompleteEventData } from "nativescript-ui-autocomplete";
import { default as data } from "./cities";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-custom-token.component",
    templateUrl: "autocomplete-custom-token.component.html"
})
export class AutoCompleteCustomTokenComponent {
    private _items: ObservableArray<CityModel>;

    constructor() {
        this.initDataItems();
    }

    get dataItems(): ObservableArray<CityModel> {
        return this._items;
    }

    // >> angular-autocomplete-custom-tokens-items-ts
    private initDataItems() {
        if (!this._items) {
            this._items = new ObservableArray<CityModel>();
            for (let i = 0; i < data.items.length; i++) {
                const d = data.items[i].flag;
                const ds = "res://" + d;
                this._items.push(new CityModel(data.items[i].id, data.items[i].city, data.items[i].country, ds));
            }
        }
    }
    // << angular-autocomplete-custom-tokens-items-ts

    public onTokenAdded(args: AutoCompleteEventData) {
        console.log("Added Token: " + args.token);
    }

    public onTokenRemoved(args: AutoCompleteEventData) {
        console.log("Removed Token: " + args.token);
    }

    public onTokenSelected(args: AutoCompleteEventData) {
        console.log("Selected Token: " + args.token);
    }

    public onTokenDeselected(args: AutoCompleteEventData) {
        console.log("Deselected Token: " + args.token);
    }
}

// >> angular-autocomplete-custom-token-model-ts
export class CityModel extends TokenModel {
    public id: number;
    public city: string;
    public country: string;
    constructor(id: number, city: string, country: string, image: string) {
        super(city + ", " + country, image);

        this.id = id;
        this.city = city;
        this.country = country;
    }

    toString() {
        return this.id + ": " + this.city + ", " + this.country;
    }
}
// << angular-autocomplete-custom-token-model-ts