import { Component, OnInit, Inject } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import {CalendarService} from "../calendar.service";

@Component({
    moduleId: module.id,
    selector: "calendar-cell-styling",
    templateUrl: "calendar-cell-styling.component.html",
    providers:[CalendarService]
})
export class CalendarCellStylingComponent implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    private _monthViewStyle: calendarModule.CalendarMonthViewStyle;
    private _weekViewStyle: calendarModule.CalendarWeekViewStyle;
    private _yearViewStyle: calendarModule.CalendarYearViewStyle;
    private _monthNamesViewStyle: calendarModule.CalendarMonthNamesViewStyle;
    
    constructor(@Inject(Page) private _page: Page, private _calendarService: CalendarService) {
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        this._monthViewStyle = this._calendarService.getMonthViewStyle();
        this._monthNamesViewStyle = this._calendarService.getMonthNamesViewStyle();
        this._weekViewStyle = this._calendarService.getWeekViewStyle();
        this._yearViewStyle = this._calendarService.getYearViewStyle();
    }
    
    get monthViewStyle(): calendarModule.CalendarMonthViewStyle {
        return this._monthViewStyle;
    }
    
    get monthNamesViewStyle(): calendarModule.CalendarMonthNamesViewStyle {
        return this._monthNamesViewStyle;
    }
    
    get yearViewStyle(): calendarModule.CalendarYearViewStyle {
        return this._yearViewStyle;
    }
    
    get weekViewStyle(): calendarModule.CalendarWeekViewStyle {
        return this._weekViewStyle;
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