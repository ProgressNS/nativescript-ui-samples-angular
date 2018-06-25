import { Component, OnInit } from "@angular/core";
import { PersonExtended } from "../data-services/person";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-grid-layout",
    templateUrl: "dataform-grid-layout.component.html"
})
export class DataformGridLayoutComponent implements OnInit {
private _person: PersonExtended;

    constructor() {
    }

    ngOnInit() {
        this._person = new PersonExtended("John", 23, "john@company.com", "New York", "5th Avenue", 11, "USA", "Bank of America", "00xx00xx00", 123, "2016-11-09");
    }

    get person(): PersonExtended {
        return this._person;
    }
}