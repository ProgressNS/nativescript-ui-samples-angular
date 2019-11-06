import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { ExampleItem } from "../exampleItem";
import { ExampleItemService } from "../exampleItemService.service";
import { Frame } from "tns-core-modules/ui/frame";
import { ActivatedRoute, Router } from '@angular/router';
import { RadSideDrawer, FadeTransition, PushTransition, RevealTransition, ReverseSlideOutTransition, ScaleDownPusherTransition, ScaleUpTransition, SlideAlongTransition, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    selector: "tk-examples",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth1Component implements OnInit, AfterViewInit, OnDestroy {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;
    private _sub: any;
    private _rootDrawer: RadSideDrawer;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService, private page: Page) {

    }

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            const parentTitle = params['parentTitle'];
            const tappedTitle = params['tappedTitle'];
            this.hasBack = false;
            this._currentExample = this._exampleItemsService.getParentExampleItem(0);
        });
        this.page.on(Page.loadedEvent, this.onPageLoaded.bind(this));
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

    ngAfterViewInit() {
        this._rootDrawer = getRootView() as RadSideDrawer;
    }

    private onPageLoaded(args) {
        this._rootDrawer = getRootView() as RadSideDrawer;
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

    public onNavigationItemTap(args: any) {
        const itemIndex = args.index;
        const tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        } else {
            this._router.navigate(['/examples-depth-2', this._currentExample.title, tappedItem.title]);
        }
    }

    public onChangeTransition(transition: string) {
        switch (transition) {
            case "SlideInOnTopTransition":
                this._rootDrawer.drawerTransition = new SlideInOnTopTransition();
                break;
            case "FadeTransition":
                this._rootDrawer.drawerTransition = new FadeTransition();
                break;
            case "PushTransition":
                this._rootDrawer.drawerTransition = new PushTransition();
                break;
            case "RevealTransition":
                this._rootDrawer.drawerTransition = new RevealTransition();
                break;
            case "ReverseSlideOutTransition":
                this._rootDrawer.drawerTransition = new ReverseSlideOutTransition();
                break;
            case "ScaleDownPusherTransition":
                this._rootDrawer.drawerTransition = new ScaleDownPusherTransition();
                break;
            case "ScaleUpTransition":
                this._rootDrawer.drawerTransition = new ScaleUpTransition();
                break;
            case "SlideAlongTransition":
                this._rootDrawer.drawerTransition = new SlideAlongTransition();
                break;
            default:
                break;
        }

        console.log("Changed drawer transition to", transition);
    }

    public onNavBtnTap() {
        if (this._rootDrawer) {
            this._rootDrawer.toggleDrawerState();
        }
    }

    public onNavigationButtonTap() {
        Frame.topmost().goBack();
    }
}


@Component({
    moduleId: module.id,
    selector: "tk-examples-depth-2",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth2Component implements OnInit, AfterViewInit, OnDestroy {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;
    private _sub: any;
    private _rootDrawer: RadSideDrawer;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            const parentTitle = params['parentTitle'];
            const tappedTitle = params['tappedTitle'];
            this.hasBack = true;
            this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
        });

    }

    ngAfterViewInit() {
        this._rootDrawer = getRootView() as RadSideDrawer;
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

    public onNavigationItemTap(args: any) {
        const itemIndex = args.index;
        const tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        } else {
            this._router.navigate(['/examples-depth-3', this._currentExample.title, tappedItem.title]);
        }
    }

    public onNavigationButtonTap() {
        Frame.topmost().goBack();
    }


    public onChangeTransition(transition: string) {
        switch (transition) {
            case "SlideInOnTopTransition":
                this._rootDrawer.drawerTransition = new SlideInOnTopTransition();
                break;
            case "FadeTransition":
                this._rootDrawer.drawerTransition = new FadeTransition();
                break;
            case "PushTransition":
                this._rootDrawer.drawerTransition = new PushTransition();
                break;
            case "RevealTransition":
                this._rootDrawer.drawerTransition = new RevealTransition();
                break;
            case "ReverseSlideOutTransition":
                this._rootDrawer.drawerTransition = new ReverseSlideOutTransition();
                break;
            case "ScaleDownPusherTransition":
                this._rootDrawer.drawerTransition = new ScaleDownPusherTransition();
                break;
            case "ScaleUpTransition":
                this._rootDrawer.drawerTransition = new ScaleUpTransition();
                break;
            case "SlideAlongTransition":
                this._rootDrawer.drawerTransition = new SlideAlongTransition();
                break;
            default:
                break;
        }

        console.log("Changed drawer transition to", transition);
    }

    public onNavBtnTap() {
        if (this._rootDrawer) {
            this._rootDrawer.toggleDrawerState();
        }
    }
}

@Component({
    moduleId: module.id,
    selector: "tk-examples-depth-3",
    templateUrl: "examples-list.component.html",
    styleUrls: ["examples-list.component.css"]
})
export class ExamplesListDepth3Component implements OnInit, AfterViewInit, OnDestroy {
    private _currentExample: ExampleItem;
    private _hasBack: boolean;
    private _sub: any;
    private _rootDrawer: RadSideDrawer;

    constructor(private _router: Router, private _route: ActivatedRoute, private _exampleItemsService: ExampleItemService) {

    }

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            const parentTitle = params['parentTitle'];
            const tappedTitle = params['tappedTitle'];
            this.hasBack = true;
            this._currentExample = this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, this._exampleItemsService.getAllExampleItems());
        });

    }

    ngAfterViewInit() {
        this._rootDrawer = getRootView() as RadSideDrawer;
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

    public onNavigationItemTap(args: any) {
        const itemIndex = args.index;
        const tappedItem = this._currentExample.subItems[itemIndex];
        this._router.navigateByUrl(tappedItem.path);
    }

    public onNavigationButtonTap() {
        Frame.topmost().goBack();
    }


    public onChangeTransition(transition: string) {
        switch (transition) {
            case "SlideInOnTopTransition":
                this._rootDrawer.drawerTransition = new SlideInOnTopTransition();
                break;
            case "FadeTransition":
                this._rootDrawer.drawerTransition = new FadeTransition();
                break;
            case "PushTransition":
                this._rootDrawer.drawerTransition = new PushTransition();
                break;
            case "RevealTransition":
                this._rootDrawer.drawerTransition = new RevealTransition();
                break;
            case "ReverseSlideOutTransition":
                this._rootDrawer.drawerTransition = new ReverseSlideOutTransition();
                break;
            case "ScaleDownPusherTransition":
                this._rootDrawer.drawerTransition = new ScaleDownPusherTransition();
                break;
            case "ScaleUpTransition":
                this._rootDrawer.drawerTransition = new ScaleUpTransition();
                break;
            case "SlideAlongTransition":
                this._rootDrawer.drawerTransition = new SlideAlongTransition();
                break;
            default:
                break;
        }

        console.log("Changed drawer transition to", transition);
    }

    public onNavBtnTap() {
        if (this._rootDrawer) {
            this._rootDrawer.toggleDrawerState();
        }
    }
}

export const ExamplesListDepthComponents = [ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component];
