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
    <RadSideDrawer #drawer (drawerOpening)="onDrawerOpening()" (drawerOpened)="onDrawerOpened()" (drawerClosing)="onDrawerClosing()" (drawerClosed)="onDrawerClosed()">
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
        <template drawerMain>
      <StackLayout>
        <Button text="OPEN DRAWER" cssClass="drawerContentText" (tap)=openDrawer()></Button>
      </StackLayout>
      </template>
    </RadSideDrawer>
`,
})
export class AppComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public currentDrawerNotification:string;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    
    public openDrawer(){
        this.drawer.showDrawer();
    }
    
     public onDrawerOpening() {
        console.log("Drawer opening");
    }

    public onDrawerOpened() {
         console.log("Drawer opened");
    }

    public onDrawerClosing() {
         console.log("Drawer closing");
    }

    public onDrawerClosed() {
         console.log("Drawer closed");
    }
    
   
}
