import { Component, Inject, OnInit } from "@angular/core";
import { Page } from "ui/page";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import { OptionsService } from "../../navigation/options/options.service";
import * as applicationModule from "application";
import { Router } from "@angular/router-deprecated";
import { OptionsExampleBase } from "../../options-example-base";

@Component({
    moduleId: module.id,
    selector: "calendar-transition-modes",
    templateUrl: "calendar-transition-modes.component.html"
})
export class CalendarTransitionModesComponent extends OptionsExampleBase implements OnInit {
    private _calendar: calendarModule.RadCalendar;
    private _optionsParamName: string;
    private _transitionMode;
    constructor( @Inject(Page) private _page: Page, private _optionsService: OptionsService, private _router: Router) {
        super();
        if (applicationModule.ios) {            
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "transitionMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 0, paramName: this._optionsParamName, 
                items: ["None", "Slide", "Stack", "Flip", "Fold", "Float", "Rotate"] };
        }
        this._transitionMode = calendarModule.CalendarTransitionMode.None;
    }
    
    get transitionMode() {
        return this._transitionMode;
    }
    
    ngOnInit() {
        this._calendar = <calendarModule.RadCalendar>this._page.getViewById("calendar");
    }
    
    // common
    onNoneTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.None;
    }
    
    onSlideTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Slide;
    }
    
    onStackTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Stack;
    }
    
    // android
    onPlainTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Plain;
    }
    
    onFreeTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Free;
    }
    
    onComboTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Combo;
    }
    
    onOverlapTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Overlap;
    }
    
    //ios
    onFlipTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Flip;
    }
    
    onFoldTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Fold;
    }
    
    onFloatTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Float;
    }
    
    onRotateTap() {
        this._transitionMode = calendarModule.CalendarTransitionMode.Rotate;
    }
    
    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName == this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "None":
                        this.onNoneTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case "Slide":
                        this.onSlideTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case "Stack":
                        this.onStackTap();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case "Flip":
                        this.onFlipTap(); 
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    case "Fold":
                        this.onFoldTap();
                        this.navigationParameters.selectedIndex = 4;
                        break;
                    case "Float":
                        this.onFloatTap();
                        this.navigationParameters.selectedIndex = 5;
                        break;
                    case "Rotate":
                        this.onRotateTap();
                        this.navigationParameters.selectedIndex = 6;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}