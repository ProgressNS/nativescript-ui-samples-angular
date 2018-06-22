import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AdvancedUser } from "../../data-services/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { Label } from "tns-core-modules/ui/label";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-check-errors",
    templateUrl: "dataform-check-errors.component.html",
    styleUrls: ["dataform-check-errors.component.css"]
})
export class DataformCheckErrorsComponent implements OnInit {
    private _user: AdvancedUser;

    constructor() {
    }

    ngOnInit() {
        this._user = new AdvancedUser();
    }

    @ViewChild("myDataForm") dataFormComp: RadDataFormComponent;
    @ViewChild("resultLabel") resultLabel: ElementRef;

    get user(): AdvancedUser {
        return this._user;
    }

    public checkErrors() {
        var hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        this.resultLabel.nativeElement.text = hasErrors;
    }
}
