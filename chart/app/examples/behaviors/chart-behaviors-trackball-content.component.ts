import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TemperatureData } from '~/examples/data-services/temperature-data';
import { TrackballCustomContentData } from 'nativescript-ui-chart';

@Component({
    moduleId: module.id,
    selector: 'tk-chart-behaviors-trackball-content',
    providers: [DataService],
    templateUrl: 'chart-behaviors-trackball-content.component.html'
})
export class ChartBehaviorsTrackballContentComponent implements OnInit {
    private _categoricalSource: ObservableArray<TemperatureData>;

    constructor(private _dataService: DataService) { }

    get categoricalSource(): ObservableArray<TemperatureData> {
        return this._categoricalSource;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getTemperatures());
    }

    onTrackBallContentRequested(args: TrackballCustomContentData) {
        let selectedItem: TemperatureData = args.pointData;
        switch (args.seriesIndex) {
            case 0: args.content = "Bangkok: " + selectedItem.Bangkok; break;
            case 1: args.content = "Paris: " + selectedItem.Paris; break;
            case 2: args.content = "Ulaanbaatar: " + selectedItem.Ulaanbaatar; break;
        }
    }
}