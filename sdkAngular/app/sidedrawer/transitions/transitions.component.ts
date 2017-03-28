import { Component, ElementRef, ViewChild, Injectable, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "tns-core-modules/ui/core/view";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { Page } from "tns-core-modules/ui/page";
import { ActionItem } from "tns-core-modules/ui/action-bar";
import { FadeTransition, DrawerTransitionBase, PushTransition, RevealTransition, ReverseSlideOutTransition, ScaleDownPusherTransition, ScaleUpTransition, SlideAlongTransition, SlideInOnTopTransition } from 'nativescript-telerik-ui-pro/sidedrawer';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui-pro/sidedrawer/angular";

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-transitions",
    templateUrl: 'transitions.component.html',
    styleUrls: ['transitions.component.css']
})
@Injectable()
// >> sidedrawer-angular-transition-definition
export class SideDrawerTransitionsComponent implements OnInit {
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    private drawer: SideDrawerType;


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
    public onFadeTransitionTap(args) {
        this.sideDrawerTransition = new FadeTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onPushTransitionTap(args) {
        this.sideDrawerTransition = new PushTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onRevealTransitionTap(args) {
        this.sideDrawerTransition = new RevealTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onReverseSlideOutTransitionTap(args) {
        this.sideDrawerTransition = new ReverseSlideOutTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onScaleDownPusherTransitionTap(args) {
        this.sideDrawerTransition = new ScaleDownPusherTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onScaleUpTransitionTap(args) {
        this.sideDrawerTransition = new ScaleUpTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onSlideAlongTransitionTap(args) {
        this.sideDrawerTransition = new SlideAlongTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }

    public onSlideInOnTopTransitionTap(args) {
        this.sideDrawerTransition = new SlideInOnTopTransition();
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    }
    // << (hide)
}
// << sidedrawer-angular-transition-definition

