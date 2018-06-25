import { Component, OnInit, ViewChild } from "@angular/core";
import { Booking } from "../../data-services/booking";
import { DataFormEventData, EntityProperty, RadDataForm } from "nativescript-ui-dataform";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
const data = require("../../data-services/airports.json");

@Component({
    moduleId: module.id,
    selector: "tk-dataform-autocomplete",
    templateUrl: "dataform-autocomplete.component.html"
})
export class DataFormaAutoCompleteComponent implements OnInit {
    private _booking: Booking;
    private _fromProviders: Array<String> = new Array<String>();

    constructor() { }

    @ViewChild("dataform") dataformComponent: RadDataFormComponent;

    get booking() {
        return this._booking;
    }

    get fromProviders(): Array<String> {
        return this._fromProviders;
    }

    ngOnInit() {
        this._booking = new Booking();

        for (let i = 0; i < data.airports.length; i++) {
            this._fromProviders.push(data.airports[i].FIELD2 + ", " + data.airports[i].FIELD5);
        }
    }

    public onPropertyCommitted(args: DataFormEventData) {
        const property = <EntityProperty>args.entityProperty;
        console.log("onPropertyCommitted: " + args.propertyName + " " + property.value);
    }

    public checkValues() {
        const propertyFrom = this.dataformComponent.dataForm.getPropertyByName("from");
        const propertyTo = this.dataformComponent.dataForm.getPropertyByName("to");
        console.log("from values: " + propertyFrom.value);
        console.log("to values: " + propertyTo.value);
    }
}