import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AdvancedUser } from "../../data-services/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";

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

    @ViewChild("myDataForm", { static: false }) dataFormComp: RadDataFormComponent;
    @ViewChild("resultLabel", { static: false }) resultLabel: ElementRef;

    get user(): AdvancedUser {
        return this._user;
    }

    public checkErrors() {
        const hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        this.resultLabel.nativeElement.text = hasErrors;
    }
}
