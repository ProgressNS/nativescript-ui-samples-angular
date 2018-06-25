import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Car } from '../data-services/car';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-styling-pie-series',
    providers: [DataService],
    templateUrl: 'chart-styling-pie-series.component.html'
})
export class ChartStylingPieSeriesComponent implements OnInit {
    private _pieSource: ObservableArray<Car>;

    constructor(private _dataService: DataService) { }

    get pieSource(): ObservableArray<Car> {
        return this._pieSource;
    }

    ngOnInit() {
        this._pieSource = new ObservableArray(this._dataService.getPieSource());
    }
}