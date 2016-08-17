import { Component, ElementRef, ViewChild, Injectable, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "ui/core/view";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
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
    constructor(private _page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        this._page.on("loaded", this.onLoaded, this);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    private drawer: SideDrawerType;

    public sideDrawerTransition: DrawerTransitionBase;
    // << sidedrawer-angular-transition-definition

    public currentTransition: string;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
    }

    public onLoaded(args) {
        this.setDrawerTransition("PushTransition");
    }


    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onFadeTransitionTap(args) {
        this.setDrawerTransition("FadeTransition");
    }

    public onPushTransitionTap(args) {
        this.setDrawerTransition("PushTransition");
    }

    public onRevealTransitionTap(args) {
        this.setDrawerTransition("RevealTransition");
    }

    public onReverseSlideOutTransitionTap(args) {
        this.setDrawerTransition("ReverseSlideOutTransition");
    }

    public onScaleDownPusherTransitionTap(args) {
        this.setDrawerTransition("ScaleDownPusherTransition");
    }

    public onScaleUpTransitionTap(args) {
        this.setDrawerTransition("ScaleUpTransition");
    }

    public onSlideAlongTransitionTap(args) {
        this.setDrawerTransition("SlideAlongTransition");
    }

    public onSlideInOnTopTransitionTap(args) {
        this.setDrawerTransition("SlideInOnTopTransition");
    }

    public openSideDrawer() {
        this.drawer.showDrawer();
    }

    private setDrawerTransition(currentTransitionStr: string) {
        switch (currentTransitionStr) {
            case "FadeTransition":
                this.sideDrawerTransition = new FadeTransition();
                break;
            case "PushTransition":
                this.sideDrawerTransition = new PushTransition();
                break;
            case "RevealTransition":
                this.sideDrawerTransition = new RevealTransition();
                break;
            case "ReverseSlideOutTransition":
                this.sideDrawerTransition = new ReverseSlideOutTransition();
                break;
            case "ScaleDownPusherTransition":
                this.sideDrawerTransition = new ScaleDownPusherTransition();
                break;
            case "ScaleUpTransition":
                this.sideDrawerTransition = new ScaleUpTransition();
                break;
            case "SlideAlongTransition":
                this.sideDrawerTransition = new SlideAlongTransition();
                break;
            case "SlideInOnTopTransition":
                this.sideDrawerTransition = new SlideInOnTopTransition();
                break;
        }

        this.currentTransition = currentTransitionStr;
    }
}
