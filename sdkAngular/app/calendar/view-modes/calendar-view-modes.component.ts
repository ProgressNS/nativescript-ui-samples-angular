import { Component, ViewChild, Inject, OnInit } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-view-modes",
    templateUrl: "calendar-view-modes.component.html"
})
// >> angular-calendar-view-modes
export class RadCalendarViewModesComponent implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    constructor(@Inject(Page) private _page: Page) {
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
    }
    
    onYearTap() {
        this._calendar.viewMode = calendarModule.CalendarViewMode.Year;
    }
    
    onMonthNamesTap() {
        this._calendar.viewMode = calendarModule.CalendarViewMode.MonthNames;
    }
    
    onMonthTap() { 
        this._calendar.viewMode = calendarModule.CalendarViewMode.Month;
    }
    
    onWeekTap() {
        this._calendar.viewMode = calendarModule.CalendarViewMode.Week;
    }
}
// << angular-calendar-view-modes