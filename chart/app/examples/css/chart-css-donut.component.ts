import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';

@Component({
    moduleId: module.id,
    selector: 'tk-chart-css-donut',
    providers: [DataService],
    templateUrl: 'chart-css-donut.component.html',
    styleUrls: ['chart-css-donut.component.css']
})
export class ChartCssDonutComponent implements OnInit {
    private _phoneStorageData: any;

    constructor(private _dataService: DataService) { }

    get phoneStorageData(): any {
        return this._phoneStorageData;
    }

    ngOnInit() {
        this._phoneStorageData = this._dataService.getPhoneStorageData();
    }
}