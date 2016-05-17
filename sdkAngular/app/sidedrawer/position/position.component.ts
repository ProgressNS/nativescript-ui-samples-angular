import { Component, ElementRef, ViewChild, Inject, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { SideDrawerLocation } from 'nativescript-telerik-ui-pro/sidedrawer';
import { RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective } from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";
import { ObservableArray } from "data/observable-array";
import { DataService } from "../data.service";
import * as DependencyObservableModule from "ui/core/dependency-observable";
import * as ProxyModule from"ui/core/proxy";

@Component({
    moduleId: module.id,
    selector: "sidedrawer-position",
    providers: [DataService],
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    templateUrl: 'position.component.html',
    styleUrls: ["position.component.css"]
})
// >> sidedrawer-angular-position-code
export class SidedrawerPositionComponent extends DependencyObservableModule.DependencyObservable implements OnInit {
    private static selectedLocationIndexProperty = new DependencyObservableModule.Property(
        "selectedLocationIndex",
        "SidedrawerPositionComponent",
        new ProxyModule.PropertyMetadata(
            undefined,
            DependencyObservableModule.PropertyMetadataSettings.None,
            SidedrawerPositionComponent.onSelectedLocationIndexPropertyChanged));
    private static locationsProperty = new DependencyObservableModule.Property(
        "locations",
        "SidedrawerPositionComponent",
        new ProxyModule.PropertyMetadata(
            undefined,
            DependencyObservableModule.PropertyMetadataSettings.None));
    private static currentLocationroperty = new DependencyObservableModule.Property(
        "currentLocation",
        "SidedrawerPositionComponent",
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
        return this._getValue(SidedrawerPositionComponent.selectedLocationIndexProperty);
    }

    set selectedLocationIndex(value: number) {
        this._setValue(SidedrawerPositionComponent.selectedLocationIndexProperty, value);
    }

    get locations(): ObservableArray<SideDrawerLocation> {
        return this._getValue(SidedrawerPositionComponent.locationsProperty);
    }

    set locations(value: ObservableArray<SideDrawerLocation>) {
        this._setValue(SidedrawerPositionComponent.locationsProperty, value);
    }

    get currentLocation(): SideDrawerLocation {
        return this._getValue(SidedrawerPositionComponent.currentLocationroperty);
    }

    set currentLocation(value: SideDrawerLocation) {
        this._setValue(SidedrawerPositionComponent.currentLocationroperty, value);
    }

    private static onSelectedLocationIndexPropertyChanged(args) {
        var drawee: SidedrawerPositionComponent = args.object;
        drawee.onSelectedLocationIndexChanged(args);
    }

    private onSelectedLocationIndexChanged(args) {
        this.currentLocation = this.locations.getItem(this.selectedLocationIndex);
    }

    public onOpenDrawerTap() {
        this.drawer.showDrawer();
    }
}
