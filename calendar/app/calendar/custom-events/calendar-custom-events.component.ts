import { Component, OnInit } from "@angular/core";
import { CalendarCustomEventsService } from "../calendar-custom-events.service";
import { RadCalendar, CalendarEvent, CalendarCellTapEventData } from "nativescript-ui-calendar";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-custom-events",
    templateUrl: "calendar-custom-events.component.html",
    styleUrls: ["calendar-custom-events.component.css"],
    providers: [CalendarCustomEventsService]
})

export class CalendarCustomEventsComponent implements OnInit {
    private _events: Array<CalendarEvent>;
    private _listItems: Array<CalendarEvent>;

    constructor(private _calendarService: CalendarCustomEventsService) {
    }

    get eventSource() {
        return this._events;
    }

    get myItems(): Array<CalendarEvent> {
        return this._listItems;
    }

    set myItems(value) {
        this._listItems = value;
    }

    ngOnInit() {
        this._events = this._calendarService.getCalendarEvents();
    }

    onCellTap(args: CalendarCellTapEventData) {
        const calendar: RadCalendar = args.object;
        const date: Date = args.date;
        const events: Array<CalendarEvent> = calendar.getEventsForDate(date);
        this.myItems = events;
    }
}
