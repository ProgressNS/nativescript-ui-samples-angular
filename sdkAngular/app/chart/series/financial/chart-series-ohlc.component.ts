import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Currency } from '../currency';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-series-ohlc',
    providers: [DataService],
    templateUrl: 'chart-series-ohlc.component.html'
})
export class ChartSeriesOhlcComponent implements OnInit {
    private _ohlcSourceItems: ObservableArray<Currency>;

    constructor(private _countryService: DataService) {

    }

    get ohlcSourceItems(): ObservableArray<Currency> {
        return this._ohlcSourceItems;
    }

    ngOnInit() {
        this._ohlcSourceItems = new ObservableArray(this._countryService.getOhlcSourceItems());
    }
}