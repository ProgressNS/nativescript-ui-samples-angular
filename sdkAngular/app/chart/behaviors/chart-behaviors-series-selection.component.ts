// >> chart-angular-series-selection-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "data/observable-array";
import { LinearAxis } from "nativescript-telerik-ui-pro/chart";

@Component({
    moduleId: module.id,
    selector: 'chart-behaviors-series-selection',
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
// << chart-angular-series-selection-component