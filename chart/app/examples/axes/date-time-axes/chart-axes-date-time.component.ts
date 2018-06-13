// >> chart-angular-axes-date-time-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-services/data.service';
import { Stock } from '../../data-services/stock';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-axes-date-time',
    providers: [DataService],
    templateUrl: 'chart-axes-date-time.component.html'
})
export class ChartAxesDateTimeComponent implements OnInit {
    private _dateTimeSource: ObservableArray<Stock>;

    constructor(private _dataService: DataService) { }

    get dateTimeSource(): ObservableArray<Stock> {
        return this._dateTimeSource;
    }

    ngOnInit() {
        this._dateTimeSource = new ObservableArray(this._dataService.getDateTimeSource());
    }
}
// << chart-angular-axes-date-time-component