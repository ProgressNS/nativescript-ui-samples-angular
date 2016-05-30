import { Component, Inject, OnInit } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-programatic-control",
    templateUrl: "calendar-programatic-control.component.html"
})
export class RadCalendarProgramaticControlComponent implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    
    constructor(@Inject(Page) private _page: Page) {
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
    }
    
    onNavigateForwardTap() {
        this._calendar.navigateForward();
    }
    
    onNavigateBackTap() {
        this._calendar.navigateBack();
    }
    
    onGoToDateTap() {
        var date = new Date();
        this._calendar.goToDate(date);
    }
}