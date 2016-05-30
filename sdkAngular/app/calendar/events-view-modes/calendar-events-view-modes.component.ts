import {Component, OnInit, Inject} from "@angular/core";
import {CalendarService} from "../calendar.service";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "calendar-events-view-modes",
    templateUrl: "calendar-events-view-modes.component.html",
    providers: [CalendarService]
})

export class CalendarEventsViewModes implements OnInit {
    private _events: Array<calendarModule.CalendarEvent>;
    private _calendar: calendarModule.RadCalendar;
    constructor(@Inject(Page) private _page: Page ,private _calendarService: CalendarService) {
        
    }
    
    get eventSource() {
        return this._events;
    }
    
    ngOnInit() {
        this._events = this._calendarService.getCalendarEvents();
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
    }   
    
    onNoneTap() {
        this._calendar.eventsViewMode = calendarModule.CalendarEventsViewMode.None;
    }
    
    onInlineTap() {
        this._calendar.eventsViewMode = calendarModule.CalendarEventsViewMode.Inline;
    }
    
    onPopoverTap() {
        if (this._calendar.android || 
           (this._calendar.ios && UIDevice.currentDevice().userInterfaceIdiom === UIUserInterfaceIdiomPad)) {
            this._calendar.eventsViewMode = calendarModule.CalendarEventsViewMode.Popover;
        } else {
            this._calendar.eventsViewMode = calendarModule.CalendarEventsViewMode.Inline;
        }
    }
}