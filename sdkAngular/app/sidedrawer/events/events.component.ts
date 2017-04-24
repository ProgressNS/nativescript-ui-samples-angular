import { Component, ElementRef, ViewChild, Injectable, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "tns-core-modules/ui/core/view";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { Page } from "tns-core-modules/ui/page";
import { ActionItem } from "tns-core-modules/ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui-pro/sidedrawer/angular";

// >> sidedrawer-angular-callbacks-definition
@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-events",
    templateUrl: 'events.component.html',
    styleUrls: ['events.component.css']
})
@Injectable()
export class SideDrawerEventsComponent implements AfterViewInit, OnInit {
    private _currentNotification: string;
    private _sideDrawerTransition: sideDrawerModule.DrawerTransitionBase;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._sideDrawerTransition = new sideDrawerModule.PushTransition();
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
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

    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
    }

    public onDrawerOpening() {
        this._currentNotification = "Drawer opening";
    }

    public onDrawerOpened() {
        this._currentNotification = "Drawer opened";
    }

    public onDrawerClosing() {
        this._currentNotification = "Drawer closing";
    }

    public onDrawerClosed() {
        this._currentNotification = "Drawer closed";
    }
}
// << sidedrawer-angular-callbacks-definition