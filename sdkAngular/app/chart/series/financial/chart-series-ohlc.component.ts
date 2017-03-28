// >> chart-angular-ohlc-series-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Currency } from '../../data-services/currency';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-series-ohlc',
    providers: [DataService],
    templateUrl: 'chart-series-ohlc.component.html'
})
export class ChartSeriesOhlcComponent implements OnInit {
    private _ohlcSourceItems: ObservableArray<Currency>;

    constructor(private _dataService: DataService) { }

    get ohlcSourceItems(): ObservableArray<Currency> {
        return this._ohlcSourceItems;
    }

    ngOnInit() {
        this._ohlcSourceItems = new ObservableArray(this._dataService.getOhlcSourceItems());
    }
}
// << chart-angular-ohlc-series-component