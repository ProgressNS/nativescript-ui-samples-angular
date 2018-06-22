import { Component, OnInit } from "@angular/core";
import * as applicationModule from "tns-core-modules/application";
import * as imageSourceModule from "tns-core-modules/image-source";
import { Color } from "tns-core-modules/color";
import { PersonBase } from "../data-services/person";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-platform-specifics",
    templateUrl: "dataform-platform-specifics.component.html"
})
export class DataFormPlatformSpecificsComponent implements OnInit {
    private _person: PersonBase;

    constructor() {
    }

    ngOnInit() {
        this._person = new PersonBase("John", 23, "1993-05-16");
    }

    get person(): PersonBase {
        return this._person;
    }

    public onEditorUpdate(args) {
        if (args.propertyName == "age") {
            this.changeEditorSpacing(args.editor);
        }
        if (args.propertyName == "birthDate") {
            this.changeDateFormatting(args.editor);
        }
    }

    public onGroupUpdate(args) {
        this.updateIndicatorArrow(args.group);
    }

    private changeEditorSpacing(editor) {
        if (applicationModule.ios) {
            var labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
            labelDef.contentOffset = {
                horizontal: -25,
                vertical: 0
            };
        } else {
            editor.getHeaderView().setPadding(12, 12, 12, 48);
        }
    }

    private changeDateFormatting(editor) {
        if (applicationModule.ios) {
            var dateFormatter = NSDateFormatter.alloc().init();
            dateFormatter.dateFormat = "yyyy-MM-dd";
            editor.dateFormatter = dateFormatter;
        } else {
            var simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US);
            editor.setDateFormat(simpleDateFormat);
        }
    }

    private updateIndicatorArrow(group) {
        if (applicationModule.ios) {
            var redColor = (new Color("Green")).ios;
            var newFill = TKSolidFill.solidFillWithColor(redColor);
            group.titleView.indicatorView.fillColor = newFill;
        } else {
            var img = imageSourceModule.fromResource("ic_custom_arrow").android;
            group.expandButton().setImageBitmap(img);
        }
    }
}