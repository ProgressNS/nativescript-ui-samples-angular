// >> chart-angular-axes-multiple-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Country } from '../../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { LinearAxis } from "nativescript-ui-chart";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-axes-multiple.component',
    providers: [DataService],
    templateUrl: 'chart-axes-multiple.component.html'
})
export class ChartAxesMultipleComponent implements OnInit {
    private _rateA: ObservableArray<Country>;
    private _rateB: ObservableArray<Country>;
    private _rateC: ObservableArray<Country>;
    private _total: ObservableArray<Country>;

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._rateA = new ObservableArray(this._dataService.getRateA());
        this._rateB = new ObservableArray(this._dataService.getRateB());
        this._rateC = new ObservableArray(this._dataService.getRateC());
        this._total = new ObservableArray(this._dataService.getTotal());
    }

    get rateA(): ObservableArray<Country> {
        return this._rateA;
    }

    get rateB(): ObservableArray<Country> {
        return this._rateB;
    }

    get rateC(): ObservableArray<Country> {
        return this._rateC;
    }

    get total(): ObservableArray<Country> {
        return this._total;
    }
}
// << chart-angular-axes-multiple-component