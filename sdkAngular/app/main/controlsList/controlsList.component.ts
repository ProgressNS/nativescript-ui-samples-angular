import { Component, OnInit } from "angular2/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { Router, RouteParams } from "angular2/router";

@Component({
    selector: "controls",
    templateUrl: "main/controlsList/controlsList.component.html",
    styleUrls: ["main/controlsList/controlsList.component.css"]
})
export class ControlsListComponent implements OnInit {
    private _currentExample: ExampleItem;
    private _hasBack;

    constructor(private _router: Router, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        this._currentExample = this._exampleItemsService.getParentExampleItem(0);
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
        this._router.navigate(["Examples", { parentTitle: this._currentExample.title, tappedTitle: tappedItem.title }]);
    }
}