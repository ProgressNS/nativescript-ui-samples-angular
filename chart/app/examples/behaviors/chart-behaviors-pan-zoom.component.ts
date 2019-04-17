// >> chart-angular-pan-and-zoom-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-behaviors-pan-zoom',
    providers: [DataService],
    templateUrl: 'chart-behaviors-pan-zoom.component.html'
})
export class ChartBehaviorsPanZoomComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
    }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }
}
// << chart-angular-pan-and-zoom-component