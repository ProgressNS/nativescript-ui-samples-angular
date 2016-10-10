import { Component, OnInit } from "@angular/core";
import { TicketOrder } from "../data-services/ticket-order";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-editors",
    templateUrl: "dataform-editors.component.html"
})
export class DataFormEditorsComponent implements OnInit {
    private _ticketOrder: TicketOrder;
    private _movies: Array<String>;

    constructor() { }

    ngOnInit() {
        this._ticketOrder = new TicketOrder();
        this._movies = new Array<String>();
        this._movies.push("Zootopia");
        this._movies.push("Captain America");
        this._movies.push("The Jungle Book");
    }

    get ticketOrder() {
        return this._ticketOrder;
    }

    get movies() {
        return this._movies;
    }
}