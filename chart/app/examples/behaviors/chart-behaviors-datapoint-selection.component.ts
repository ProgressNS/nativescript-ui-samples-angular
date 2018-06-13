// >> chart-angular-grid-line-annotations-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Product } from '../data-services/product';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'tk-chart-behaviors-datapoint-selection',
    providers: [DataService],
    templateUrl: 'chart-behaviors-datapoint-selection.component.html'
})
export class ChartBehaviorsDatapointSelectionComponent implements OnInit {
    private _sourceItems: ObservableArray<Product>;

    constructor(private _dataService: DataService) { }

    get sourceItems(): ObservableArray<Product> {
        return this._sourceItems;
    }

    ngOnInit() {
        this._sourceItems = new ObservableArray(this._dataService.getSourceItems());
    }
}
// << chart-angular-grid-line-annotations-component