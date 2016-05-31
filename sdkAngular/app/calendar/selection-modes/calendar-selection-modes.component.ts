import { OptionsExampleBase } from "../../options-example-base";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router-deprecated";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import * as frameModule from "ui/frame";
import * as applicationModule from "application";
import { OptionsService } from "../../navigation/options/options.service";

@Component({
    moduleId: module.id,
    selector: "calendar-selection-modes",
    templateUrl: "calendar-selection-modes.component.html"
})

// >> angular-calendar-selection-modes  
export class CalendarSelectionModesComponent extends OptionsExampleBase implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    private _optionsParamName: string;
    private _selectionMode;
    constructor( @Inject(Page) private _page: Page, private _router: Router, private _optionsService: OptionsService) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "selectionMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 0, paramName: this._optionsParamName, items: ["None", "Single", "Multiple", "Range"] };
        }
        this._selectionMode = calendarModule.CalendarSelectionMode.None;
    }
    
    get selectionMode() {
        return this._selectionMode;
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
    }
    
    onNoneTap() {
        this._selectionMode = calendarModule.CalendarSelectionMode.None;
        this._calendar.reload();
    }
    
    onSingleTap() {
        this._selectionMode = calendarModule.CalendarSelectionMode.Single;
        this._calendar.reload();
    }
    
    onMultipleTap() { 
        this._selectionMode = calendarModule.CalendarSelectionMode.Multiple;
        this._calendar.reload();
    }
    
    onRangeTap() {
        this._selectionMode = calendarModule.CalendarSelectionMode.Range;
        this._calendar.reload();
    }
    
    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName == this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "None":
                        this.onNoneTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case "Single":
                        this.onSingleTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case "Multiple":
                        this.onMultipleTap();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case "Range":
                        this.onRangeTap();
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
// << angular-calendar-selection-modes