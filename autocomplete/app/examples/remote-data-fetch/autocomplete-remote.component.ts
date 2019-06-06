// >> angular-autocomplete-getting-started-component
import { Component, ViewChild, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";
import * as http from "tns-core-modules/http";

@Component({
    moduleId: module.id,
    selector: "tk-autocomplete-remote.component",
    templateUrl: "autocomplete-remote.component.html"
})
export class AutoCompleteRemoteComponent implements OnInit {
    private _items: ObservableArray<TokenModel>;
    private jsonUrl = "https://raw.githubusercontent.com/NativeScript/nativescript-ui-samples/master/examples-data/airports.json";

    ngOnInit() {
        let that = this;
        this.autocomplete.autoCompleteTextView.loadSuggestionsAsync = function (text) {
            const promise = new Promise(function (resolve, reject) {
                http.getJSON(that.jsonUrl).then(function (r: any) {
                    const airportsCollection = r.airports;
                    const items: Array<TokenModel> = new Array();
                    for (let i = 0; i < airportsCollection.length; i++) {
                        items.push(new TokenModel(airportsCollection[i].FIELD2, null));
                    }

                    resolve(items);
                }).catch((err) => {
                    const message = 'Error fetching remote data from ' + that.jsonUrl + ': ' + err.message;
                    console.log(message);
                    alert(message);
                    reject();
                });
            });

            return promise;
        };
    }

    @ViewChild("autocomplete", { static: true }) autocomplete: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }
}
// << angular-autocomplete-getting-started-component
