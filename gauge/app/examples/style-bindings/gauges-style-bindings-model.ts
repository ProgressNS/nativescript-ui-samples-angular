import { Observable } from 'tns-core-modules/data/observable';

export class StyleBindingsModel extends Observable {

    public title: string;
    public titleTextColor: string;
    public titleTextSize: number;
    public titleVerticalOffset: number;
    public titleHorizontalOffset: number;

    public subtitle: string;
    public subtitleTextColor: string;
    public subtitleTextSize: number;
    public subtitleVerticalOffset: number;
    public subtitleHorizontalOffset: number;

    public majorTicksCount: number;
    public minorTicksCount: number;
    public majorTicksWidth: number;
    public minorTicksWidth: number;
    public lineThickness: number;
    public lineColor: string;
    public labelsColor: string;
    public labelsCount: number;
    public androidLabelsSize: number;
    public iosLabelsSize: number;
    public labelsVisible: boolean;

    public needleValue: number;
    public needleLength: number;
    public circleRadius: number;
    public fillColor: string;
    public strokeColor: string;
    public strokeWidth: number;
    public bottomWidth: number;
    public topWidth: number;

    public firstPoint: number;
    public secondPoint: number;
    public firstColor: string;
    public secondColor: string;
    public barWidth: number;

    constructor() {
        super();

        this.title = "Speed";
        this.titleTextSize = 40;
        this.titleVerticalOffset = 60;
        this.titleHorizontalOffset = 0;

        this.subtitle = "km/h";
        this.subtitleTextSize = 20;
        this.subtitleVerticalOffset = -10;
        this.subtitleHorizontalOffset = 10;

        this.majorTicksCount = 10;
        this.minorTicksCount = 4;
        this.majorTicksWidth = 5;
        this.minorTicksWidth = 1;
        this.lineThickness = 2;
        this.labelsCount = 10;
        this.androidLabelsSize = 10;
        this.iosLabelsSize = 40;
        this.labelsVisible = true;

        this.needleLength = 0.8;
        this.circleRadius = 7;
        this.strokeWidth = 3;
        this.bottomWidth = 12;
        this.topWidth = 1;

        this.firstPoint = 60;
        this.secondPoint = 120;
        this.barWidth = 0.1;

        this.reset();
    }

    public onUpdate() {
        this.set("needleValue", 136);
        this.set("titleTextColor", "DarkRed");
        this.set("subtitleTextColor", "Red");
        this.set("fillColor", "Red");
        this.set("firstColor", "LightGray");
        this.set("labelsColor", "DarkRed");
        this.set("lineColor", "SlateGray");
        this.set("secondColor", "Black");
        this.set("strokeColor", "DarkGray");
    }

    public onReset() {
        this.reset();
    }

    reset() {
        this.set("needleValue", 48);
        this.resetColors();
    }

    resetColors() {
        this.set("titleTextColor", "DarkGreen");
        this.set("subtitleTextColor", "Green");
        this.set("labelsColor", "Green");
        this.set("lineColor", "Orange");
        this.set("fillColor", "#9DCA56");
        this.set("firstColor", "#9DCA56");
        this.set("secondColor", "#F0C44D");
        this.set("strokeColor", "Gray");
    }
}
