import { Component, OnInit, Injectable } from "@angular/core";
import { Page } from "ui/page";
import { RadCalendar, CalendarMonthViewStyle, CalendarWeekViewStyle, CalendarYearViewStyle, CalendarMonthNamesViewStyle, CalendarViewMode, CalendarDayViewStyle } from "nativescript-ui-calendar";
import { CalendarStylesService } from "../calendar-styles.service";
import * as applicationModule from "application";
import { OptionsService } from "../../navigation/options/options.service";
import { Router } from '@angular/router';
import { OptionsExampleBase } from "../../options-example-base";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-cell-styling",
    templateUrl: "calendar-cell-styling.component.html",
    providers: [CalendarStylesService]
})
@Injectable()
export class CalendarCellStylingComponent extends OptionsExampleBase implements OnInit {
    private _monthViewStyle: CalendarMonthViewStyle;
    private _weekViewStyle: CalendarWeekViewStyle;
    private _yearViewStyle: CalendarYearViewStyle;
    private _dayViewStyle: CalendarDayViewStyle;
    private _monthNamesViewStyle: CalendarMonthNamesViewStyle;
    private _optionsParamName: string;
    private _viewMode;
    constructor(private _page: Page, private _calendarService: CalendarStylesService,
        private _optionsService: OptionsService, private _router: Router) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "eventsViewMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 1, paramName: this._optionsParamName, items: ["Week", "Month", "Month names", "Year", "Day"] };
        }
        this._viewMode = CalendarViewMode.Month;
    }

    // >> calendar-styling-init
    ngOnInit() {
        this._monthViewStyle = this._calendarService.getMonthViewStyle();
        this._monthNamesViewStyle = this._calendarService.getMonthNamesViewStyle();
        this._weekViewStyle = this._calendarService.getWeekViewStyle();
        this._yearViewStyle = this._calendarService.getYearViewStyle();
        this._dayViewStyle = this._calendarService.getDayViewStyle();
    }
    // << calendar-styling-init

    get viewMode() {
        return this._viewMode;
    }

    get monthViewStyle(): CalendarMonthViewStyle {
        return this._monthViewStyle;
    }

    get monthNamesViewStyle(): CalendarMonthNamesViewStyle {
        return this._monthNamesViewStyle;
    }

    get yearViewStyle(): CalendarYearViewStyle {
        return this._yearViewStyle;
    }

    get weekViewStyle(): CalendarWeekViewStyle {
        return this._weekViewStyle;
    }

    get dayViewStyle(): CalendarDayViewStyle {
        return this._dayViewStyle;
    }

    onYearTap() {
        this._viewMode = CalendarViewMode.Year;
    }

    onMonthNamesTap() {
        this._viewMode = CalendarViewMode.MonthNames;
    }

    onMonthTap() {
        this._viewMode = CalendarViewMode.Month;
    }

    onWeekTap() {
        this._viewMode = CalendarViewMode.Week;
    }

    onDayTap() {
        this._viewMode = CalendarViewMode.Day;
    }

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
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
                    case "Day":
                        this.onDayTap();
                        this.navigationParameters.selectedIndex = 4;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
