import { Component, OnInit } from "@angular/core";
import { Person } from "../data-services/person";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-events",
    templateUrl: "dataform-events.component.html"
})
export class DataFormEventsComponent implements OnInit {
    private _eventsText: string;
    private _person: Person;

    constructor() { }

    ngOnInit() {
        this._person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);

        this._eventsText = "LastEvent: NONE";
    }

    // >> angular-dataform-commit-cancel
    public dfPropertyCommit(args) {
        if (args.propertyName == "name") {
            this._eventsText = "LastEvent: name property commit cancelled";
            args.returnValue = false;
        }
    }
    // << angular-dataform-commit-cancel

    get person(): Person {
        return this._person;
    }

    get eventsText() {
        return this._eventsText;
    }

    public dfPropertyCommitted(args) {
        this._eventsText = "LastEvent: " + args.propertyName + " property committed";
    }

    public dfGroupExpanded(args) {
        this._eventsText = "LastEvent: " + args.groupName + " group expanded";
    }

    public dfGroupCollapsed(args) {
        this._eventsText = "LastEvent: " + args.groupName + " group collapsed";
    }

}