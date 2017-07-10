import { Component, OnInit } from "@angular/core";
import { User } from "../../data-services/user";
import { ExactTextValidator } from "../../data-services/exact-text-validator";
import { registerElement } from "nativescript-angular/element-registry";

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
registerElement("ExactTextValidator", () => <any>ExactTextValidator);