import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { Router, RouteParams, CanReuse } from "@angular/router-deprecated";
import * as FrameModule from "ui/frame";

@Component({
    moduleId: module.id,
    selector: "examples",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListComponent implements OnInit, CanReuse {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;

    constructor(private _router: Router, private _routeParams: RouteParams, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        var parentTitle = this._routeParams.get('parentTitle');
        var tappedTitle = this._routeParams.get('tappedTitle');
        if (parentTitle == null && tappedTitle == null) {
            this._currentExample = this._exampleItemsService.getParentExampleItem(0);
        } else {
            this.hasBack = true;
            this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
        }
    }

    public get currentExample(): ExampleItem {
        return this._currentExample;
    }

    public set currentExample(value: ExampleItem) {
        this._currentExample = value;
    }

	public get hasBack(): boolean {
		return this._hasBack;
	}

	public set hasBack(value: boolean) {
		this._hasBack = value;
	}

    public onNavigationItemTap(args) {
        var itemIndex = args.itemIndex;
        var tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length == 0) {
            this._router.navigate(["Example", { parentTitle: this._currentExample.title, tappedTitle: tappedItem.title }]);
        } else {
            this._router.navigate(["Examples", { parentTitle: this._currentExample.title, tappedTitle: tappedItem.title }]);
        }
    }
    
    public onNavigationButtonTap() {
        FrameModule.topmost().goBack();
    }
    
    routerCanReuse(nextInstruction: any, prevInstruction: any): boolean {
        return false;
    }
}