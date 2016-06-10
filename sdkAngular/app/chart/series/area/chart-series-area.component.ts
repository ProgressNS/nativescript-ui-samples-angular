import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-series-area',
    providers: [CountryService],
    templateUrl: 'chart-series-area.component.html'
})
export class ChartSeriesAreaComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;

    constructor(private _countryService: CountryService) {
    }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._countryService.getCategoricalSource());
    }
}