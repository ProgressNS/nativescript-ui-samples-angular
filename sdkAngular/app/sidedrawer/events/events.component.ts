import {Component, ElementRef, ViewChild, Inject, OnInit} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

// >> sidedrawer-angular-callbacks-definition
@Component({
    selector: "sidedrawer-events",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'sidedrawer/events/events.component.html'
})
export class AppComponent implements OnInit {
    private _currentNotification: string;

    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    
    ngOnInit() {
        //this._currentNotification = "";
    }

    public get currentNotification(): string {
        return this._currentNotification;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onDrawerOpening() {
        console.log("Drawer opening");
        this._currentNotification = "Drawer opening";
    }

    public onDrawerOpened() {
        console.log("Drawer opened");
        this._currentNotification = "Drawer opened";
    }

    public onDrawerClosing() {
        console.log("Drawer closing");
        this._currentNotification = "Drawer closing";
    }

    public onDrawerClosed() {
        console.log("Drawer closed");
        this._currentNotification = "Drawer closed";
    }
}
// << sidedrawer-angular-callbacks-definition