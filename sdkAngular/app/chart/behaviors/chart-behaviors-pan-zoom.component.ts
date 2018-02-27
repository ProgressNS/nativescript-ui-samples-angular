// >> chart-angular-pan-and-zoom-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { LinearAxis } from "nativescript-ui-chart";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-behaviors-pan-zoom',
    providers: [DataService],
    templateUrl: 'chart-behaviors-pan-zoom.component.html'
})
export class ChartBehaviorsPanZoomComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;
    private _linearAxisZoomPan: LinearAxis;
    private _linearAxisZoom: LinearAxis;

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
        this._linearAxisZoom = new LinearAxis();
        this._linearAxisZoom.horizontalLocation = "Left";
        this._linearAxisZoom.allowZoom = true;

        this._linearAxisZoomPan = new LinearAxis();
        this._linearAxisZoomPan.horizontalLocation = "Right";
        this._linearAxisZoomPan.allowZoom = true;
        this._linearAxisZoomPan.allowPan = true;
    }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

	public get linearAxisZoomPan(): LinearAxis {
		return this._linearAxisZoomPan;
	}

	public set linearAxisZoomPan(value: LinearAxis) {
		this._linearAxisZoomPan = value;
	}

	public get linearAxisZoom(): LinearAxis {
		return this._linearAxisZoom;
	}

	public set linearAxisZoom(value: LinearAxis) {
		this._linearAxisZoom = value;
	}

}
// << chart-angular-pan-and-zoom-component