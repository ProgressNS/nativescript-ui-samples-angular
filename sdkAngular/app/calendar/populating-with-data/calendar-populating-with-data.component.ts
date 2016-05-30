import {Component, OnInit} from "@angular/core";
import {CalendarService} from "../calendar.service";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-populating-with-data",
    templateUrl: "calendar-populating-with-data.component.html",
    styleUrls: ["calendar-populating-with-data.component.css"],
    providers: [CalendarService]
})

export class RadCalendarPopulatingWithDataComponent implements OnInit {
    private _events: Array<calendarModule.CalendarEvent>;
    private _listItems: Array<calendarModule.CalendarEvent>;
    
    constructor(private _calendarService: CalendarService) {
        
    }
    
    get eventSource() {
        return this._events;
    }
    
    get myItems(): Array<calendarModule.CalendarEvent> {
        return this._listItems;
    }
    
    set myItems(value) {
        this._listItems = value;
    }
    
    ngOnInit() {
        this._events = this._calendarService.getCalendarEvents();
    }
    
    onDateSelected(args: calendarModule.CalendarSelectionEventData) {
        var calendar: calendarModule.RadCalendar = args.object;
        var date: Date = args.date;
        var events: Array<calendarModule.CalendarEvent> = calendar.getEventsForDate(date);
        this.myItems = events;
    }
}