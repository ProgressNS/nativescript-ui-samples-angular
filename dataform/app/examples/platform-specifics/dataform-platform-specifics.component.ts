import { Component, OnInit } from "@angular/core";
import { ios } from "tns-core-modules/application";
import { fromResource } from "tns-core-modules/image-source";
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
        if (args.propertyName === "age") {
            this.changeEditorSpacing(args.editor);
        }
        if (args.propertyName === "birthDate") {
            this.changeDateFormatting(args.editor);
        }
    }

    public onGroupUpdate(args) {
        this.updateIndicatorArrow(args.group);
    }

    private changeEditorSpacing(editor) {
        if (ios) {
            const editorView = editor.editorCore;
            editorView.labelOffset = 12;
        } else {
            editor.getHeaderView().setPadding(12, 12, 12, 48);
        }
    }

    private changeDateFormatting(editor) {
        if (ios) {
            const dateFormatter = NSDateFormatter.alloc().init();
            dateFormatter.dateFormat = "yyyy-MM-dd";
            editor.dateFormatter = dateFormatter;
        } else {
            const simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US);
            editor.setDateFormat(simpleDateFormat);
        }
    }

    private updateIndicatorArrow(group) {
        if (ios) {
            const redColor = (new Color("Green")).ios;
            const newFill = TKSolidFill.solidFillWithColor(redColor);
            group.titleView.indicatorView.fillColor = newFill;
        } else {
            const img = fromResource("ic_custom_arrow").android;
            group.expandButton().setImageBitmap(img);
        }
    }
}