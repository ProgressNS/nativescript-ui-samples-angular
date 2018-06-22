import { Component, ElementRef, ViewChild, Injectable, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "tns-core-modules/ui/core/view";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Page } from "tns-core-modules/ui/page";
import { ActionItem } from "tns-core-modules/ui/action-bar";
import { FadeTransition, DrawerTransitionBase, PushTransition, RevealTransition, ReverseSlideOutTransition, ScaleDownPusherTransition, ScaleUpTransition, SlideAlongTransition, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-transitions",
    templateUrl: 'transitions.component.html',
    styleUrls: ['transitions.component.css']
})
@Injectable()
// >> sidedrawer-angular-transition-definition
export class SideDrawerTransitionsComponent implements AfterViewInit, OnInit {
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    private drawer: RadSideDrawer;


    public currentTransition: string;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.sideDrawerTransition = new PushTransition();
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    set sideDrawerTransition(value: DrawerTransitionBase) {
        this._sideDrawerTransition = value;
    }

    // >> (hide)

    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
    }
    public onFadeTransitionTap() {
        this.sideDrawerTransition = new FadeTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onPushTransitionTap() {
        this.sideDrawerTransition = new PushTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onRevealTransitionTap() {
        this.sideDrawerTransition = new RevealTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onReverseSlideOutTransitionTap() {
        this.sideDrawerTransition = new ReverseSlideOutTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onScaleDownPusherTransitionTap() {
        this.sideDrawerTransition = new ScaleDownPusherTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onScaleUpTransitionTap() {
        this.sideDrawerTransition = new ScaleUpTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onSlideAlongTransitionTap() {
        this.sideDrawerTransition = new SlideAlongTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onSlideInOnTopTransitionTap() {
        this.sideDrawerTransition = new SlideInOnTopTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }
    // << (hide)
}
// << sidedrawer-angular-transition-definition

