import { Component, Injectable } from "@angular/core";
import { Page } from "ui/page";
import { RadCalendar, CalendarTransitionMode } from "nativescript-ui-calendar";
import { OptionsService } from "../../navigation/options/options.service";
import * as applicationModule from "tns-core-modules/application";
import { Router } from '@angular/router';
import { OptionsExampleBase } from "../../options-example-base";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-transition-modes",
    templateUrl: "calendar-transition-modes.component.html"
})
@Injectable()
export class CalendarTransitionModesComponent extends OptionsExampleBase {
    private _optionsParamName: string;
    private _transitionMode;
    constructor(private _page: Page, private _optionsService: OptionsService, private _router: Router) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "transitionMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = {
                selectedIndex: 0, paramName: this._optionsParamName,
                items: ["None", "Slide", "Stack", "Flip", "Fold", "Float", "Rotate"]
            };
        }
        this._transitionMode = CalendarTransitionMode.None;
    }

    get transitionMode() {
        return this._transitionMode;
    }

    // common
    onNoneTap() {
        this._transitionMode = CalendarTransitionMode.None;
    }

    onSlideTap() {
        this._transitionMode = CalendarTransitionMode.Slide;
    }

    onStackTap() {
        this._transitionMode = CalendarTransitionMode.Stack;
    }

    // android
    onPlainTap() {
        this._transitionMode = CalendarTransitionMode.Plain;
    }

    onFreeTap() {
        this._transitionMode = CalendarTransitionMode.Free;
    }

    onComboTap() {
        this._transitionMode = CalendarTransitionMode.Combo;
    }

    onOverlapTap() {
        this._transitionMode = CalendarTransitionMode.Overlap;
    }

    //ios
    onFlipTap() {
        this._transitionMode = CalendarTransitionMode.Flip;
    }

    onFoldTap() {
        this._transitionMode = CalendarTransitionMode.Fold;
    }

    onFloatTap() {
        this._transitionMode = CalendarTransitionMode.Float;
    }

    onRotateTap() {
        this._transitionMode = CalendarTransitionMode.Rotate;
    }

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
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
