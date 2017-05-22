// >> chart-angular-scatter-bubble-series-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Person } from '../../data-services/person';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-series-scatter-bubble',
    providers: [DataService],
    templateUrl: 'chart-series-scatter-bubble.component.html'
})
export class ChartSeriesScatterBubbleComponent implements OnInit {
    private _scatterSource: ObservableArray<Person>;

    constructor(private _dataService: DataService) { }

    get scatterSource(): ObservableArray<Person> {
        return this._scatterSource;
    }

    ngOnInit() {
        this._scatterSource = new ObservableArray(this._dataService.getScatterSource());
    }
}
// << chart-angular-scatter-bubble-series-component