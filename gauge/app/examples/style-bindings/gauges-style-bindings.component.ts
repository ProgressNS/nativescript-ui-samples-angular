import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { TitleStyle, SubtitleStyle, BarIndicatorStyle, ScaleStyle, NeedleStyle,
    RadRadialGauge, RadialScale, BarIndicator, RadialNeedle } from "nativescript-ui-gauge";
import { StyleBindingsModel } from "./gauges-style-bindings-model";
import { Color } from "tns-core-modules/color";

@Component({
    moduleId: module.id,
    selector: "tk-gauges-style-bindings",
    templateUrl: "gauges-style-bindings.component.html",
    styleUrls: ["gauges-style-bindings.component.css"]
})
export class GaugesStyleBindingsComponent implements OnInit {
    public model: StyleBindingsModel;
    private _titleStyle: TitleStyle;
    private _subtitleStyle: SubtitleStyle;
    private _scaleStyle: ScaleStyle;
    private _firstIndicatorStyle: BarIndicatorStyle;
    private _secondIndicatorStyle: BarIndicatorStyle;
    private _needleStyle: NeedleStyle;
    private _needle: RadialNeedle;

    constructor() {
        this.model = new StyleBindingsModel();
    }

    @ViewChild("myGauge") gaugeElement: ElementRef;

    ngOnInit() {
    }

    public onLoaded() {
        let gauge = this.gaugeElement.nativeElement as RadRadialGauge;
        this._titleStyle = gauge.titleStyle;
        this._subtitleStyle = gauge.subtitleStyle;
        let scale = <RadialScale>gauge.scales.getItem(0);
        this._scaleStyle = scale.scaleStyle;
        this._firstIndicatorStyle = (<BarIndicator>scale.indicators.getItem(0)).indicatorStyle;
        this._secondIndicatorStyle = (<BarIndicator>scale.indicators.getItem(1)).indicatorStyle;
        this._needle = <RadialNeedle>scale.indicators.getItem(scale.indicators.length - 1);
        this._needleStyle = this._needle.needleStyle;
    }

    public onUpdate() {
        this._needle.value = 136;
        this._titleStyle.textColor = new Color("DarkRed");
        this._subtitleStyle.textColor = new Color("Red");
        this._needleStyle.fillColor = new Color("Red");
        this._needleStyle.circleFillColor = new Color("Red");
        this._needleStyle.strokeColor = new Color("DarkGray");
        this._needleStyle.circleStrokeColor = new Color("DarkGray");
        this._firstIndicatorStyle.fillColor = new Color("LightGray");
        this._secondIndicatorStyle.fillColor = new Color("Black");
        this._scaleStyle.lineColor = new Color("SlateGray");
        this._scaleStyle.labelsColor = new Color("DarkRed");
    }

    public onReset() {
        this.model.onReset();
        this._needle.value = this.model.needleValue;
        this._titleStyle.textColor = this.model.titleTextColor;
        this._subtitleStyle.textColor = this.model.subtitleTextColor;
        this._needleStyle.fillColor = this.model.fillColor;
        this._needleStyle.circleFillColor = this.model.fillColor;
        this._needleStyle.strokeColor = this.model.strokeColor;
        this._needleStyle.circleStrokeColor = this.model.strokeColor;
        this._firstIndicatorStyle.fillColor = this.model.firstColor;
        this._secondIndicatorStyle.fillColor = this.model.secondColor;
        this._scaleStyle.lineColor = this.model.lineColor;
        this._scaleStyle.labelsColor = this.model.labelsColor;
    }
}