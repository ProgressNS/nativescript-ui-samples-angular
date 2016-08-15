import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import * as FrameModule from "ui/frame";
import { RouterConfig, ActivatedRoute, CanActivate, Router, ROUTER_DIRECTIVES, RouterOutletMap, Event } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "tk-examples",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth1Component implements OnInit {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;
    private _sub: any;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            this.hasBack = false;
            this._currentExample = this._exampleItemsService.getParentExampleItem(0);
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
        if (tappedItem.subItems.length === 0) {
            this._router.navigate(['/example', this._currentExample.title, tappedItem.title ]);
        } else {
            this._router.navigate(['/examples-depth-2', this._currentExample.title, tappedItem.title]);
        }
    }

    public onNavigationButtonTap() {
        FrameModule.topmost().goBack();
    }
}


@Component({
    moduleId: module.id,
    selector: "tk-examples-depth-2",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth2Component implements OnInit {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;
    private _sub: any;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            this.hasBack = true;
            this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
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
        if (tappedItem.subItems.length === 0) {
            this._router.navigate(['/example', this._currentExample.title, tappedItem.title ]);
        } else {
            this._router.navigate(['/examples-depth-3', this._currentExample.title, tappedItem.title]);
        }
    }

    public onNavigationButtonTap() {
        FrameModule.topmost().goBack();
    }
}

@Component({
    moduleId: module.id,
    selector: "tk-examples-depth-3",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth3Component implements OnInit {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;
    private _sub: any;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            this.hasBack = true;
            this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
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
        this._router.navigate(['/example', this._currentExample.title, tappedItem.title ]);
    }

    public onNavigationButtonTap() {
        FrameModule.topmost().goBack();
    }
}