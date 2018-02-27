import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseUser } from "../../data-services/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-custom-validation",
    templateUrl: "dataform-custom-validation.component.html"
})
export class DataFormCustomValidationComponent implements OnInit {
    private _baseUser: BaseUser;
    private _text: string;

    constructor() {
    }

    ngOnInit() {
        this._baseUser = new BaseUser();
    }

    get baseUser(): BaseUser {
        return this._baseUser;
    }

    get text(): string {
        return this._text;
    }

    @ViewChild('myCustomValidationDataForm') myCustomDataFormComp: RadDataFormComponent;

// >> angular-dataform-custom-validation
    public onTap() {
        var isValid = true;

        var p1 = this.myCustomDataFormComp.dataForm.getPropertyByName("username");
        var p2 = this.myCustomDataFormComp.dataForm.getPropertyByName("password");

        if (p1.valueCandidate.toLowerCase() != "admin1") {
            p1.errorMessage = "Use admin1 as username.";
            this.myCustomDataFormComp.dataForm.notifyValidated("username", false);
            isValid = false;
        } else {
            this.myCustomDataFormComp.dataForm.notifyValidated("username", true);
        }

        if (p2.valueCandidate.toLowerCase() != "pass1") {
            p2.errorMessage = "Use pass1 as password.";
            this.myCustomDataFormComp.dataForm.notifyValidated("password", false);
            isValid = false;
        } else {
            this.myCustomDataFormComp.dataForm.notifyValidated("password", true);
        }

        this._text = null;

        if (!isValid) {
            this._text = "Username and Password are not recognized.";
        } else {
            this._text = "";
            this.myCustomDataFormComp.dataForm.commitAll();

            alert(
                {
                    title: "Successful Login",
                    message: "Welcome, " + this.myCustomDataFormComp.dataForm.source.username,
                    okButtonText: "OK"
                });

        }
    }
// << angular-dataform-custom-validation
}