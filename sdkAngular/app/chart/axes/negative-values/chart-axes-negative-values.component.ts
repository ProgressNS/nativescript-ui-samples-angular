// >> chart-angular-axes-negative-values-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Frame } from '../../data-services/frame';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-axes-negative-values',
    providers: [DataService],
    templateUrl: 'chart-axes-negative-values.component.html'
})
export class ChartAxesNegativeValuesComponent implements OnInit {
    private _negativeValues: ObservableArray<Frame>;

    constructor(private _dataService: DataService) { }

    get negativeValues(): ObservableArray<Frame> {
        return this._negativeValues;
    }

    ngOnInit() {
        this._negativeValues = new ObservableArray(this._dataService.getNegativeValues());
    }
}
// << chart-angular-axes-negative-values-component