import { OptionsExampleBase } from "../../options-example-base";
import { Component, OnInit, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { CalendarEventsService } from "../calendar-events.service";
import { OptionsService } from "../../navigation/options/options.service";
import { RadCalendar, CalendarEvent, CalendarEventsViewMode } from "nativescript-ui-calendar";
import { Page } from "ui/page";
import * as applicationModule from "application";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-events-view-modes",
    templateUrl: "calendar-events-view-modes.component.html",
    providers: [CalendarEventsService]
})
@Injectable()
export class CalendarEventsViewModesComponent extends OptionsExampleBase implements OnInit {
    private _events: Array<CalendarEvent>;
    private _optionsParamName: string;
    private _eventsViewMode;
    constructor(private _page: Page, private _calendarService: CalendarEventsService,
        private _optionsService: OptionsService, private _router: Router) {
        super();
        if (applicationModule.ios) {            
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "eventsViewMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 0, paramName: this._optionsParamName, items: ["None", "Inline", "Popover (iPad only)"] };
        }
        this._eventsViewMode = CalendarEventsViewMode.None;
    }
    
    get eventSource() {
        return this._events;
    }
    
    get eventsViewMode() {
        return this._eventsViewMode;
    }
    
    ngOnInit() {
        this._events = this._calendarService.getCalendarEvents();
    }   
    
    onNoneTap() {
        this._eventsViewMode = CalendarEventsViewMode.None;
    }
    
    onInlineTap() {
        this._eventsViewMode = CalendarEventsViewMode.Inline;
    }
    
    onPopoverTap() {       
        this._eventsViewMode = CalendarEventsViewMode.Popover;
    }
    
     public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "None":
                        this.onNoneTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case "Inline":
                        this.onInlineTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case "Popover":
                        if (UIDevice.currentDevice().userInterfaceIdiom === UIUserInterfaceIdiomPad) {
                            this.onPopoverTap();
                            this.navigationParameters.selectedIndex = 2;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
