import {Component, ElementRef, ViewChild, Inject, OnInit, ChangeDetectorRef} from "@angular/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

@Component({
    selector: "sidedrawer-transitions",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'sidedrawer/transitions/transitions.component.html',
    styleUrls: ['sidedrawer/transitions/transitions.component.css']
})
// >> sidedrawer-angular-transition-definition
export class SidedrawerPositionComponent implements OnInit {
    constructor( @Inject(Page) private page: Page, private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    private drawer: SideDrawerType;

    public sideDrawerTransition = new sideDrawerModule.PushTransition();
    // << sidedrawer-angular-transition-definition

    public currentTransition: string = "PushTransition";

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {

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
                this.sideDrawerTransition = new sideDrawerModule.FadeTransition();
                break;
            case "PushTransition":
                this.sideDrawerTransition = new sideDrawerModule.PushTransition();
                break;
            case "RevealTransition":
                this.sideDrawerTransition = new sideDrawerModule.RevealTransition();
                break;
            case "ReverseSlideOutTransition":
                this.sideDrawerTransition = new sideDrawerModule.ReverseSlideOutTransition();
                break;
            case "ScaleDownPusherTransition":
                this.sideDrawerTransition = new sideDrawerModule.ScaleDownPusherTransition();
                break;
            case "ScaleUpTransition":
                this.sideDrawerTransition = new sideDrawerModule.ScaleUpTransition();
                break;
            case "SlideAlongTransition":
                this.sideDrawerTransition = new sideDrawerModule.SlideAlongTransition();
                break;
            case "SlideInOnTopTransition":
                this.sideDrawerTransition = new sideDrawerModule.SlideInOnTopTransition();
                break;
        }

        this.currentTransition = currentTransitionStr;
    }
}
