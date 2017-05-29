import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { RadialNeedle } from "nativescript-telerik-ui-pro/gauges";

@Component({
    moduleId: module.id,
    selector: "tk-gauges-animations",
    templateUrl: "gauges-animations.component.html",
    styleUrls: ["gauges-animations.component.css"]
})
export class GaugesAnimationsComponent implements AfterViewInit {
    private _needle: RadialNeedle;

    constructor() { }

    ngAfterViewInit() {
        this._needle = this.needleElement.nativeElement as RadialNeedle;
    }

    @ViewChild("needle") needleElement: ElementRef;

    public on60Tapped() {
        this._needle.value = 60;
    }

    public on80Tapped() {
        this._needle.value = 80;
    }

    public on120Tapped() {
        this._needle.value = 120;
    }

    public on160Tapped() {
        this._needle.value = 160;
    }
}