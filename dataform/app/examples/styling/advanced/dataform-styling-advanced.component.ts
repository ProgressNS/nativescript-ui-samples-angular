import { Component, OnInit } from "@angular/core";
import { Settings } from "../../data-services/settings";
import { android as androidApplication } from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";
import { EntityProperty, DataFormEventData, RadDataForm } from "nativescript-ui-dataform";

let colorLight = new Color("#CDDC39");
let colorDark = new Color("#4CAF50");
let colorGray = new Color("#F9F9F9");

@Component({
    moduleId: module.id,
    selector: "tk-dataform-styling-advanced",
    templateUrl: "dataform-styling-advanced.component.html"
})
export class DataformStylingAdvancedComponent implements OnInit {
    private _settings: Settings;
    private _prefModes: Array<String>;

    constructor() { }

    ngOnInit() {
        this._prefModes = new Array<String>();
        this._prefModes.push("LTE");
        this._prefModes.push("UMTS");
        this._prefModes.push("EDGE");
        this._settings = new Settings();
    }

    get settings(): Settings {
        return this._settings;
    }

    set settings(value: Settings) {
        this._settings = value;
    }

    get prefModes(): Array<String> {
        return this._prefModes;
    }

    set prefModes(value: Array<String>) {
        this._prefModes = value;
    }

    public dfEditorUpdate(args: DataFormEventData) {
        if (androidApplication) {
// >> angular-dataform-styling-propertyname
            switch (args.propertyName) {
                case "appVolume": this.editorSetupSliderAndroid(args.editor); break;
// << angular-dataform-styling-propertyname
                case "onlyOnWiFi": this.editorSetupSwitchAndroid(args.editor); break;
                case "networkLimit": this.editorSetupStepperAndroid(args.editor); break;
                case "networkPreference": this.editorSetupSegmentedEditorAndroid(args.editor); break;
            }
        } else  {
// >> dataform-styling-editortype
            const entityProperty: EntityProperty =
                (<RadDataForm>args.object).getPropertyByName(args.propertyName);
            switch (entityProperty.editor.type) {
                case "Slider": this.editorSetupSliderIOS(args.editor); break;
// << dataform-styling-editortype
                case "Switch": this.editorSetupSwitchIOS(args.editor); break;
                case "Stepper": this.editorSetupStepperIOS(args.editor); break;
                case "SegmentedEditor": this.editorSetupSegmentedEditorIOS(args.editor); break;
            }
        }
    }

    public editorSetupSwitchAndroid(editor) {
        const androidContext = editor.getEditorView().getContext();
        const customLayoutResourceId = androidContext.getResources().getIdentifier("custom_switch_editor_layout", "layout", androidContext.getPackageName());

        editor.setEditorLayout(customLayoutResourceId);
    }

    public editorSetupStepperAndroid(editor) {
        const numberPicker = editor.getEditorView();

        numberPicker.labelView().setTextColor(colorDark.android);
        numberPicker.decreaseView().setTextColor(colorDark.android);
        numberPicker.increaseView().setTextColor(colorDark.android);

        const background1 = new android.graphics.drawable.GradientDrawable();
        background1.setStroke(2, colorLight.android);
        numberPicker.rootView().setBackground(background1);

        const background2 = new android.graphics.drawable.GradientDrawable();
        background2.setStroke(2, colorLight.android);
        numberPicker.decreaseView().setBackground(background2);

        const background3 = new android.graphics.drawable.GradientDrawable();
        background3.setStroke(2, colorLight.android);
        numberPicker.increaseView().setBackground(background3);
    }

    public editorSetupSegmentedEditorAndroid(editor) {
        const radioGroup: android.widget.RadioGroup = <android.widget.RadioGroup>editor.getEditorView();
        radioGroup.setBackgroundColor(colorGray.android);
        radioGroup.setPadding(8, 8, 8, 8);

        const androidContext = editor.getEditorView().getContext();

        const segmentDividerResourceId = androidContext.getResources().getIdentifier("df_segment_divider", "drawable", androidContext.getPackageName());
        const segmentDivider = androidContext.getResources().getDrawable(segmentDividerResourceId);
        radioGroup.setShowDividers(android.widget.LinearLayout.SHOW_DIVIDER_MIDDLE);
        radioGroup.setDividerDrawable(segmentDivider);

        const segmentItemResourceId = androidContext.getResources().getIdentifier("df_segment_item", "drawable", androidContext.getPackageName());
        const segmentTextColorResourceId = androidContext.getResources().getIdentifier("df_segment_text_color", "color", androidContext.getPackageName());

        editor.setCustomizeButtons(new com.telerik.android.common.Procedure({
            apply(argument: android.widget.RadioButton) {
                const segmentItemDrawable = androidContext.getResources().getDrawable(segmentItemResourceId);
                const segmentTextColor = androidContext.getResources().getColorStateList(segmentTextColorResourceId);
                argument.setBackgroundDrawable(segmentItemDrawable);
                argument.setTextColor(segmentTextColor);
            }
        }));
    }

    public editorSetupSwitchIOS(editor) {
        const coreEditor = <UISwitch>editor.editor;
        if (coreEditor.tintColor === colorLight.ios) {
            return;
        }
        coreEditor.tintColor = colorLight.ios;
        coreEditor.onTintColor = colorLight.ios;
        coreEditor.thumbTintColor = colorDark.ios;
    }

    public editorSetupStepperIOS(editor) {
        editor.valueLabel.textColor = colorDark.ios;

        const coreEditor = <UIStepper>editor.editor;
        coreEditor.tintColor = colorLight.ios;

        for (let i = 0; i < coreEditor.subviews.count; i++) {
            if (coreEditor.subviews[i] instanceof UIButton) {
                (<UIButton>coreEditor.subviews[i]).imageView.tintColor = colorDark.ios;
            }
        }

        const labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
        labelDef.contentOffset = {
            horizontal: -64,
            vertical: 0
        };
    }

    public editorSetupSegmentedEditorIOS(editor) {
        const coreEditor = <UISegmentedControl>editor.editor;
        coreEditor.tintColor = colorDark.ios;
    }

    // >> angular-dataform-styling-advanced
    public editorSetupSliderAndroid(editor) {
        const coreEditor = <android.widget.SeekBar>editor.getEditorView();
        coreEditor.getThumb().setColorFilter(new android.graphics.PorterDuffColorFilter(colorDark.android, android.graphics.PorterDuff.Mode.SRC_IN));
        coreEditor.getProgressDrawable().setColorFilter(new android.graphics.PorterDuffColorFilter(colorLight.android, android.graphics.PorterDuff.Mode.SRC_IN));
    }

    public editorSetupSliderIOS(editor) {
        const coreEditor = <UISlider>editor.editor;
        coreEditor.tintColor = colorLight.ios;
        coreEditor.thumbTintColor = colorDark.ios;
    }
    // << angular-dataform-styling-advanced
}
