import { Component, OnInit, ViewChild } from "@angular/core";
import { DataFormCommitMode } from "nativescript-ui-dataform";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { SegmentedBarItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";
import { User } from "../data-services/user";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-commit-modes",
    templateUrl: "dataform-commit-modes.component.html"
})
export class DataFormCommitModesComponent implements OnInit {
    private _commitMode;
    private _isEnabled: boolean;
    private _segmentedBarItems: Array<SegmentedBarItem>;
    private _user: User;
    private _text: string;

    constructor() {
    }

    ngOnInit() {
        this._user = new User();
        const items = new Array<SegmentedBarItem>();
        const item1 = new SegmentedBarItem();
        item1.title = "immediate";
        items.push(item1);
        const item2 = new SegmentedBarItem();
        item2.title = "lost focus";
        items.push(item2);
        const item3 = new SegmentedBarItem();
        item3.title = "manual";
        items.push(item3);
        this._segmentedBarItems = items;
    }

    @ViewChild('myCommitDataForm', { static: false }) myCommitDataFormComp: RadDataFormComponent;

    get commitMode() {
        return this._commitMode;
    }

    get segmentedBarItems() {
        return this._segmentedBarItems;
    }

    get user(): User {
        return this._user;
    }

    get text() {
        return this._text;
    }

    get isEnabled() {
        return this._isEnabled;
    }

    public onLoaded() {
        this.updateLabel();
    }

    public onTap() {
        this.myCommitDataFormComp.dataForm.commitAll();
    }

    public onSelectedIndexChanged(eventData: SelectedIndexChangedEventData) {
        switch (eventData.newIndex) {
            case 0:
                this._commitMode = DataFormCommitMode.Immediate;
                this._isEnabled = false;
                break;
            case 1:
                this._commitMode = DataFormCommitMode.OnLostFocus;
                this._isEnabled = false;
                break;
            case 2:
                this._commitMode = DataFormCommitMode.Manual;
                this._isEnabled = true;
                break;
        }
    }

    public onPropertyCommitted() {
        this.updateLabel();
    }

    public updateLabel() {
        if (this.myCommitDataFormComp.dataForm.editedObject) {
            this._text = null;
            this._text = this.formatString(this.myCommitDataFormComp.dataForm.editedObject);
        }
    }

    public formatString(originalString: string) {
        let formattedString: string = originalString.substring(1, originalString.length - 1);
        formattedString = formattedString.replace(/,/g, '\n');
        return formattedString;
    }
}
