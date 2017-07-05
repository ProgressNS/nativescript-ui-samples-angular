import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { RouterExtensions } from 'nativescript-angular/router';
import * as frameModule from "tns-core-modules/ui/frame";

@Component({
    moduleId: module.id,
    selector: "tk-second-over-navigation",
    templateUrl: 'second-over-navigation.component.html',
    styleUrls: ['second-over-navigation.component.css']
})
export class SecondSideDrawerOverNavigationComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;

    constructor(private routerExtensions: RouterExtensions, private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    ngOnInit() {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
    }

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }

    public goBack() {
        this.routerExtensions.back();
    }
}
