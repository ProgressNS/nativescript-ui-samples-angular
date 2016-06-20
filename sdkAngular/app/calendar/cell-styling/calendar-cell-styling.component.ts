import { Component, OnInit, Inject } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import {CalendarStylesService} from "../calendar-styles.service";
import * as applicationModule from "application";
import { OptionsService } from "../../navigation/options/options.service";
import { Router } from "@angular/router-deprecated";
import { OptionsExampleBase } from "../../options-example-base";

@Component({
    moduleId: module.id,
    selector: "calendar-cell-styling",
    templateUrl: "calendar-cell-styling.component.html",
    providers:[CalendarStylesService]
})
export class CalendarCellStylingComponent extends OptionsExampleBase implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    private _monthViewStyle: calendarModule.CalendarMonthViewStyle;
    private _weekViewStyle: calendarModule.CalendarWeekViewStyle;
    private _yearViewStyle: calendarModule.CalendarYearViewStyle;
    private _monthNamesViewStyle: calendarModule.CalendarMonthNamesViewStyle;
    private _optionsParamName: string;
    private _viewMode;
    constructor( @Inject(Page) private _page: Page, private _calendarService: CalendarStylesService,
        private _optionsService: OptionsService, private _router: Router) {
        super();
         if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "eventsViewMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 1, paramName: this._optionsParamName, items: ["Week", "Month", "Month names", "Year"] };
        }
        this._viewMode = calendarModule.CalendarViewMode.Month;
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
        this._monthViewStyle = this._calendarService.getMonthViewStyle();
        this._monthNamesViewStyle = this._calendarService.getMonthNamesViewStyle();
        this._weekViewStyle = this._calendarService.getWeekViewStyle();
        this._yearViewStyle = this._calendarService.getYearViewStyle();
    }
    
    get viewMode() {
        return this._viewMode;
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
        this._viewMode = calendarModule.CalendarViewMode.Year;
    }
    
    onMonthNamesTap() { 
        this._viewMode = calendarModule.CalendarViewMode.MonthNames;
    }
    
    onMonthTap() { 
        this._viewMode = calendarModule.CalendarViewMode.Month;
    }
    
    onWeekTap() {
        this._viewMode = calendarModule.CalendarViewMode.Week;
    }
    
     public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName == this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "Week":
                        this.onWeekTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case "Month":
                        this.onMonthTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case "Month names":
                        this.onMonthNamesTap();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case "Year":
                        this.onYearTap();
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}