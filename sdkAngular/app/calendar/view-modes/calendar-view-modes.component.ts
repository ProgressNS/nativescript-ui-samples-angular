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
// >> angular-calendar-view-modes  
export class CalendarViewModesComponent {
    private _optionsParamName: string;
    private _selectedIndex: number;
    private _calendar: RadCalendar;

    constructor( @Inject(Page) private _page: Page, private _router: Router, private _optionsService: OptionsService) {
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "viewMode";
            this._optionsService.paramName = this._optionsParamName;
            this._selectedIndex = 1;
        }
    }
    
    ngOnInit() {
        this._calendar = <RadCalendar>this._page.getViewById("calendar");
    }

    onWeekTap() {
        this._calendar.viewMode = CalendarViewMode.Week;
    }

    onMonthTap() {
        this._calendar.viewMode = CalendarViewMode.Month;
    }


    onMonthNamesTap() {
        this._calendar.viewMode = CalendarViewMode.MonthNames;
    }

    onYearTap() {
        this._calendar.viewMode = CalendarViewMode.Year;
    }

    public onNavigatingTo(args) {
        var data = args as NavigatedData;
        if (args.isBackNavigation) {
            if (this._optionsService.paramName == this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "Week":
                        this._calendar.viewMode = CalendarViewMode.Week;
                        this._selectedIndex = 0;
                        break;
                    case "Month":
                        this._calendar.viewMode = CalendarViewMode.Month;
                        this._selectedIndex = 1;
                        break;
                    case "Month names":
                        this._calendar.viewMode = CalendarViewMode.MonthNames;
                        this._selectedIndex = 2;
                        break;
                    case "Year":
                        this._calendar.viewMode = CalendarViewMode.Year;
                        this._selectedIndex = 3;
                        break;
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
// << angular-calendar-view-modes