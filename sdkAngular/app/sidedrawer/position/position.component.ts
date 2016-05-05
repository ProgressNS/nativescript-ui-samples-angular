import {Component, ElementRef, ViewChild, Inject, OnInit} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";
import {Observable} from "data/observable";

@Component({
    selector: "sidedrawer-position",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'sidedrawer/position/position.component.html',
    styleUrls: [ "sidedrawer/position/position.component.css" ]
})
// >> sidedrawer-angular-position-code
export class AppComponent extends Observable implements OnInit{
    constructor(@Inject(Page) private page: Page) {
        super();
    }
    
    ngOnInit() {
        this.set("location", sideDrawerModule.SideDrawerLocation.Right);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
// << sidedrawer-angular-position-code
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    
    public onRightLocationTap(args) {
        this.setDrawerLocation(sideDrawerModule.SideDrawerLocation.Right);
    }

    public onLeftLocationTap(args) {
        this.setDrawerLocation(sideDrawerModule.SideDrawerLocation.Left);
    }

    public onBottomLocationTap(args) {
        this.setDrawerLocation(sideDrawerModule.SideDrawerLocation.Bottom);
    }

    public onTopLocationTap(args) {
        this.setDrawerLocation(sideDrawerModule.SideDrawerLocation.Top);
    }

    private setDrawerLocation(location: sideDrawerModule.SideDrawerLocation) {
        this.set("location", location);
        this.drawer.showDrawer();
    }
}
