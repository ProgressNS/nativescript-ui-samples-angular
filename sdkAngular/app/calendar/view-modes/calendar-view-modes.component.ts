import { OptionsExampleBase } from "../../options-example-base";
import { Component, OnInit, Inject } from "@angular/core";
import { Router } from '@angular/router';
import { Page, NavigatedData } from "ui/page";
import { OptionsService } from "../../navigation/options/options.service";
import { RadCalendar, CalendarViewMode } from "nativescript-telerik-ui-pro/calendar";
import * as frameModule from "ui/frame";
import * as applicationModule from "application";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-view-modes",
    templateUrl: "calendar-view-modes.component.html"
})

export class CalendarViewModesComponent extends OptionsExampleBase implements OnInit {
    private _optionsParamName: string;
    private _calendar: RadCalendar;
    private _viewMode;

    constructor( @Inject(Page) private _page: Page,
        private _optionsService: OptionsService, private _router: Router) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "eventsViewMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 1, paramName: this._optionsParamName, items: ["Week", "Month", "Month names", "Year"] };
        }
        this._viewMode = CalendarViewMode.Month;
    }
    
    get viewMode() {
        return this._viewMode;
    }
    
    ngOnInit() {
        this._calendar = <RadCalendar>this._page.getViewById("calendar");
    }

    onWeekTap() {
        this._viewMode = CalendarViewMode.Week;
    }

    onMonthTap() {
        this._viewMode = CalendarViewMode.Month;
    }


    onMonthNamesTap() {
        this._viewMode = CalendarViewMode.MonthNames;
    }

    onYearTap() {
        this._viewMode = CalendarViewMode.Year;
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
                    default:
                        break;
                }
            }
        }
    }
}