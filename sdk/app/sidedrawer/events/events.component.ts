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
    templateUrl: 'sidedrawer/evets/events.component.html'
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
