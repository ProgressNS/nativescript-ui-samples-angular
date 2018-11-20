import { Component } from "@angular/core";
import { Person } from "../data-services/person";
import { ios } from "tns-core-modules/application";

const person = require('../data-services/person-model.json');
const personMetadataPlain = require('../data-services/person-metadata.json');
const personMetadataGroups = require('../data-services/person-groups-metadata.json');

@Component({
    moduleId: module.id,
    selector: "tk-dataform-groups-json",
    templateUrl: "dataform-groups-json.component.html"
})
export class DataFormGroupsJsonComponent {
    private _personMetadataPlain;
    private _personMetadataGroups;
    private _person: Person;
    private _groupingEnabled: boolean;

    constructor() {
        this._groupingEnabled = true;
        this._person = JSON.parse(JSON.stringify(person));
        this._personMetadataPlain = JSON.parse(JSON.stringify(personMetadataPlain));
        this._personMetadataGroups = JSON.parse(JSON.stringify(personMetadataGroups));
    }

    get person(): Person {
        return this._person;
    }

    get personMetadata() {
        return this._groupingEnabled ? this._personMetadataGroups : this._personMetadataPlain;
    }

    get btnText() {
        return this._groupingEnabled ? "Disable Grouping" : "Enable Grouping";
    }

    public onGroupUpdate(args) {
        if (ios) {
            let nativeGroup: TKEntityPropertyGroupView = args.group;
            nativeGroup.collapsible = this._groupingEnabled;
        } else {
            let nativeGroup: com.telerik.widget.dataform.visualization.ExpandableEditorGroup = args.group;
            nativeGroup.setExpandable(this._groupingEnabled);
        }
    }

    public onTap(args) {
        this._groupingEnabled = !this._groupingEnabled;
    }
}