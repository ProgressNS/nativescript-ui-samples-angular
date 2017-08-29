import { Component, OnInit } from "@angular/core";
import { Employee } from "../data-services/employee";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-image-labels",
    templateUrl: "dataform-image-labels.component.html"
})
export class DataformImageLabelsComponent implements OnInit {
    private _employee: Employee;

    constructor() {
    }

    ngOnInit() {
        this._employee = new Employee(null, null, null, null);
    }

    get employee(): Employee {
        return this._employee;
    }
}