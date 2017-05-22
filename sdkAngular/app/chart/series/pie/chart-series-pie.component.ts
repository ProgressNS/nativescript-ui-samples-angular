// >> chart-angular-pie-series
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Car } from '../../data-services/car';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-series-pie',
    providers: [DataService],
    templateUrl: 'chart-series-pie.component.html'
})
export class ChartSeriesPieComponent implements OnInit {
    private _pieSource: ObservableArray<Car>;

    constructor(private _dataService: DataService) { }

    get pieSource(): ObservableArray<Car> {
        return this._pieSource;
    }

    ngOnInit() {
        this._pieSource = new ObservableArray(this._dataService.getPieSource());
    }
}
// << chart-angular-pie-series