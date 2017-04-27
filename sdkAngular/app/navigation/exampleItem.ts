import { ObservableArray } from "tns-core-modules/data/observable-array";

export class ExampleItem {
    constructor(public title?: string, public path?: string, public subItems?: Array<ExampleItem>) {
    }
}