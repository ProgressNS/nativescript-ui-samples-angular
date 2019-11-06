import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';

@Component({
    moduleId: module.id,
    selector: 'tk-chart-css-area',
    providers: [DataService],
    templateUrl: 'chart-css-area.component.html',
    styleUrls: ['chart-css-area.component.css']
})
export class ChartCssAreaComponent implements OnInit {
    private _usersData: any;

    constructor(private _dataService: DataService) { }

    get usersData(): any {
        return this._usersData;
    }

    ngOnInit() {
        this._usersData = this._dataService.getUsersData();
    }
}