import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../person';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-series-scatter',
    providers: [DataService],
    templateUrl: 'chart-series-scatter.component.html'
})
export class ChartSeriesScatterComponent implements OnInit {
    private _scatterSource: ObservableArray<Person>;

    constructor(private _dataService: DataService) {

    }

    get scatterSource(): ObservableArray<Person> {
        return this._scatterSource;
    }

    ngOnInit() {
        this._scatterSource = new ObservableArray(this._dataService.getScatterSource());
    }
}