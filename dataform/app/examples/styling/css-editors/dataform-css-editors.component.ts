import { Component } from "@angular/core";
import { Person } from "../../data-services/person";

const person = require('../../data-services/person-model.json');
const personMetadata = require('../../data-services/person-metadata.json');

@Component({
    moduleId: module.id,
    selector: "tk-dataform-css-editors",
    templateUrl: "dataform-css-editors.component.html",
    styleUrls: ['dataform-css-editors.component.css']
})
export class DataFormCssEditorsComponent {
    private _personMetadata;
    private _person: Person;

    constructor() {
        this._person = JSON.parse(JSON.stringify(person));
        this._personMetadata = JSON.parse(JSON.stringify(personMetadata));
    }

    get personMetadata() {
        return this._personMetadata;
    }

    get person(): Person {
        return this._person;
    }
}