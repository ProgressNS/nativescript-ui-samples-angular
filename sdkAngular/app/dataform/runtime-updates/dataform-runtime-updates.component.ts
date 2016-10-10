import { Component, OnInit, ViewChild } from "@angular/core";
import { Button } from "ui/button";
import * as dataformAngularModule from "nativescript-telerik-ui-pro/dataform/angular";
import { PropertyEditor } from "nativescript-telerik-ui-pro/dataform";
import { Person } from "../data-services/person";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-runtime-updates",
    templateUrl: "dataform-runtime-updates.component.html"
})
export class DataFormRuntimeUpdatesComponent implements OnInit {
    private _counter: number;
    private _person: Person;

    constructor() {
    }

    ngOnInit() {
        this._person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
        this._counter = 0;
    }

    @ViewChild('myRuntimeDataFormComp') myRuntimeDataFormComp: dataformAngularModule.RadDataFormComponent;

    get person(): Person {
        return this._person;
    }

    public onTapRuntime(args) {
        var button = args.object as Button;
        var newText;
        switch (this._counter) {
            case 0:
                this.changeDisplayName("Full Name");
                button.text = "name: hidden true";
                break;
            case 1:
                this.changeHidden(true);
                button.text = "name: hidden false";
                break;
            case 2:
                this.changeHidden(false);
                button.text = "age: editor";
                break;
            case 3:
                this.changeEditor();
                button.text = "name: fill color";
                break;
            case 4:
                this.changeEditorFill();
                button.text = "name: stroke";
                break;
            case 5:
                this.changeEditorStroke();
                button.text = "Main Info: collapsible false";
                break;
            case 6:
                this.changeGroupCollapsible(false);
                button.text = "Main Info: collapsible true";
                break;
            case 7:
                this.changeGroupCollapsible(true);
                button.text = "Main Info: text size";
                break;
            case 8:
                this.changeGroupLabelTextSize();
                button.text = "Main Info: text color";
                break;
            case 9:
                this.changeGroupLabelTextColor();
                button.text = "Main Info: name";
                break;
            case 10:
                this.changeGroupName();
                button.text = "name: display name";
                break;
            default:
                this.changeDisplayName("Name " + this._counter);
                button.text = "name: display name";
                break;
        }
        this._counter++;
    }

    public changeDisplayName(value) {
        var property = this.myRuntimeDataFormComp.dataForm.getPropertyByName("name");
        property.displayName = value;
    }

    public changeHidden(value) {
        var property = this.myRuntimeDataFormComp.dataForm.getPropertyByName("name");
        property.hidden = value;
    }

    public changeEditor() {
        var property = this.myRuntimeDataFormComp.dataForm.getPropertyByName("age");
        var propertyEditor = new PropertyEditor();
        propertyEditor.type = "Slider";
        property.editor = propertyEditor;
    }

    public changeEditorFill() {
        var property = this.myRuntimeDataFormComp.dataForm.getPropertyByName("name");
        property.editor.style.fillColor = "LightBlue";
    }

    public changeEditorStroke() {
        var property = this.myRuntimeDataFormComp.dataForm.getPropertyByName("name");
        property.editor.style.strokeWidth = 4;
        property.editor.style.strokeColor = "Yellow";
    }

    public changeGroupCollapsible(value) {
        var group = this.myRuntimeDataFormComp.dataForm.getGroupByName("Main Info");
        group.collapsible = value;
    }

    public changeGroupLabelTextSize() {
        var group = this.myRuntimeDataFormComp.dataForm.getGroupByName("Main Info");
        group.titleStyle.labelTextSize = 20;
    }

    public changeGroupLabelTextColor() {
        var group = this.myRuntimeDataFormComp.dataForm.getGroupByName("Main Info");
        group.titleStyle.labelTextColor = "Blue";
    }

    public changeGroupName() {
        var group = this.myRuntimeDataFormComp.dataForm.getGroupByName("Main Info");
        group.name = "General";
    }
}