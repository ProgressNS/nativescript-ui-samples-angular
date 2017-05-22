import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Person } from '../data-services/person';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-annotations-grid-line',
    providers: [DataService],
    templateUrl: 'chart-annotations-grid-line.component.html'
})
export class ChartAnnotationsGridLineComponent implements OnInit {
    private _scatterSource: ObservableArray<Person>;

    constructor(private _dataService: DataService) { }

    get scatterSource(): ObservableArray<Person> {
        return this._scatterSource;
    }

    ngOnInit() {
        this._scatterSource = new ObservableArray(this._dataService.getScatterSource());
    }
}