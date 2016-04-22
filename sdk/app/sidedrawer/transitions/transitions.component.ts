import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

@Component({
    selector: "my-app",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    template: `
    <RadSideDrawer #drawer [transition]="sideDrawerTransition">
        <template drawerSide>
        <StackLayout cssClass="drawerContent">
        <StackLayout cssClass="headerContent">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <StackLayout cssClass="drawerMenuContent">
          <Label text="Primary" cssClass="drawerSectionHeader"></Label>
          <Label text="Social" cssClass="drawerSectionItem"></Label>
          <Label text="Promotions" cssClass="drawerSectionItem"></Label>
          <Label text="Labels" cssClass="drawerSectionHeader"></Label>
          <Label text="Important" cssClass="drawerSectionItem"></Label>
          <Label text="Starred" cssClass="drawerSectionItem"></Label>
          <Label text="Sent Mail" cssClass="drawerSectionItem"></Label>
          <Label text="Drafts" cssClass="drawerSectionItem"></Label>
        </StackLayout>
      </StackLayout>
        </template>      
      <StackLayout *drawerMain> 
          <Button text="Fade Transition" (tap)="onFadeTransitionTap()" cssClass="drawerContentButton"></Button>
          <Button text="Push Transition" (tap)="onPushTransitionTap()" cssClass="drawerContentButton"></Button>
          <Button text="Reveal Transition" (tap)="onRevealTransitionTap()" cssClass="drawerContentButton"></Button>
          <Button text="ReverseSlideOut Transition" (tap)="onReverseSlideOutTransitionTap()" cssClass="drawerContentButton"></Button>
          <Button text="ScaleDownPusher Transition" (tap)="onScaleDownPusherTransitionTap()" cssClass="drawerContentButton"></Button>
          <Button text="ScaleUp Transition" (tap)="onScaleUpTransitionTap()" cssClass="drawerContentButton"></Button>
          <Button text="SlideAlong Transition" (tap)="onSlideAlongTransitionTap()" cssClass="drawerContentButton"></Button>
          <Button text="SlideInOnTop Transition" (tap)="onSlideInOnTopTransitionTap()" cssClass="drawerContentButton"></Button>
      </StackLayout>
    </RadSideDrawer>
`,
})
export class AppComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public sideDrawerTransition = new sideDrawerModule.PushTransition();

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        const sideDrawerItem = new ActionItem();
        sideDrawerItem.text = "OPEN";
        sideDrawerItem.on("tap", () => this.drawer.toggleDrawerState());
        this.page.actionBar.actionItems.addItem(sideDrawerItem);
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
