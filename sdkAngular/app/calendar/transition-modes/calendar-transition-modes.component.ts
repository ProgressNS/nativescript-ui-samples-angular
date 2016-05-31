import { Component, Inject, OnInit } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Component({
    moduleId: module.id,
    selector: "calendar-transition-modes",
    templateUrl: "calendar-transition-modes.component.html"
})
export class CalendarTransitionModesComponent implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    constructor(@Inject(Page) private _page: Page) {
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
    }
    
    // common
    onNoneTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.None;
    }
    
    onSlideTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Slide;
    }
    
    onStackTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Stack;
    }
    
    // android
    onPlainTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Plain;
    }
    
    onFreeTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Free;
    }
    
    onComboTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Combo;
    }
    
    onOverlapTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Overlap;
    }
    
    //ios
    onFlipTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Flip;
    }
    
    onFoldTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Fold;
    }
    
    onFloatTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Float;
    }
    
    onRotateTap() {
        this._calendar.transitionMode = calendarModule.CalendarTransitionMode.Rotate;
    }
}