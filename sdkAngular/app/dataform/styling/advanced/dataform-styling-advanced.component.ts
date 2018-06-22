import { Component, OnInit } from "@angular/core";
import { Settings } from "../../data-services/settings";
import * as applicationModule from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";
import * as viewModule from "tns-core-modules/ui/core/view";
import { EntityProperty, DataFormEventData, RadDataForm } from "nativescript-ui-dataform";

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
        if (applicationModule.android) {
// >> angular-dataform-styling-propertyname
            switch (args.propertyName) {
                case "appVolume": this.editorSetupSliderAndroid(args.editor); break;
// << angular-dataform-styling-propertyname
                case "onlyOnWiFi": this.editorSetupSwitchAndroid(args.editor); break;
                case "networkLimit": this.editorSetupStepperAndroid(args.editor); break;
                case "networkPreference": this.editorSetupSegmentedEditorAndroid(args.editor); break;
            }
        } else if (applicationModule.ios) {
// >> dataform-styling-editortype
            var entityProperty : EntityProperty =
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
        var androidContext = editor.getEditorView().getContext();
        var customLayoutResourceId = androidContext.getResources().getIdentifier("custom_switch_editor_layout", "layout", androidContext.getPackageName());

        editor.setEditorLayout(customLayoutResourceId);
    }

    public editorSetupStepperAndroid(editor) {
        var numberPicker: com.telerik.widget.numberpicker.RadNumberPicker = <com.telerik.widget.numberpicker.RadNumberPicker>editor.getEditorView();

        numberPicker.labelView().setTextColor(colorDark.android);
        numberPicker.decreaseView().setTextColor(colorDark.android);
        numberPicker.increaseView().setTextColor(colorDark.android);

        var background1 = new android.graphics.drawable.GradientDrawable();
        background1.setStroke(2, colorLight.android);
        numberPicker.rootView().setBackground(background1);

        var background2 = new android.graphics.drawable.GradientDrawable();
        background2.setStroke(2, colorLight.android);
        numberPicker.decreaseView().setBackground(background2);

        var background3 = new android.graphics.drawable.GradientDrawable();
        background3.setStroke(2, colorLight.android);
        numberPicker.increaseView().setBackground(background3);
    }

    public editorSetupSegmentedEditorAndroid(editor) {
        var radioGroup: android.widget.RadioGroup = <android.widget.RadioGroup>editor.getEditorView();
        radioGroup.setBackgroundColor(colorGray.android);
        radioGroup.setPadding(8, 8, 8, 8);

        var androidContext = editor.getEditorView().getContext();

        var segmentDividerResourceId = androidContext.getResources().getIdentifier("df_segment_divider", "drawable", androidContext.getPackageName());
        var segmentDivider = androidContext.getResources().getDrawable(segmentDividerResourceId);
        radioGroup.setShowDividers(android.widget.LinearLayout.SHOW_DIVIDER_MIDDLE);
        radioGroup.setDividerDrawable(segmentDivider);

        var segmentItemResourceId = androidContext.getResources().getIdentifier("df_segment_item", "drawable", androidContext.getPackageName());
        var segmentTextColorResourceId = androidContext.getResources().getIdentifier("df_segment_text_color", "color", androidContext.getPackageName());

        editor.setCustomizeButtons(new com.telerik.android.common.Procedure<android.widget.RadioButton>({
            apply(argument) {
                var segmentItemDrawable = androidContext.getResources().getDrawable(segmentItemResourceId);
                var segmentTextColor = androidContext.getResources().getColorStateList(segmentTextColorResourceId);
                argument.setBackgroundDrawable(segmentItemDrawable);
                argument.setTextColor(segmentTextColor);
                argument.getLayoutParams().setMargins(0, 0, 0, 0);
            }
        }));
    }

    public editorSetupSwitchIOS(editor) {
        var coreEditor = <UISwitch>editor.editor;
        if (coreEditor.tintColor == colorLight.ios) {
            return;
        }
        coreEditor.tintColor = colorLight.ios;
        coreEditor.onTintColor = colorLight.ios;
        coreEditor.thumbTintColor = colorDark.ios;
    }

    public editorSetupStepperIOS(editor) {
        editor.valueLabel.textColor = colorDark.ios;

        var coreEditor = <UIStepper>editor.editor;
        coreEditor.tintColor = colorLight.ios;

        for (var i = 0; i < coreEditor.subviews.count; i++) {
            if (coreEditor.subviews[i] instanceof UIButton) {
                coreEditor.subviews[i].imageView.tintColor = colorDark.ios;
            }
        }

        var labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
        labelDef.contentOffset = {
            horizontal: -64,
            vertical: 0
        };
    }

    public editorSetupSegmentedEditorIOS(editor) {
        var coreEditor = <UISegmentedControl>editor.editor;
        coreEditor.tintColor = colorDark.ios;
    }

    // >> angular-dataform-styling-advanced
    public editorSetupSliderAndroid(editor) {
        var coreEditor = <android.widget.SeekBar>editor.getEditorView();
        coreEditor.getThumb().setColorFilter(new android.graphics.PorterDuffColorFilter(colorDark.android, android.graphics.PorterDuff.Mode.SRC_IN));
        coreEditor.getProgressDrawable().setColorFilter(new android.graphics.PorterDuffColorFilter(colorLight.android, android.graphics.PorterDuff.Mode.SRC_IN));
    }

    public editorSetupSliderIOS(editor) {
        var coreEditor = <UISlider>editor.editor;
        coreEditor.tintColor = colorLight.ios;
        coreEditor.thumbTintColor = colorDark.ios;
    }
    // << angular-dataform-styling-advanced
}



var colorLight = new Color("#CDDC39");
var colorDark = new Color("#4CAF50");
var colorGray = new Color("#F9F9F9");
declare module com {
    module telerik {
        module android {
            module common {
                class Procedure<T>{
                    constructor(imp);
                }
            }
        }
        module widget {
            class RadioGroup {
                setPadding(l, t, r, b);
            }

            module numberpicker {
                class RadNumberPicker {
                    labelView();
                    decreaseView();
                    increaseView();
                    rootView;
                }
            }
        }
    }
}

declare module android {
    module graphics {
        module PorterDuff {
            class Mode {
                static SRC_IN;
            }

        }
        class PorterDuffColorFilter {
            constructor(arg1, arg2);

        }
        module drawable {
            class GradientDrawable {
                setStroke(width, stroke);
            }
        }
    }
    module widget {

        class LinearLayout {
            labelView();
            decreaseView();
            increaseView();
            static SHOW_DIVIDER_MIDDLE;
        }
        class RadioGroup {
            setBackgroundColor(arg);
            setPadding(l, t, r, b);
            setShowDividers(arg);
            setDividerDrawable(arg);
        }
        class SeekBar {
            getThumb();
            getProgressDrawable();
        }

        class RadioButton {

        }
    }
}

declare class UIStepper {
    subviews: any;
    tintColor;
}

declare class UISwitch {
    subviews: any;
    onTintColor;
    thumbTintColor
    tintColor;
}

declare class UIButton {

}

declare class UISlider {
    tintColor;
    thumbTintColor;
}

declare class UISegmentedControl {
    tintColor;
}
