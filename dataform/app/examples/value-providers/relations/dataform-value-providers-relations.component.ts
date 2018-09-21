import { Component, OnInit } from "@angular/core";
import { RadDataForm, DataFormEventData } from "nativescript-ui-dataform";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-value-providers-relations",
    templateUrl: "dataform-value-providers-relations.component.html"
})
export class DataFormValueProvidersRelationsComponent implements OnInit {
    private _countryProvider: any;
    private _cityProvider: any;
    private _info: string;
    private _address: AddressInfo;

    constructor() {
    }

    ngOnInit() {
        this.address = { country: 1, city: 101 };
        this.countryProvider = [
            { key: -1, label: "Select Country" },
            { key: 1, label: "UK" },
            { key: 2, label: "Germany" },
            { key: 3, label: "France" }
        ];
        this.cityProvider = this.createCityProvider();
        this.info = this.createInfo();
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    set info(value) {
        this._info = value;
    }

    get info() {
        return this._info;
    }

    get countryProvider() {
        return this._countryProvider;
    }

    set countryProvider(value) {
        this._countryProvider = value;
    }

    get cityProvider() {
        return this._cityProvider;
    }

    set cityProvider(value) {
        this._cityProvider = value;
    }

    public onPropertyValidate(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyValidate -> name: ' + property.name + '; value: ' + property.valueCandidate);
        if (property.name === "city") {
            if (property.valueCandidate > 300) {
                property.errorMessage = "Please Choose Other";
                args.returnValue = false;
            }
        }
    }

    public onPropertyValidated(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyValidated -> name: ' + property.name + '; value: ' + property.valueCandidate);
    }

    public onPropertyCommit(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyCommit -> name: ' + property.name + '; value: ' + property.valueCandidate);
    }

    public onPropertyCommitted(args: DataFormEventData) {
        let dataForm = <RadDataForm>args.object;
        let property = dataForm.getPropertyByName(args.propertyName);
        console.log('onPropertyCommitted -> name: ' + property.name + '; value: ' + property.valueCandidate);
        if (args.propertyName === "country") {
            this.cityProvider = this.createCityProvider();
        }
        if (args.propertyName === "city") {
            this.info = this.createInfo();
        }
    }

    private createCityProvider() {
        switch (this.address.country) {
            case 1:
                return [
                    { key: -1, label: "Select City" },
                    { key: 101, label: "London" },
                    { key: 102, label: "Manchester" },
                    { key: 103, label: "Liverpool" }
                ];
            case 2:
                return [
                    { key: -1, label: "Select City" },
                    { key: 201, label: "Berlin" },
                    { key: 202, label: "Cologne" },
                    { key: 203, label: "Frankfurt" }
                ];
            case 3:
                return [
                    { key: -1, label: "Select City" },
                    { key: 301, label: "Paris" },
                    { key: 302, label: "Nice" },
                    { key: 303, label: "Lyon" }
                ];
            default:
                return [
                    { key: -1, label: "Select Country First" }
                ];
        }
    }

    private createInfo() {
        let countryLabel = this.countryProvider.find(country => country["key"] === this.address.country)["label"];
        let cityLabel = this.cityProvider.find(city => city["key"] === this.address.city)["label"];
        return "Selected City: " + (this.address.city < 0 ? "NONE" : cityLabel + ", " + countryLabel);
    }
}

export class AddressInfo {
    country: number;
    city: number;
}