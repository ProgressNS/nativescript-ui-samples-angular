import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { ObservableArray } from "data/observable-array";
import * as platformModule from "platform";
import * as applicationModule from "application";

@Component({
    moduleId: module.id,
    selector: 'chart-series-area',
    providers: [CountryService],
    templateUrl: 'chart-series-area.component.html'
})
export class ChartSeriesAreaComponent implements OnInit {
    private _dataItems: ObservableArray<Country>;
    private _deviceHeight: number;

    constructor(private _countryService: CountryService) {

    }

    get dataItems(): ObservableArray<Country> {
        return this._dataItems;
    }

    get deviceHeight(): number {
        return this._deviceHeight;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._countryService.getCategoricalSource());
        this._deviceHeight = platformModule.screen.mainScreen.heightPixels;
    }
}