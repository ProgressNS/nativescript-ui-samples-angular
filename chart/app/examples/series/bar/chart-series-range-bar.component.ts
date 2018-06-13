// >> chart-angular-range-bar-series-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Product } from '../../data-services/product';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-series-range-bar',
    providers: [DataService],
    templateUrl: 'chart-series-range-bar.component.html'
})
export class ChartSeriesRangeBarComponent implements OnInit {
    private _rangeBarSource: ObservableArray<Product>;

    constructor(private _dataService: DataService) { }

    get rangeBarSource(): ObservableArray<Product> {
        return this._rangeBarSource;
    }

    ngOnInit() {
        this._rangeBarSource = new ObservableArray(this._dataService.getRangeBarSource());
    }
}
// << chart-angular-range-bar-series-component