import { Component, OnInit } from "@angular/core";
import { Person } from "../data-services/person";
import { knownFolders } from "tns-core-modules/file-system";
const person = require('../data-services/person-model.json');

@Component({
    moduleId: module.id,
    selector: "tk-dataform-getting-started-json",
    templateUrl: "dataform-getting-started-json.component.html"
})
export class DataformGettingStartedJsonComponent {
    private _person: Person;

    constructor() {
        this._person = JSON.parse(JSON.stringify(person));
    }

    get person(): Person {
        return this._person;
    }

    set person(value: Person) {
        this._person = value;
    }
}
