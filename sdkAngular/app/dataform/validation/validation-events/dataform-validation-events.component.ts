import { Component, OnInit } from "@angular/core";
import { RegisteringUser } from "../../data-services/user";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-validation-events",
    templateUrl: "dataform-validation-events.component.html"
})
export class DataFormValidationEventsComponent implements OnInit {
    private _registeringUser: RegisteringUser;
    private _text: string;

    constructor() {
    }

    ngOnInit() {
        this._registeringUser = new RegisteringUser();
    }

    get registeringUser(): RegisteringUser {
        return this._registeringUser;
    }

    get text() {
        return this._text;
    }

// >> angular-dataform-property-validate-event
    public onPropertyValidate(args) {
        var validationResult = true;

        if (args.propertyName == "password2") {
            var dataForm = args.object;
            var password1 = dataForm.getPropertyByName("password");
            var password2 = args.entityProperty;
            if (password1.valueCandidate != password2.valueCandidate) {
                password2.errorMessage = "Passwords do not match.";
                validationResult = false;
            }
        }

        args.returnValue = validationResult;
    }
// << angular-dataform-property-validate-event

    public onPropertyValidated(args) {
        var propertyName = args.propertyName;
        var validatedValue = args.entityProperty.valueCandidate;
        var validationResult = args.entityProperty.isValid;

        this._text = "Validated!" + "\n" +
            "PropertyName: " + propertyName + "\n" +
            "Value: " + validatedValue + "\n" +
            "Result: " + validationResult;

        if (propertyName == "password") {
            var dataForm = args.object;
            var password2 = dataForm.getPropertyByName("password2");
            var password1 = args.entityProperty;
            if (password2.valueCandidate != "") {
                if (password1.valueCandidate != password2.valueCandidate) {
                    dataForm.notifyValidated("password2", false);
                } else {
                    dataForm.notifyValidated("password2", true);
                }
            }
        }
    }
}

