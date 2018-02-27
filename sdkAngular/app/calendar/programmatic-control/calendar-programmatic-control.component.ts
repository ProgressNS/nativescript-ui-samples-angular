import { Component, Injectable, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { RadCalendar } from "nativescript-ui-calendar";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-programmatic-control",
    templateUrl: "calendar-programmatic-control.component.html"
})
@Injectable()
export class CalendarProgrammaticControlComponent {
    constructor() {
    }

    @ViewChild("myCalendar") _calendar: RadCalendarComponent;
    
    onNavigateForwardTap() {
        this._calendar.nativeElement.navigateForward();
    }
    
    onNavigateBackTap() {
        this._calendar.nativeElement.navigateBack();
    }
    
    onGoToDateTap() {
        var date = new Date();
        this._calendar.nativeElement.goToDate(date);
    }
}
