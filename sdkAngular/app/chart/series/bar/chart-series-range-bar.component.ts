import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Product } from '../product';
import { ObservableArray } from "data/observable-array";
import * as platformModule from "platform";
import * as applicationModule from "application";

@Component({
    moduleId: module.id,
    selector: 'chart-series-range-bar',
    providers: [CountryService],
    templateUrl: 'chart-series-range-bar.component.html'
})
export class ChartSeriesRangeBarComponent implements OnInit {
    private _rangeBarSource: ObservableArray<Product>;
    private _deviceHeight: number;

    constructor(private _countryService: CountryService) {

    }

    get rangeBarSource(): ObservableArray<Product> {
        return this._rangeBarSource;
    }

    get deviceHeight(): number {
        return this._deviceHeight;
    }

    ngOnInit() {
        this._rangeBarSource = new ObservableArray(this._countryService.getRangeBarSource());
        this._deviceHeight = platformModule.screen.mainScreen.heightPixels;
    }
}