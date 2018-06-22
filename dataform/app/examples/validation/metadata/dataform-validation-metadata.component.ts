import { Component, OnInit } from "@angular/core";
import { User } from "../../data-services/user";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-validation-metadata",
    templateUrl: "dataform-validation-metadata.component.html"
})
export class DataFormValidationMetadataComponent implements OnInit {
    private _metadata;
    private _user: User;

    constructor() {
    }

    ngOnInit() {
        this._user = new User();
        this._metadata = require("../../data-services/user-metadata-validation.json");
    }

    get metadata() {
        return this._metadata;
    }

    get user(): User {
        return this._user;
    }
}
