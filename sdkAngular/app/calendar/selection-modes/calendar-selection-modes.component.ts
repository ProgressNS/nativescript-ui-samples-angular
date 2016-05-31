import { Component, Inject, OnInit } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-selection-modes",
    templateUrl: "calendar-selection-modes.component.html"
})
// >> angular-calendar-selection-modes
export class RadCalendarSelectionModesComponent implements OnInit{
    private _calendar: calendarModule.RadCalendar;
    constructor(@Inject(Page) private _page: Page) {
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
    }
    
    onNoneTap() {
        this._calendar.selectionMode = calendarModule.CalendarSelectionMode.None;
        this._calendar.reload();
    }
    
    onSingleTap() {
        this._calendar.selectionMode = calendarModule.CalendarSelectionMode.Single;
        this._calendar.reload();
    }
    
    onMultipleTap() { 
        this._calendar.selectionMode = calendarModule.CalendarSelectionMode.Multiple;
        this._calendar.reload();
    }
    
    onRangeTap() {
        this._calendar.selectionMode = calendarModule.CalendarSelectionMode.Range;
        this._calendar.reload();
    }
}
// << angular-calendar-selection-modes