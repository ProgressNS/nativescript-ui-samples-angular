import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';

@Component({
    moduleId: module.id,
    selector: 'tk-chart-css-candlestick',
    providers: [DataService],
    templateUrl: 'chart-css-candlestick.component.html',
    styleUrls: ['chart-css-candlestick.component.css']
})
export class ChartCssCandlestickComponent implements OnInit {
    private _stockData: any;

    constructor(private _dataService: DataService) { }

    get stockData(): any {
        return this._stockData;
    }

    ngOnInit() {
        this._stockData = this._dataService.getStockData();
    }
}