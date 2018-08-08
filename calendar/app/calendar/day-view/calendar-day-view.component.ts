import { Component, OnInit, ViewChild } from "@angular/core";
import { CalendarDayEventsService } from "../calendar-day-events.service";
import { CalendarEvent, CalendarDayViewEventSelectedData, CalendarDayViewStyle } from "nativescript-ui-calendar";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-day-view",
    templateUrl: "calendar-day-view.component.html",
    providers: [CalendarDayEventsService]
})

export class CalendarDayViewComponent implements OnInit {
    private _events: Array<CalendarEvent>;
    private _style: CalendarDayViewStyle;
    private _weekVisible: boolean;
    private _titleVisible: boolean;
    @ViewChild("myCalendar") _calendar: RadCalendarComponent;

    constructor(private _calendarService: CalendarDayEventsService) {

    }

    get eventSource() {
        return this._events;
    }

    ngOnInit() {
        this._events = this._calendarService.getCalendarDayEvents();
        this._style = new CalendarDayViewStyle();

        this._calendar.nativeElement.dayViewStyle = this._style;
        this._weekVisible = true;
        this._titleVisible = true;
    }

    onWeekTap(args: any) {
        this._weekVisible = !this._weekVisible;
        this._style.showWeek = this._weekVisible;
        args.object.text = this._weekVisible ? 'hide week' : 'show week';
    }

    onTitleTap(args: any) {
        this._titleVisible = !this._titleVisible;
        this._style.showTitle = this._titleVisible;
        args.object.text = this._titleVisible ? 'hide title' : 'show title';
    }

    onDayViewEventSelected(args: CalendarDayViewEventSelectedData) {
        const event: CalendarEvent = args.eventData;
        alert(
            {
                title: "Event Selected",
                message: event.title,
                okButtonText: "OK"
            });
    }
}
