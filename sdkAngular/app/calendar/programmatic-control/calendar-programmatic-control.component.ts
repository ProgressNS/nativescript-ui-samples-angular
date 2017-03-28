import { Component, Injectable, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "tk-calendar-programmatic-control",
    templateUrl: "calendar-programmatic-control.component.html"
})
@Injectable()
export class CalendarProgrammaticControlComponent implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    
    constructor(private _page: Page) {
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