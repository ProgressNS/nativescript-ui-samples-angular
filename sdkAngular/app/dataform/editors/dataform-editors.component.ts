import { Component, OnInit } from "@angular/core";
import { TicketOrder } from "../data-services/ticket-order";
import { Movie } from "../data-services/movie";
import { MovieConverter } from "../data-services/movie-converter";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-editors",
    templateUrl: "dataform-editors.component.html"
})
export class DataFormEditorsComponent implements OnInit {
    private _ticketOrder: TicketOrder;
    private _movieConverter: MovieConverter;
    private _movies: Array<Movie>;
    private _movieNames: Array<String>;

    constructor() { }

    ngOnInit() {
        this._ticketOrder = new TicketOrder();

        this._movies = new Array<Movie>();
        this._movies.push(new Movie(123, "Zootopia"));
        this._movies.push(new Movie(217, "Captain America"));
        this._movies.push(new Movie(324, "The Jungle Book"));

        this._movieConverter = new MovieConverter(this._movies);
    }

    get ticketOrder() {
        return this._ticketOrder;
    }

    get movieConverter() {
        return this._movieConverter;
    }

    get movieNames() {
        if (!this._movieNames) {
            this._movieNames = this.movies.map((value: Movie) => value.name);
        }
        return this._movieNames;
    }

    get movies() {
        return this._movies;
    }
}