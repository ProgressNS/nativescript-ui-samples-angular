// >> gauges-customization-angular
import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { RadialScale, RadialBarIndicator } from "nativescript-ui-gauge";

@Component({
    moduleId: module.id,
    selector: "tk-gauges-customization",
    templateUrl: "gauges-customization.component.html",
    styleUrls: ["gauges-customization.component.css"]
})
export class GaugesCustomizationComponent implements AfterViewInit {
    constructor() {
    }
    
    @ViewChild("myScale") scaleElement: ElementRef;

    ngAfterViewInit() {
        let scale = this.scaleElement.nativeElement as RadialScale;
        for (var i = 0; i < scale.indicators.length; i++) {
            let barIndicator = scale.indicators.getItem(i) as RadialBarIndicator;
            if (barIndicator.maximum == 0) {
                barIndicator.maximum = Math.random() * 100;
            }
        }
    }
}
// << gauges-customization-angular
