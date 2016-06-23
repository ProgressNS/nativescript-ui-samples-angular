import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import * as FrameModule from "ui/frame";
import { RouterConfig, ActivatedRoute, CanActivate, Router, ROUTER_DIRECTIVES, RouterOutletMap, Event } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "examples",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListComponent implements OnInit {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;
    private _sub: any;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        this._sub = this._router
            .routerState
            .queryParams
            .subscribe(params => {
                var parentTitle = params['parentTitle'];
                var tappedTitle = params['tappedTitle'];
                if (parentTitle == null && tappedTitle == null) {
                    this.hasBack = false;
                    this._currentExample = this._exampleItemsService.getParentExampleItem(0);
                } else {
                    this.hasBack = true;
                    this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
                }
            });

    }

    ngOnDestroy() {
        this._sub.unsubscribe();
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
        // This supports 2 level deep ExamplesListComponent navigation. Currently angular does not allow to disable the reuse of a component
        if (tappedItem.subItems.length === 0) {
            this._router.navigate(['/example'], { queryParams: { parentTitle: this._currentExample.title, tappedTitle: tappedItem.title } });
        } else {
            this._router.navigate(['/examplesLevel2'], { queryParams: { parentTitle: this._currentExample.title, tappedTitle: tappedItem.title } });
        }

        //this._router.navigate(['/example'], { queryParams: { parentTitle: this._currentExample.title, tappedTitle: tappedItem.title } });
        //this._router.navigate(['/example' , "ListView", "Getting Started" ]);
    }

    public onNavigationButtonTap() {
        FrameModule.topmost().goBack();
    }
}