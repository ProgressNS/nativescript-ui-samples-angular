import { Component, ElementRef, ViewChild, Injectable, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "tns-core-modules/ui/core/view";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { DrawerTransitionBase, PushTransition, RadSideDrawer, DrawerStateChangingEventArgs, DrawerStateChangedEventArgs } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

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
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._sideDrawerTransition = new PushTransition();
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
    }

    public get sideDrawerTransition(): DrawerTransitionBase {
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

    public onDrawerOpening(args: DrawerStateChangingEventArgs) {
        this._currentNotification = "Drawer opening";
    }

    public onDrawerOpened(args: DrawerStateChangedEventArgs) {
        this._currentNotification = "Drawer opened";
    }

    public onDrawerClosing(args: DrawerStateChangingEventArgs) {
        this._currentNotification = "Drawer closing";
    }

    public onDrawerClosed(args: DrawerStateChangedEventArgs) {
        this._currentNotification = "Drawer closed";
    }

    public onDrawerPan(args: DrawerStateChangedEventArgs) {
        this._currentNotification = "Drawer pan";
    }
}
// << sidedrawer-angular-callbacks-definition
