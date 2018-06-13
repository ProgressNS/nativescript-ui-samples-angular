import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Currency } from '../data-services/currency';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-behaviors-trackball',
    providers: [DataService],
    templateUrl: 'chart-behaviors-trackball.component.html'
})
export class ChartBehaviorsTrackballComponent implements OnInit {
    private _candleStickSourceItems: ObservableArray<Currency>;

    constructor(private _dataService: DataService) { }

    get candleStickSourceItems(): ObservableArray<Currency> {
        return this._candleStickSourceItems;
    }

    ngOnInit() {
        this._candleStickSourceItems = new ObservableArray(this._dataService.getCandleStickSourceItems());
    }
}