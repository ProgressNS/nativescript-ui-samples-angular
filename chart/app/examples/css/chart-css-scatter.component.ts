import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-css-scatter',
    providers: [DataService],
    templateUrl: 'chart-css-scatter.component.html',
    styleUrls: ['chart-css-scatter.component.css']
})
export class ChartCssScatterComponent implements OnInit {
    private _playersRealMadridData: any;
    private _playersBarcelonaData: any;

    constructor(private _dataService: DataService) { }

    get playersRealMadridData(): any {
        return this._playersRealMadridData;
    }

    get playersBarcelonaData(): any {
        return this._playersBarcelonaData;
    }

    ngOnInit() {
        this._playersRealMadridData = this._dataService.getPlayersRealMadridData();
        this._playersBarcelonaData = this._dataService.getPlayersBarcelonaData();
    }
}