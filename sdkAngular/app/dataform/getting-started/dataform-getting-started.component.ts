// >> angular-dataform-getting-started-context
import { Component, OnInit } from "@angular/core";
import { Person } from "../data-services/person";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-getting-started",
    templateUrl: "dataform-getting-started.component.html"
})
export class DataFormGettingStartedComponent implements OnInit {
    private _person: Person;

    constructor() {
    }

    ngOnInit() {
        this._person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
    }

    get person(): Person {
        return this._person;
    }
}
// << angular-dataform-getting-started-context