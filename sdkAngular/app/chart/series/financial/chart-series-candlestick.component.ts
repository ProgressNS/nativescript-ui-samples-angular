// >> chart-angular-candlestick-series-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Currency } from '../../data-services/currency';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-series-candlestick',
    providers: [DataService],
    templateUrl: 'chart-series-candlestick.component.html'
})
export class ChartSeriesCandlestickComponent implements OnInit {
    private _candleStickSourceItems: ObservableArray<Currency>;

    constructor(private _dataService: DataService) { }

    get candleStickSourceItems(): ObservableArray<Currency> {
        return this._candleStickSourceItems;
    }

    ngOnInit() {
        this._candleStickSourceItems = new ObservableArray(this._dataService.getCandleStickSourceItems());
    }
}
// << chart-angular-candlestick-series-component