import { Component, ViewChild, OnInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { ActivatedRoute, Router } from '@angular/router';
import * as frameModule from "ui/frame";

@Component({
    moduleId: module.id,
    selector: "tk-second-over-navigation",
    templateUrl: 'second-over-navigation.component.html',
    styleUrls: ['second-over-navigation.component.css']
})
export class SecondSideDrawerOverNavigationComponent {
    private _mainContentText: string;

    constructor(private _router: Router, private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

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

    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}
