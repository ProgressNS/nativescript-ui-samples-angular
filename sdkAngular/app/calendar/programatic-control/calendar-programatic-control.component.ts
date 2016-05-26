import { Component, ViewChild, Inject } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-programatic-control",
    templateUrl: "calendar-programatic-control.component.html"
})
export class CalendarProgramaticControlComponent {
    
    constructor(@Inject(Page) private _page: Page) {
    }
    
    onNavigateForwardTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.navigateForward();
    }
    
    onNavigateBackTap() {
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.navigateBack();
    }
    
    onGoToDateTap() {
        var date = new Date();
        var calendar:calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.goToDate(date);
    }
}