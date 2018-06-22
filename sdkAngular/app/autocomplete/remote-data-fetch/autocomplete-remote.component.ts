// >> angular-autocomplete-getting-started-component
import { Component, ViewChild, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";
import http = require("tns-core-modules/http");

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-remote.component",
    templateUrl: "autocomplete-remote.component.html"
})
export class AutoCompleteRemoteComponent implements OnInit {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    ngOnInit() {
        this.autocmp.autoCompleteTextView.loadSuggestionsAsync = function (text) {
            var promise = new Promise(function (resolve, reject) {
                http.getJSON("http://www.telerik.com/docs/default-source/ui-for-ios/airports.json?sfvrsn=2").then(function (r: any) {
                    var airportsCollection = r.airports;
                    var items: Array<TokenModel> = new Array();
                    for (var i = 0; i < airportsCollection.length; i++) {
                        items.push(new TokenModel(airportsCollection[i].FIELD2, null));
                    }

                    resolve(items);
                }, function (e) {
                    reject();
                });
            });

            return promise;
        }
    }

    @ViewChild("autocmp") autocmp: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this._items.push(new TokenModel(this.countries[i], undefined));
        }
    }
}
// << angular-autocomplete-getting-started-component
