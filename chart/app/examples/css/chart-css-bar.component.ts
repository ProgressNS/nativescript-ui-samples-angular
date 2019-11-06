import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';

@Component({
    moduleId: module.id,
    selector: 'tk-chart-css-bar',
    providers: [DataService],
    templateUrl: 'chart-css-bar.component.html',
    styleUrls: ['chart-css-bar.component.css']
})
export class ChartCssBarComponent implements OnInit {
    private _salesData: any;

    constructor(private _dataService: DataService) { }

    get salesData(): any {
        return this._salesData;
    }

    ngOnInit() {
        this._salesData = this._dataService.getSalesData();
    }
}