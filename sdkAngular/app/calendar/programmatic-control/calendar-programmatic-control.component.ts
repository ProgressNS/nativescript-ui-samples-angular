import { Component, Injectable, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RadCalendar} from "nativescript-telerik-ui-pro/calendar";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-programmatic-control",
    templateUrl: "calendar-programmatic-control.component.html"
})
@Injectable()
export class CalendarProgrammaticControlComponent implements OnInit {
    private _calendar: RadCalendar;
    
    constructor(private _page: Page) {
    }
    
    ngOnInit() {
        this._calendar = <RadCalendar>this._page.getViewById("calendar");
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
