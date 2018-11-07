import { Component } from "@angular/core";
import { Person } from "../../data-services/person";

const person = require('../../data-services/person-model.json');
const personMetadata = require('../../data-services/person-metadata.json');

@Component({
    moduleId: module.id,
    selector: "tk-dataform-css-form",
    templateUrl: "dataform-css-form.component.html",
    styleUrls: ['dataform-css-form.component.css']
})
export class DataFormCssFormComponent {
    private _personMetadata;
    private _person: Person;

    constructor() {
        this._person = JSON.parse(JSON.stringify(person));
        this._personMetadata = JSON.parse(JSON.stringify(personMetadata));
    }

    get personMetadata() {
        return this._personMetadata;
    }

    set personMetadata(value) {
        this._personMetadata = value;
    }

    get person(): Person {
        return this._person;
    }

    set person(value: Person) {
        this._person = value;
    }
}