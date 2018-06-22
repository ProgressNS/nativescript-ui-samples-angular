import { Component, OnInit } from "@angular/core";
import { Employee } from "../../data-services/employee";
import * as utilsModule from "tns-core-modules/utils/utils";
import { ios } from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";
import { RadDataForm, DataFormEventData } from "nativescript-ui-dataform";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-editor-background",
    templateUrl: "dataform-editor-background.component.html"
})
export class DataFormEditorBackgroundComponent implements OnInit {
    private _employee: Employee;
    private _editorPaddingHorizontal = 10;
    private _editorPaddingVertical = 5;
    private _coreEditorPaddingHorizontal = 7;
    private _coreEditorPaddingVertical = 3;
    private _strokeWidth = 1;
    private _cornerRadius = 4;
    private _strokeColor = new Color("DarkGray");
    private _fillColor = new Color("#00000000");

    constructor() {
    }

    ngOnInit() {
        this._employee = new Employee(null, null, null, null);
    }

    get employee(): Employee {
        return this._employee;
    }


    public dfEditorUpdate(args: DataFormEventData) {
        var entityProperty = (<RadDataForm>args.object).getPropertyByName(args.propertyName);
        var editor = args.editor;
        var editorType = entityProperty.editor.type;

        if (!this._editorNeedsUpdate(editorType)) {
            return;
        }

        // >> angular-dataform-background-update
        if (ios) {
            // Update editor padding
            var editorInsets = new UIEdgeInsets({ top: this._editorPaddingVertical, left: this._editorPaddingHorizontal, bottom: this._editorPaddingVertical, right: this._editorPaddingHorizontal });
            editor.style.insets = editorInsets;

            // Update core editor padding
            var coreEditorInsets = new UIEdgeInsets({ top: this._coreEditorPaddingVertical, left: this._coreEditorPaddingHorizontal, bottom: this._coreEditorPaddingVertical, right: this._coreEditorPaddingHorizontal });
            if (this._editorHasValueLabel(editorType)) {
                editor.showAccessoryImage = false;
                editor.editorValueLabel.textInsets = coreEditorInsets;
            } else if (this._editorIsTextField(editorType)) {
                editor.editor.textInsets = coreEditorInsets;
            }

            // Update core editor background
            var layer = this._editorHasValueLabel(editorType) ? editor.editorValueLabel.layer : editor.editor.layer;
            layer.borderColor = this._strokeColor.ios.CGColor;
            layer.borderWidth = this._strokeWidth;
            layer.cornerRadius = this._cornerRadius;
        } else {
            // Update editor padding
            var editorOffsetH = utilsModule.layout.toDevicePixels(this._coreEditorPaddingHorizontal);
            var editorOffsetV = utilsModule.layout.toDevicePixels(this._coreEditorPaddingVertical);
            editor.rootLayout().setPadding(editorOffsetH, editorOffsetV, editorOffsetH, editorOffsetV);

            // Update core editor padding
            var coreEditorView = editor.getEditorView();
            var textOffsetH = utilsModule.layout.toDevicePixels(this._coreEditorPaddingHorizontal);
            var textOffsetV = utilsModule.layout.toDevicePixels(this._coreEditorPaddingVertical);
            coreEditorView.setPadding(textOffsetH, textOffsetV, textOffsetH, textOffsetV);

            // Update core editor background
            var drawable = new android.graphics.drawable.GradientDrawable();
            drawable.setCornerRadius(utilsModule.layout.toDevicePixels(this._cornerRadius));
            drawable.setStroke(utilsModule.layout.toDevicePixels(this._strokeWidth), this._strokeColor.android);
            drawable.setColor(this._fillColor.android);
            coreEditorView.setBackgroundDrawable(drawable);
        }
        // << angular-dataform-background-update
    }

    private _editorNeedsUpdate(type) {
        return this._editorHasValueLabel(type) || this._editorIsTextField(type);
    }

    private _editorHasValueLabel(type) {
        return type == "DatePicker" ||
            type == "TimePicker" ||
            type == "Picker";
    }

    private _editorIsTextField(type) {
        return type == "Text" ||
            type == "Email" ||
            type == "Password" ||
            type == "Phone" ||
            type == "Number" ||
            type == "Decimal";
    }
}