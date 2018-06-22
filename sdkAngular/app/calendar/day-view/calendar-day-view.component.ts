import { Component, OnInit } from "@angular/core";
import { CalendarDayEventsService } from "../calendar-day-events.service";
import { RadCalendar, CalendarEvent, CalendarDayViewEventSelectedData } from "nativescript-ui-calendar";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-day-view",
    templateUrl: "calendar-day-view.component.html",
    providers: [CalendarDayEventsService]
})

export class CalendarDayViewComponent implements OnInit {
    private _events: Array<CalendarEvent>;

    constructor(private _calendarService: CalendarDayEventsService) {

    }

    get eventSource() {
        return this._events;
    }

    ngOnInit() {
        this._events = this._calendarService.getCalendarDayEvents();
    }

    onDayViewEventSelected(args: CalendarDayViewEventSelectedData) {
        var event: CalendarEvent = args.eventData;
        alert(
            {
                title: "Event Selected",
                message: event.title,
                okButtonText: "OK"
            });
    }
}
