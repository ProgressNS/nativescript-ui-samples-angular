import { Component, OnInit } from "@angular/core";
import { User } from "../../data-services/user";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-async-validation",
    templateUrl: "dataform-async-validation.component.html"
})
export class DataFormAsyncValidationComponent implements OnInit {
    private _user: User;
    private _isBusy: boolean;
    private _text: string;
    private _evenValidation: boolean;

    constructor() {
    }

    ngOnInit() {
        this._user = new User();
        this._text = "Type a username and move to the next field.\n";
        this._evenValidation = true;
    }

    get user(): User {
        return this._user;
    }

    get text() {
        return this._text;
    }

    get isBusy(): boolean {
        return this._isBusy;
    }


// >> angular-dataform-property-validate-async
    public onPropertyValidate(args) {
        if (args.propertyName == "username") {
            this._text = "Validating the username: " + args.entityProperty.valueCandidate + "\n";
            this._isBusy = true;
            args.returnValue = new Promise<Boolean>(resolve => {
                setTimeout(() => {
                    if (this._evenValidation) {
                        args.entityProperty.errorMessage = "This username is already used.";
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                    this._isBusy = false;
                    this._evenValidation = !this._evenValidation;
                }, 1500);
            })
        }
    }
// << angular-dataform-property-validate-async


// >> angular-dataform-property-validated
    public onPropertyValidated(args) {
        if (args.propertyName == "username") {
            this._text = "Username: " + args.entityProperty.valueCandidate + " was validated.\nResult: " + args.entityProperty.isValid;
        }
    }
// << angular-dataform-property-validated
}