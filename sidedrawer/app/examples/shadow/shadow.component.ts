import { Component, ViewChild, Injectable, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DataService } from "../data.service";
import * as colorModule from "tns-core-modules/color";

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-shadow",
    providers: [DataService],
    templateUrl: 'shadow.component.html',
    styleUrls: ["shadow.component.css"]
})
@Injectable()
export class SideDrawerShadowComponent implements AfterViewInit, OnInit {
    private _currentLocation: SideDrawerLocation;

    constructor(private page: Page, private _dataService: DataService, private _changeDetectionRef: ChangeDetectorRef) {
        this.page.on("loaded", this.onLoaded, this);
    }

    public onLoaded() {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    }

    ngOnInit() {
        this.currentLocation = SideDrawerLocation.Left;
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    get currentLocation(): SideDrawerLocation {
        return this._currentLocation;
    }

    set currentLocation(value: SideDrawerLocation) {
        this._currentLocation = value;
    }
    // >> (hide)
    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public onNoShadowTap() {
        let noColor = new colorModule.Color("#00000000");

        this.drawer.shadowColor = noColor;

        this.drawer.showDrawer();
    }

    public onRedShadowTap() {
        let redColor = new colorModule.Color("#FF0000");

        this.drawer.shadowColor = redColor;

        this.drawer.showDrawer();
    }

    public onDefaultShadowTap() {
        let defaultColor = RadSideDrawer.shadowColorProperty.defaultValue;

        this.drawer.shadowColor = defaultColor;

        this.drawer.showDrawer();
    }

    // << (hide)
}
