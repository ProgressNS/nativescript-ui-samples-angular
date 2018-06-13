// >> chart-angular-selection-styling-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-styling-selection',
    providers: [DataService],
    templateUrl: 'chart-styling-selection.component.html'
})
export class ChartStylingSelectionComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;
    private _categoricalSource2: ObservableArray<Country>;
    private _categoricalSource3: ObservableArray<Country>;

    constructor(private _dataService: DataService) { }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    get categoricalSource2(): ObservableArray<Country> {
        return this._categoricalSource2;
    }

    get categoricalSource3(): ObservableArray<Country> {
        return this._categoricalSource3;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
        this._categoricalSource2 = new ObservableArray(this._dataService.getCategoricalSource2());
        this._categoricalSource3 = new ObservableArray(this._dataService.getCategoricalSource3());
    }
}
// << chart-angular-selection-styling-component