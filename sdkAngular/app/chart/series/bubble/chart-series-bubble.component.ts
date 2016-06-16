import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Country } from '../country';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-series-bubble',
    providers: [DataService],
    templateUrl: 'chart-series-bubble.component.html'
})
export class ChartSeriesBubbleComponent implements OnInit {
    private _highDataModel: ObservableArray<Country>;
    private _middleDataModel: ObservableArray<Country>;
    private _lowDataModel: ObservableArray<Country>;

    constructor(private _dataService: DataService) {

    }

    get highDataModel(): ObservableArray<Country> {
        return this._highDataModel;
    }

    get middleDataModel(): ObservableArray<Country> {
        return this._middleDataModel;
    }

    get lowDataModel(): ObservableArray<Country> {
        return this._lowDataModel;
    }

    ngOnInit() {
        this._highDataModel = new ObservableArray(this._dataService.getHighDataModel());
        this._middleDataModel = new ObservableArray(this._dataService.getMiddleDataModel());
        this._lowDataModel = new ObservableArray(this._dataService.getLowDataModel());
    }
}