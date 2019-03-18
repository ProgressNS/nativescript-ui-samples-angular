import { Component, OnInit } from "@angular/core";
import { Observable } from "tns-core-modules/data/observable";
import { PropertyConverter } from "nativescript-ui-dataform";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-datetime",
    templateUrl: "dataform-datetime.component.html"
})
export class DataFormDateTimeComponent extends Observable implements OnInit {
    private _datesCollection: DatesCollection;
    private _timestampConverter: TimestampConverter;

    ngOnInit() {
        this._timestampConverter = new TimestampConverter();
        this.onSetDefaults();
    }

    onSetDefaults() {
        const stringDate = "1999-08-11";
        const dateDate = new Date(1999, 7, 11);
        const timestampDate = (new Date(1999, 7, 11)).getTime();
        const stringTime = "11:04";
        const dateTime = new Date(1999, 7, 11, 11, 4);
        const timestampTime = (new Date(1999, 7, 11, 11, 4)).getTime();
        this._datesCollection = new DatesCollection(stringDate, dateDate, timestampDate, stringTime, dateTime, timestampTime);
    }

    onSetEmpty() {
        const stringDate = "";
        const dateDate = null;
        const timestampDate = 0;
        const stringTime = "";
        const dateTime = null;
        const timestampTime = 0;
        this._datesCollection = new DatesCollection(stringDate, dateDate, timestampDate, stringTime, dateTime, timestampTime);
    }

    onLogDates() {
        console.dir(this.datesCollection);
    }

    get datesCollection(): DatesCollection {
        return this._datesCollection;
    }

    get timestampConverter() {
        return this._timestampConverter;
    }
}

class TimestampConverter implements PropertyConverter {
    convertFrom(timestamp: number) {
        const date = timestamp ? new Date(timestamp) : null;
        const result = date === null ? null : date.toJSON();
        return result;
    }

    convertTo(dateString: string) {
        const date = new Date(dateString);
        const result = date ? date.getTime() : 0;
        return result;
    }
}

class DatesCollection {
    public stringDate: string;
    public dateDate: Date;
    public timestampDate: number;
    public stringTime: string;
    public dateTime: Date;
    public timestampTime: number;

    constructor(stringDate: string, dateDate: Date, timestampDate: number, stringTime: string, dateTime: Date, timestampTime: number) {
        this.stringDate = stringDate;
        this.dateDate = dateDate;
        this.timestampDate = timestampDate;
        this.stringTime = stringTime;
        this.dateTime = dateTime;
        this.timestampTime = timestampTime;
    }
}