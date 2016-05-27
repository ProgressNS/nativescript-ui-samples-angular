import { Component, ViewChild, Inject } from "@angular/core";
import { Router } from "@angular/router-deprecated";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import * as frameModule from "ui/frame";

@Component({
    moduleId: module.id,
    selector: "calendar-view-modes",
    templateUrl: "calendar-view-modes.component.html"
})
export class CalendarViewModesComponent {

    constructor( @Inject(Page) private _page: Page, private _router: Router) {
        this._page.addEventListener("navigatingTo", this.onNavigationTo);
    }

    onYearTap() {
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.Year;
    }

    onMonthNamesTap() {
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.MonthNames;
    }

    onMonthTap() {
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.Month;
    }

    onWeekTap() {
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        calendar.viewMode = calendarModule.CalendarViewMode.Week;
    }

    public onNavigationTo(args) {
        console.log("onNavigationTo: Forward");
        if (args.isBackNavigation) {
            console.log("onNavigationTo: Backward");
        }
    }

    public onOptionsTapped() {
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");

        this._router.navigate(["Options", { selectedIndex: 0, items: ["Week", "Month", "Month names", "Year"] }]);
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}