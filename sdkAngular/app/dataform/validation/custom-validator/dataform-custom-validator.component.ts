import { Component, OnInit } from "@angular/core";
import { User } from "../../data-services/user";
// >> angular-dataform-custom-validator-register
import { ExactTextValidator } from "../../data-services/exact-text-validator";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("ExactTextValidator", () => <any>ExactTextValidator);
// << angular-dataform-custom-validator-register

@Component({
    moduleId: module.id,
    selector: "tk-dataform-custom-validator",
    templateUrl: "dataform-custom-validator.component.html"
})
export class DataFormCustomValidatorComponent implements OnInit {
    private _user: User;

    constructor() {
    }

    ngOnInit() {
        this._user = new User();
    }

    get user(): User {
        return this._user;
    }
}