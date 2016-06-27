import { Component, ElementRef, ViewChild, Inject, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "ui/core/view";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui-pro/sidedrawer/angular";

// >> sidedrawer-angular-callbacks-definition
@Component({
    moduleId: module.id,
    selector: "sidedrawer-events",
    templateUrl: 'events.component.html',
    styleUrls: ['events.component.css']
})
export class SideDrawerEventsComponent implements OnInit {
    private _currentNotification: string;
    private _sideDrawerTransition: sideDrawerModule.DrawerTransitionBase;

    constructor( @Inject(Page) private _page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        this._page.on("loaded", this.onLoaded, this);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
    }

    public onLoaded(args) {
        this._sideDrawerTransition = new sideDrawerModule.PushTransition();
    }

    public get sideDrawerTransition(): sideDrawerModule.DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    public get currentNotification(): string {
        return this._currentNotification;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onDrawerOpening() {
        console.log("Drawer opening");
        this._currentNotification = "Drawer opening";
    }

    public onDrawerOpened() {
        console.log("Drawer opened");
        this._currentNotification = "Drawer opened";
    }

    public onDrawerClosing() {
        console.log("Drawer closing");
        this._currentNotification = "Drawer closing";
    }

    public onDrawerClosed() {
        console.log("Drawer closed");
        this._currentNotification = "Drawer closed";
    }
}
// << sidedrawer-angular-callbacks-definition