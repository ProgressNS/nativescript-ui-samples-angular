import { Component, Inject } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-selection-modes",
    templateUrl: "calendar-selection-modes.component.html"
})
export class RadCalendarSelectionModesComponent {
    
    constructor(@Inject(Page) private _page: Page) {
    }
    
    onNoneTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.selectionMode = calendarModule.CalendarSelectionMode.None;
        calendar.reload();
    }
    
    onSingleTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.selectionMode = calendarModule.CalendarSelectionMode.Single;
        calendar.reload();
    }
    
    onMultipleTap() { 
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.selectionMode = calendarModule.CalendarSelectionMode.Multiple;
        calendar.reload();
    }
    
    onRangeTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.selectionMode = calendarModule.CalendarSelectionMode.Range;
        calendar.reload();
    }
}