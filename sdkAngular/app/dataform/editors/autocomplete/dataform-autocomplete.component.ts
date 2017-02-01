import { Component, OnInit } from "@angular/core";
import { Booking } from "../../data-services/booking";
var data = require("../../data-services/airports.json")

@Component({
    moduleId: module.id,
    selector: "tk-dataform-autocomplete",
    templateUrl: "dataform-autocomplete.component.html"
})
export class DataFormaAutoCompleteComponent implements OnInit {
    private _booking: Booking;
    private _fromProviders: Array<String> = new Array<String>();

    constructor() { }

    get booking() {
        return this._booking;
    }

    get fromProviders(): Array<String> {
        return this._fromProviders;
    }

    ngOnInit() {
        this._booking = new Booking();

        for (var i = 0; i < data.airports.length; i++) {
            this._fromProviders.push(data.airports[i].FIELD2 + ", " + data.airports[i].FIELD5);
        }
    }
}