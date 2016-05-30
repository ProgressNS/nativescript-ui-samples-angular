import { Component, ViewChild, Inject } from "@angular/core";
import { Router } from "@angular/router-deprecated";
import { Page, NavigatedData } from "ui/page";
import { OptionsService } from "../../navigation/options/options.service";
import { RadCalendar, CalendarViewMode } from "nativescript-telerik-ui-pro/calendar";
import * as frameModule from "ui/frame";
import * as applicationModule from "application";

@Component({
    moduleId: module.id,
    selector: "calendar-view-modes",
    templateUrl: "calendar-view-modes.component.html"
})
export class CalendarViewModesComponent {
    private _optionsParamName: string;
    private _selectedIndex: number;
    private _calendar: RadCalendar;

    constructor( @Inject(Page) private _page: Page, private _router: Router, private _optionsService: OptionsService) {
        this._page.on("loaded", this.onLoaded, this);
        
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "viewMode";
            this._optionsService.paramName = this._optionsParamName;
        }
    }

    onWeekTap() {
        this._calendar.viewMode = CalendarViewMode.Week;
        if (applicationModule.ios) {
            this._selectedIndex = 0;
        }
    }

    onMonthTap() {
        this._calendar.viewMode = CalendarViewMode.Month;
        if (applicationModule.ios) {
            this._selectedIndex = 1;
        }
    }


    onMonthNamesTap() {
        this._calendar.viewMode = CalendarViewMode.MonthNames;
        if (applicationModule.ios) {
            this._selectedIndex = 2;
        }
    }

    onYearTap() {
        this._calendar.viewMode = CalendarViewMode.Year;
        if (applicationModule.ios) {
            this._selectedIndex = 3;
        }
    }

    public onLoaded() {
        this._calendar = <RadCalendar>this._page.getViewById("calendar");
    }

    public onNavigatingTo(args) {
        var data = args as NavigatedData;
        if (args.isBackNavigation) {
            if (this._optionsService.paramName == this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "Week":
                        this._calendar.viewMode = CalendarViewMode.Week;
                        break;
                    case "Month":
                        this._calendar.viewMode = CalendarViewMode.Month;
                        break;
                    case "Month names":
                        this._calendar.viewMode = CalendarViewMode.MonthNames;
                        break;
                    case "Year":
                        this._calendar.viewMode = CalendarViewMode.Year;
                    default:
                        break;
                }
            }
        }
    }

    public onOptionsTapped() {
        this._router.navigate(["Options", { selectedIndex: this._selectedIndex, paramName: this._optionsParamName, items: ["Week", "Month", "Month names", "Year"] }]);
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}