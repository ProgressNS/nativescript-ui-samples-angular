import { ObservableArray } from "tns-core-modules/data/observable-array";

export class ExampleItem {
    public titleRoot?: String;
    constructor(public title?: string, public path?: string, public subItems?: Array<ExampleItem>) {
    }
}