import { Component, OnInit } from "@angular/core";
import { Person } from "../data-services/person";
import { knownFolders } from "file-system";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-getting-started-json",
    templateUrl: "dataform-getting-started-json.component.html"
})
export class DataformGettingStartedJsonComponent implements OnInit {
    private _person: Person;

    constructor() {
    }

    ngOnInit() {
        var documents = knownFolders.currentApp();
        var jsonPersonFile = documents.getFile('dataform/data-services/person-model.json');
        var that = new WeakRef(this);
        jsonPersonFile.readText()
            .then(function (content) {
                try {
                    var person = JSON.parse(content);
                    that.get().person = person;
                } catch (err) {
                    throw new Error('Could not parse JSON file');
                }
            }, function (error) {
                throw new Error('Could not read JSON file');
            });
    }

    get person(): Person {
        return this._person;
    }

    set person(value: Person) {
        this._person = value;
    }
}
