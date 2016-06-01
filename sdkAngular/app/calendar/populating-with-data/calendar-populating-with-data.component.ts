import {Component, OnInit} from "@angular/core";
import {CalendarEventsService} from "../calendar-events.service";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");
// >> angular-calenda-populating-with-data
@Component({
    moduleId: module.id,
    selector: "calendar-populating-with-data",
    templateUrl: "calendar-populating-with-data.component.html",
    styleUrls: ["calendar-populating-with-data.component.css"],
    providers: [CalendarEventsService]
})

export class CalendarPopulatingWithDataComponent implements OnInit {
    private _events: Array<calendarModule.CalendarEvent>;
    private _listItems: Array<calendarModule.CalendarEvent>;
    
    constructor(private _calendarService: CalendarEventsService) {
        
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
// << angular-calenda-populating-with-data