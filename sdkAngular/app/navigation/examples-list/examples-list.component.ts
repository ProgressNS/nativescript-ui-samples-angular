import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { Router, RouteParams } from "@angular/router-deprecated";
import * as FrameModule from "ui/frame";

@Component({
    moduleId: module.id,
    selector: "examples",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListComponent implements OnInit {
    private _currentExample: ExampleItem;

    constructor(private _router: Router, private _routeParams: RouteParams, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        var parentTitle = this._routeParams.get('parentTitle');
        var tappedTitle = this._routeParams.get('tappedTitle');
        this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
    }

    public get currentExample(): ExampleItem {
        return this._currentExample;
    }

    public set currentExample(value: ExampleItem) {
        this._currentExample = value;
    }

    public onNavigationItemTap(args) {
        var itemIndex = args.itemIndex;
        var tappedItem = this._currentExample.subItems[itemIndex];
        this._router.navigate(["Example", { parentTitle: this._currentExample.title, tappedTitle: tappedItem.title }]);
    }

    public onNavigationButtonTap() {
        FrameModule.topmost().goBack();
    }
}