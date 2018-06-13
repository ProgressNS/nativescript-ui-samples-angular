import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { LinearAxis } from "nativescript-ui-chart";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-behaviors-series-selection',
    providers: [DataService],
    templateUrl: 'chart-behaviors-series-selection.component.html'
})
export class ChartBehaviorsSeriesSelectionComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;
    private _bubbleCategoricalSource: ObservableArray<Country>;

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
        this._bubbleCategoricalSource = new ObservableArray(this._dataService.getBubbleCategoricalSource());
    }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    get bubbleCategoricalSource(): ObservableArray<Country> {
        return this._bubbleCategoricalSource;
    }
}