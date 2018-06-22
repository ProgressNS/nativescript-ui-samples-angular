import { Component, OnInit } from "@angular/core";
import { CitiesList } from "../data-services/city-model";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-value-providers",
    templateUrl: "dataform-value-providers.component.html"
})
export class DataFormValueProvidersComponent implements OnInit {
    private _cities: CitiesList;
    private _cityProvider1: any;
    private _cityProvider2: any;
    private _cityProvider3: any;
    private _cityProvider4: any;
    private _cityProvider5: any;
    private _sourceText: String;

    constructor() {
    }

    ngOnInit() {
        this._cities = new CitiesList();
        this._sourceText = this.cities.toString();
    }

    onPropertyCommitted(args) {
        this._sourceText = args.object.source.toString();
    }

    get sourceText() {
        return this._sourceText;
    }

    get cities(): CitiesList {
        return this._cities;
    }

    get cityProvider1() {
        if (!this._cityProvider1) {
            // >> angular-dataform-valueprovider-string
            this._cityProvider1 = "Shanghai, Lagos, Moscow, São Paulo, Sydney";
            // << angular-dataform-valueprovider-string
        }
        return this._cityProvider1;
    }

    get cityProvider2() {
        if (!this._cityProvider2) {
            // >> angular-dataform-valueprovider-array
            this._cityProvider2 = ["Shanghai", "Lagos", "Moscow", "São Paulo", "Sydney"];
            // << angular-dataform-valueprovider-array
        }
        return this._cityProvider2;
    }

    get cityProvider3() {
        if (!this._cityProvider3) {
            // >> angular-dataform-valueprovider-map
            this._cityProvider3 = new Map([
                [1121, "Shanghai"],
                [3651, "Lagos"],
                [5213, "Moscow"],
                [6214, "São Paulo"],
                [6985, "Sydney"]
            ]);
            // << angular-dataform-valueprovider-map
        }
        return this._cityProvider3;
    }

    get cityProvider4() {
        if (!this._cityProvider4) {
            // >> angular-dataform-valueprovider-pairsarray
            this._cityProvider4 = [
                { key: 1121, label: "Shanghai" },
                { key: 3651, label: "Lagos" },
                { key: 5213, label: "Moscow" },
                { key: 6214, label: "São Paulo" },
                { key: 6985, label: "Sydney" }
            ];
            // << angular-dataform-valueprovider-pairsarray
        }
        return this._cityProvider4;
    }

    get cityProvider5() {
        if (!this._cityProvider5) {
            // >> angular-dataform-valueprovider-customarray
            this._cityProvider5 = {
                key: "id",
                label: "name",
                items: [
                    { id: 1121, name: "Shanghai" },
                    { id: 3651, name: "Lagos" },
                    { id: 5213, name: "Moscow" },
                    { id: 6214, name: "São Paulo" },
                    { id: 6985, name: "Sydney" }
                ]
            };
            // << angular-dataform-valueprovider-customarray
        }
        return this._cityProvider5;
    }
}