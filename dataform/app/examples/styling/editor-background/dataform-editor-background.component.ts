import { Component, OnInit } from "@angular/core";
import { Employee } from "../../data-services/employee";
import { layout } from "tns-core-modules/utils/utils";
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
        const entityProperty = (<RadDataForm>args.object).getPropertyByName(args.propertyName);
        const editor = args.editor;
        const editorType = entityProperty.editor.type;

        if (!this._editorNeedsUpdate(editorType)) {
            return;
        }

        // >> angular-dataform-background-update
        if (ios) {
            // Update editor padding
            const editorInsets = new UIEdgeInsets({ top: this._editorPaddingVertical, left: this._editorPaddingHorizontal, bottom: this._editorPaddingVertical, right: this._editorPaddingHorizontal });
            editor.style.insets = editorInsets;

            // Update core editor padding
            const coreEditorInsets = new UIEdgeInsets({ top: this._coreEditorPaddingVertical, left: this._coreEditorPaddingHorizontal, bottom: this._coreEditorPaddingVertical, right: this._coreEditorPaddingHorizontal });
            if (this._editorHasValueLabel(editorType)) {
                editor.showAccessoryImage = false;
                editor.editorValueLabel.textInsets = coreEditorInsets;
            } else if (this._editorIsTextField(editorType)) {
                editor.editor.textInsets = coreEditorInsets;
            }

            // Update core editor background
            const layer = this._editorHasValueLabel(editorType) ? editor.editorValueLabel.layer : editor.editor.layer;
            layer.borderColor = this._strokeColor.ios.CGColor;
            layer.borderWidth = this._strokeWidth;
            layer.cornerRadius = this._cornerRadius;
        } else {
            // Update editor padding
            const editorOffsetH = layout.toDevicePixels(this._coreEditorPaddingHorizontal);
            const editorOffsetV = layout.toDevicePixels(this._coreEditorPaddingVertical);
            editor.rootLayout().setPadding(editorOffsetH, editorOffsetV, editorOffsetH, editorOffsetV);

            // Update core editor padding
            const coreEditorView = editor.getEditorView();
            const textOffsetH = layout.toDevicePixels(this._coreEditorPaddingHorizontal);
            const textOffsetV = layout.toDevicePixels(this._coreEditorPaddingVertical);
            coreEditorView.setPadding(textOffsetH, textOffsetV, textOffsetH, textOffsetV);

            // Update core editor background
            const drawable = new android.graphics.drawable.GradientDrawable();
            drawable.setCornerRadius(layout.toDevicePixels(this._cornerRadius));
            drawable.setStroke(layout.toDevicePixels(this._strokeWidth), this._strokeColor.android);
            drawable.setColor(this._fillColor.android);
            coreEditorView.setBackgroundDrawable(drawable);
        }
        // << angular-dataform-background-update
    }

    private _editorNeedsUpdate(type) {
        return this._editorHasValueLabel(type) || this._editorIsTextField(type);
    }

    private _editorHasValueLabel(type) {
        return type === "DatePicker" ||
            type === "TimePicker" ||
            type === "Picker";
    }

    private _editorIsTextField(type) {
        return type === "Text" ||
            type === "Email" ||
            type === "Password" ||
            type === "Phone" ||
            type === "Number" ||
            type === "Decimal";
    }
}