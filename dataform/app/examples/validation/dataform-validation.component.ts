import { Component, OnInit } from "@angular/core";
import { AdvancedUser } from "../data-services/user";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-validation",
    templateUrl: "dataform-validation.component.html"
})
export class DataFormValidationComponent implements OnInit {
    private _user: AdvancedUser;

    constructor() {
    }

    ngOnInit() {
        this._user = new AdvancedUser();
    }

    get user(): AdvancedUser {
        return this._user;
    }
}