import { Component, OnInit, OnDestroy } from "@angular/core";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import * as frameModule from "tns-core-modules/ui/frame";
import { ActivatedRoute, Router } from '@angular/router';
import { ListViewEventData } from 'nativescript-ui-listview';

@Component({
    moduleId: module.id,
    selector: "tk-examples",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth1Component implements OnInit, OnDestroy {
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

    public onNavigationItemTap(args: ListViewEventData) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        } else {
            this._router.navigate(['/examples-depth-2', this._currentExample.title, tappedItem.title]);
        }
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}


@Component({
    moduleId: module.id,
    selector: "tk-examples-depth-2",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth2Component implements OnInit, OnDestroy {
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

    public onNavigationItemTap(args: ListViewEventData) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        } else {
            this._router.navigate(['/examples-depth-3', this._currentExample.title, tappedItem.title]);
        }
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}

@Component({
    moduleId: module.id,
    selector: "tk-examples-depth-3",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth3Component implements OnInit, OnDestroy {
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

    public onNavigationItemTap(args: ListViewEventData) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        this._router.navigateByUrl(tappedItem.path);
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}

export const ExamplesListDepthComponents = [ ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component];
