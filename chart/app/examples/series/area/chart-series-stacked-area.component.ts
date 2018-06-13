import { OptionsService } from "../../../navigation/options/options.service";
import { OptionsExampleBase } from "../../../options-example-base";
import { Component, AfterViewInit, OnInit, Injectable, ChangeDetectorRef } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import * as applicationModule from "tns-core-modules/application";
import { RadCartesianChart } from "nativescript-ui-chart";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Country } from '../../data-services/country';
import { DataService } from '../../data-services/data.service';

@Component({
    moduleId: module.id,
    selector: "tk-chart-series-stacked-area",
    providers: [DataService],
    templateUrl: "chart-series-stacked-area.component.html"
})
@Injectable()
export class ChartSeriesStackedAreaComponent extends OptionsExampleBase implements AfterViewInit, OnInit {
    private _optionsParamName: string;
    private _firstSeries: ObservableArray<Country>;
    private _secondSeries: ObservableArray<Country>;
    private _thirdSeries: ObservableArray<Country>;
    private _optionsItems: Array<string>;

    stackMode: string;

    constructor(private _page: Page,
        private _optionsService: OptionsService, private _router: Router, private _changeDetectionRef: ChangeDetectorRef, private _dataService: DataService) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "stackMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this._optionsItems = ["Stack", "Stack 100", "None"];
            this.navigationParameters = { selectedIndex: 0, paramName: this._optionsParamName, items: this._optionsItems };
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
        this._firstSeries = new ObservableArray(this._dataService.getFirstSeries());
        this._secondSeries = new ObservableArray(this._dataService.getSecondSeries());
        this._thirdSeries = new ObservableArray(this._dataService.getThirdSeries());
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

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                this.navigationParameters.selectedIndex = this._optionsItems.indexOf(this._optionsService.paramValue);
                switch (this._optionsService.paramValue) {
                    case "Stack 100":
                        this.onStack100ModeSelected();
                        break;
                    case "Stack":
                        this.onStackModeSelected();
                        break;
                    case "None":
                        this.onNoneStackModeSelected();
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
