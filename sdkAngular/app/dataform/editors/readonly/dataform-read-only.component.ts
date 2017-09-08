import { Component, OnInit } from "@angular/core";
import { Booking } from "../../data-services/booking";
import { MovieConverter } from "../../data-services/movie-converter";
var data = require("../../data-services/airports.json")

@Component({
    moduleId: module.id,
    selector: "tk-dataform-read-only",
    templateUrl: "dataform-read-only.component.html",
        styleUrls: ['dataform-read-only.component.css']
})
export class DataformReadOnlyComponent implements OnInit {
    private _booking: TicketOrder;
    private _fromProviders: Array<String> = new Array<String>();
    private _movies: Array<Movie>;
    private _movieNames: Array<String>;
    private _isReadOnly: boolean;
    private _currentStatus: string;
    private _movieConverter: MovieConverter;

    constructor() { }

    get booking() {
        return this._booking;
    }

    get fromProviders(): Array<String> {
        return this._fromProviders;
    }

    ngOnInit() {
        this._booking = new TicketOrder();
        this._movieConverter = new MovieConverter(this.movies);

        for (var i = 0; i < data.airports.length; i++) {
            this._fromProviders.push(data.airports[i].FIELD2 + ", " + data.airports[i].FIELD5);
        }
        this.isReadOnly = true;
    }


    get isReadOnly(): boolean {
        return this._isReadOnly;
    }

    set isReadOnly(value: boolean) {
        this._isReadOnly = value;
        this.updateStatusText();
    }

    get currentStatus(): string {
        return this._currentStatus;
    }

    set currentStatus(value: string) {
        this._currentStatus = value;
    }

    get movies() {
        if (!this._movies) {
            this._movies = new Array<Movie>();
            this._movies.push(new Movie(123, "Zootopia"));
            this._movies.push(new Movie(217, "Captain America"));
            this._movies.push(new Movie(324, "The Jungle Book"));
        }
        return this._movies;
    }

    get movieNames() {
        if (!this._movieNames) {
            this._movieNames = this.movies.map((value: Movie) => value.name);
        }
        return this._movieNames;
    }

    get movieConverter() {
        return this._movieConverter;
    }

    private updateStatusText() {
        this.currentStatus = this.isReadOnly ? "Enable" : "Disable";
    }

    public onEnableDisable(args) {
        this.isReadOnly = !this.isReadOnly;
    }
}


export class Movie {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class TicketOrder {
    public movie: number = 123;
    public date: string = "2016-04-06";
    public time: string = "20:00";
    public type: string = "2D";
    public price: string = "9.50";
    public numberOfTickets: number = 2;
    public contactName: string = null;
    public contactPhone: string = null;
    public contactEmail: string = null;
    public agreeTerms: boolean = false;
    public to: string = "New York";
    public from: Array<String> = new Array("Belfast City, BHD", "City of Derry, LDY");

    constructor() {
    }
}