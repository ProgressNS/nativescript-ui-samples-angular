import { OptionsExampleBase } from "../../../options-example-base";
import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router-deprecated";
import { Page, NavigatedData } from "ui/page";
import { OptionsService } from "../../../navigation/options/options.service";
import { RadCalendar, CalendarViewMode } from "nativescript-telerik-ui-pro/calendar";
import * as applicationModule from "application";
import { RadCartesianChart, CategoricalSeries, AreaSeries } from "nativescript-telerik-ui-pro/chart";
import { ObservableArray } from "data/observable-array";
import { Country } from '../country';
import { DataService } from '../data.service';

// >> stacked-series-binding-context
@Component({
    moduleId: module.id,
    selector: "chart-series-stacked-area",
    providers: [DataService],
    templateUrl: "chart-series-stacked-area.component.html"
})
export class ChartSeriesStackedAreaComponent extends OptionsExampleBase implements OnInit {
    private _optionsParamName: string;
    private _chart: RadCartesianChart;
    private _firstSeries: ObservableArray<Country>;
    private _secondSeries: ObservableArray<Country>;
    private _thirdSeries: ObservableArray<Country>;

    constructor( @Inject(Page) private _page: Page,
        private _optionsService: OptionsService, private _router: Router, private _changeDetectionRef: ChangeDetectorRef, private _countryService: DataService) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "stackMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 1, paramName: this._optionsParamName, items: ["Stack 100", "Stack", "None"] };
        }
    }

    get firstSeries(): ObservableArray<Country> {
        return this._firstSeries;
    }

    get secondSeries(): ObservableArray<Country> {
        return this._secondSeries;
    }

    get thirdSeries(): ObservableArray<Country> {
        return this._thirdSeries;
    }

    ngOnInit() {
        this._chart = <RadCartesianChart>this._page.getViewById("cartesianChart");
        this._firstSeries = new ObservableArray(this._countryService.getFirstSeries());
        this._secondSeries = new ObservableArray(this._countryService.getSecondSeries());
        this._thirdSeries = new ObservableArray(this._countryService.getThirdSeries());
        this.set("stackMode", "Stack");
    }

    ngAfterViewInit() {
        this._changeDetectionRef.detectChanges();
    }

    onNoneStackModeSelected() {
        this.set("stackMode", "None");
    }

    onStackModeSelected() {
        this.set("stackMode", "Stack");
    }

    onStack100ModeSelected() {
        this.set("stackMode", "Stack100");
    }

    // >> (hide)
    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName == this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "Stack 100":
                        this.onStack100ModeSelected();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case "Stack":
                        this.onStackModeSelected();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case "None":
                        this.onNoneStackModeSelected();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    default:
                        break;
                }
            }
        }
    }
    // << (hide)
}
// >> stacked-series-binding-context