import { Component, ElementRef, ViewChild, Inject, OnInit, ChangeDetectorRef } from "angular2/core";
import { Page } from "ui/page";
import { SideDrawerLocation } from 'nativescript-telerik-ui-pro/sidedrawer';
import { RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective } from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";
import { ObservableArray } from "data/observable-array";
import { DataService } from "../data.service";
import * as DependencyObservableModule from "ui/core/dependency-observable";
import * as ProxyModule from"ui/core/proxy";

@Component({
    selector: "sidedrawer-position",
    providers: [DataService],
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'sidedrawer/position/position.component.html',
    styleUrls: ["sidedrawer/position/position.component.css"]
})
// >> sidedrawer-angular-position-code
export class AppComponent extends DependencyObservableModule.DependencyObservable implements OnInit {
    private static selectedLocationIndexProperty = new DependencyObservableModule.Property(
        "selectedLocationIndex",
        "AppComponent",
        new ProxyModule.PropertyMetadata(
            undefined,
            DependencyObservableModule.PropertyMetadataSettings.None,
            AppComponent.onSelectedLocationIndexPropertyChanged));
    private static locationsProperty = new DependencyObservableModule.Property(
        "locations",
        "AppComponent",
        new ProxyModule.PropertyMetadata(
            undefined,
            DependencyObservableModule.PropertyMetadataSettings.None));
    private static currentLocationroperty = new DependencyObservableModule.Property(
        "currentLocation",
        "AppComponent",
        new ProxyModule.PropertyMetadata(
            undefined,
            DependencyObservableModule.PropertyMetadataSettings.None));

    constructor( @Inject(Page) private page: Page, private _dataService: DataService, private _changeDetectionRef: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        this.locations = new ObservableArray(this._dataService.getDrawerLocations());
        this.currentLocation = SideDrawerLocation.Left;
        this.selectedLocationIndex = 0;
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    // << sidedrawer-angular-position-code
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    get selectedLocationIndex(): number {
        return this._getValue(AppComponent.selectedLocationIndexProperty);
    }

    set selectedLocationIndex(value: number) {
        this._setValue(AppComponent.selectedLocationIndexProperty, value);
    }

    get locations(): ObservableArray<SideDrawerLocation> {
        return this._getValue(AppComponent.locationsProperty);
    }

    set locations(value: ObservableArray<SideDrawerLocation>) {
        this._setValue(AppComponent.locationsProperty, value);
    }

    get currentLocation(): SideDrawerLocation {
        return this._getValue(AppComponent.currentLocationroperty);
    }

    set currentLocation(value: SideDrawerLocation) {
        this._setValue(AppComponent.currentLocationroperty, value);
    }

    private static onSelectedLocationIndexPropertyChanged(args) {
        var drawee: AppComponent = args.object;
        drawee.onSelectedLocationIndexChanged(args);
    }

    private onSelectedLocationIndexChanged(args) {
        this.currentLocation = this.locations.getItem(this.selectedLocationIndex);
    }

    public onOpenDrawerTap() {
        this.drawer.showDrawer();
    }
}
