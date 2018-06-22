// >> chart-angular-bar-series-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Country } from '../../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-series-bar',
    providers: [DataService],
    templateUrl: 'chart-series-bar.component.html'
})
export class ChartSeriesBarComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;

    constructor(private _dataService: DataService) { }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
    }
}
// << chart-angular-bar-series-component