import { Component, ElementRef, ViewChild, Injectable, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { SideDrawerLocation } from 'nativescript-telerik-ui-pro/sidedrawer';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { ObservableArray } from "data/observable-array";
import { DataService } from "../data.service";
import { DependencyObservable, Property, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { PropertyMetadata } from"ui/core/proxy";

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-position",
    providers: [DataService],
    templateUrl: 'position.component.html',
    styleUrls: ["position.component.css"]
})
@Injectable()
// >> sidedrawer-angular-position-code
export class SideDrawerPositionComponent implements OnInit {
    private _currentLocation : SideDrawerLocation;

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
    private drawer: SideDrawerType;

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
    
    public onRightLocationTap() {
        this.currentLocation = SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();
        
        this.drawer.showDrawer();
    }

    public onLeftLocationTap() {
        this.currentLocation = SideDrawerLocation.Left;
        this._changeDetectionRef.detectChanges();
        
        this.drawer.showDrawer();
    }

    public onBottomLocationTap() {
        this.currentLocation = SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();
        
        this.drawer.showDrawer();
    }

    public onTopLocationTap() {
        this.currentLocation = SideDrawerLocation.Top;
        this._changeDetectionRef.detectChanges();
        
        this.drawer.showDrawer();
    }
    // << (hide)
}
// << sidedrawer-angular-position-code