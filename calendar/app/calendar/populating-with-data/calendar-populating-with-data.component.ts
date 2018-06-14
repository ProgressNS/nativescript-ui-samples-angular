import { Component, OnInit } from "@angular/core";
import { CalendarEventsService } from "../calendar-events.service";
import { RadCalendar, CalendarEvent, CalendarSelectionEventData } from "nativescript-ui-calendar";
// >> angular-calenda-populating-with-data
@Component({
    moduleId: module.id,
    selector: "tk-calendar-populating-with-data",
    templateUrl: "calendar-populating-with-data.component.html",
    styleUrls: ["calendar-populating-with-data.component.css"],
    providers: [CalendarEventsService]
})

export class CalendarPopulatingWithDataComponent implements OnInit {
    private _events: Array<CalendarEvent>;
    private _listItems: Array<CalendarEvent>;

    constructor(private _calendarService: CalendarEventsService) {

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

    onDateSelected(args: CalendarSelectionEventData) {
        const calendar: RadCalendar = args.object;
        const date: Date = args.date;
        const events: Array<CalendarEvent> = calendar.getEventsForDate(date);
        this.myItems = events;
    }
}
// << angular-calenda-populating-with-data
