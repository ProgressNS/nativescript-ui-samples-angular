// >> dataform-custom-editors-component
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { PersonBase } from "../../data-services/person";
import { ButtonEditorHelper } from "../../data-services/helper";
import { FontStyles, PropertyEditor, RadDataForm } from "nativescript-ui-dataform";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { android as androidApplication } from "tns-core-modules/application";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-custom-editors",
    templateUrl: "dataform-custom-editors.component.html",
    styleUrls: ['dataform-custom-editors.component.css']
})
export class DataformCustomEditorsComponent implements OnInit, AfterViewInit {
    private _person: PersonBase;
    private _nameEditor: PropertyEditor;
    private _ageEditor: PropertyEditor;
    private _birthDateEditor: PropertyEditor;
    private _buttonValue: any;
    private _buttonEditorHelper;

    constructor() {
    }

    @ViewChild("myDataForm") dataFormComponent: RadDataFormComponent;

    ngOnInit() {
        this._person = new PersonBase("John", 23, "1993-05-16");
    }

    ngAfterViewInit() {

    }

    get person(): PersonBase {
        return this._person;
    }

    public editorNeedsView(args) {
        if (androidApplication) {
            this._buttonEditorHelper = new ButtonEditorHelper();
            this._buttonEditorHelper.editor = args.object;
            var androidEditorView: android.widget.Button = new android.widget.Button(args.context);
            var that = this;
            androidEditorView.setOnClickListener(new android.view.View.OnClickListener({
                onClick(view: android.view.View) {
                    that.handleTap(view, args.object);
                }
            }));
            args.view = androidEditorView;
            this.updateEditorValue(androidEditorView, this._person.age);
        } else {
            this._buttonEditorHelper = new ButtonEditorHelper();
            this._buttonEditorHelper.editor = args.object;
            var iosEditorView = UIButton.buttonWithType(UIButtonType.System);
            iosEditorView.contentHorizontalAlignment = UIControlContentHorizontalAlignment.Left;
            iosEditorView.addTargetActionForControlEvents(this._buttonEditorHelper, "handleTap:", UIControlEvents.TouchUpInside);
            args.view = iosEditorView;
        }
    }

    public editorHasToApplyValue(args) {
        this._buttonEditorHelper.updateEditorValue(args.view, args.value);
    }

    public editorNeedsValue(args) {
        args.value = this._buttonEditorHelper.buttonValue;
    }

    public updateEditorValue(editorView, value) {
        this._buttonEditorHelper.buttonValue = value;
        editorView.setText(this._buttonEditorHelper.buttonValue + " (tap to increase)");
    }

    public handleTap(editorView, editor) {
        var newValue = this._buttonEditorHelper.buttonValue + 1;
        this.updateEditorValue(editorView, newValue);
        editor.notifyValueChanged();
    }
}
// << dataform-custom-editors-component