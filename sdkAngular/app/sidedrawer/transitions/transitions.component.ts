import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

@Component({
    selector: "sidedrawer-transitions",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'sidedrawer/transitions/transitions.component.html'
})
// >> sidedrawer-angular-transition-definition
export class SidedrawerPositionComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public sideDrawerTransition = new sideDrawerModule.PushTransition();
// << sidedrawer-angular-transition-definition
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    
   public openDrawer(){
        this.drawer.showDrawer();
    }
    
     public onFadeTransitionTap(args) {
        this.setDrawerTransition(new sideDrawerModule.FadeTransition());
    }

    public onPushTransitionTap(args) {
        this.setDrawerTransition(new sideDrawerModule.PushTransition());
    }

    public onRevealTransitionTap(args) {
        this.setDrawerTransition(new sideDrawerModule.RevealTransition());
    }

    public onReverseSlideOutTransitionTap(args) {
        this.setDrawerTransition(new sideDrawerModule.ReverseSlideOutTransition());
    }

    public onScaleDownPusherTransitionTap(args) {
        this.setDrawerTransition(new sideDrawerModule.ScaleDownPusherTransition());
    }

    public onScaleUpTransitionTap(args) {
        this.setDrawerTransition(new sideDrawerModule.ScaleUpTransition());
    }

    public onSlideAlongTransitionTap(args) {
        this.setDrawerTransition(new sideDrawerModule.SlideAlongTransition());
    }

    public onSlideInOnTopTransitionTap(args) {
       this.setDrawerTransition(new sideDrawerModule.SlideInOnTopTransition());
    }

    public openSideDrawer() {
        this.drawer.showDrawer();
    }

    private setDrawerTransition(transition: sideDrawerModule.DrawerTransitionBase) {
       this.sideDrawerTransition = transition;
    }
}
