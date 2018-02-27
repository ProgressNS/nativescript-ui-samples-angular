// >> gauges-animations-angular
import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { RadialNeedle } from "nativescript-ui-gauge";

@Component({
    moduleId: module.id,
    selector: "tk-gauges-animations",
    templateUrl: "gauges-animations.component.html",
    styleUrls: ["gauges-animations.component.css"]
})
export class GaugesAnimationsComponent implements AfterViewInit {
    private _needle: RadialNeedle;
    public values = [60, 80, 120, 160];

    constructor() { }

    ngAfterViewInit() {
        this._needle = this.needleElement.nativeElement as RadialNeedle;
    }

    @ViewChild("needle") needleElement: ElementRef;

    public onValueChange(value: number) {
        this._needle.value = value;
    }
}
// << gauges-animations-angular