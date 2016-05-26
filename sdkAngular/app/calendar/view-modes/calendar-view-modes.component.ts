import { Component, ViewChild, Inject } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-view-modes",
    templateUrl: "calendar-view-modes.component.html"
})
export class CalendarViewModesComponent {
    
    constructor(@Inject(Page) private _page: Page) {
    }
    
    onYearTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.Year;
    }
    
    onMonthNamesTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.MonthNames;
    }
    
    onMonthTap() { 
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.Month;
    }
    
    onWeekTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.Week;
    }
}