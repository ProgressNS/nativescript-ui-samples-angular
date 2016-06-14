import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Country } from '../country';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-series-stacked-bar',
    providers: [DataService],
    templateUrl: 'chart-series-stacked-bar.component.html'
})
export class ChartSeriesStackedBarComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;

    constructor(private _countryService: DataService) {

    }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._countryService.getCategoricalSource());
    }
}