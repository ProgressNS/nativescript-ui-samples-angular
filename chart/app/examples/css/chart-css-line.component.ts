import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';

@Component({
    moduleId: module.id,
    selector: 'tk-chart-css-line',
    providers: [DataService],
    templateUrl: 'chart-css-line.component.html',
    styleUrls: ['chart-css-line.component.css']
})
export class ChartCssLineComponent implements OnInit {
    private _campaignData: any;

    constructor(private _dataService: DataService) { }

    get campaignData(): any {
        return this._campaignData;
    }

    ngOnInit() {
        this._campaignData = this._dataService.getCampaignData();
    }
}