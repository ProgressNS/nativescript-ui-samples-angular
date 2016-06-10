import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Product } from '../product';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-series-range-bar',
    providers: [CountryService],
    templateUrl: 'chart-series-range-bar.component.html'
})
export class ChartSeriesRangeBarComponent implements OnInit {
    private _rangeBarSource: ObservableArray<Product>;

    constructor(private _countryService: CountryService) {

    }

    get rangeBarSource(): ObservableArray<Product> {
        return this._rangeBarSource;
    }

    ngOnInit() {
        this._rangeBarSource = new ObservableArray(this._countryService.getRangeBarSource());
    }
}