import { Component } from "@angular/core";
import frameModule = require("tns-core-modules/ui/frame")
import { RadCalendar } from "nativescript-ui-calendar";
import { Button } from "tns-core-modules/ui/button"

@Component({
    moduleId: module.id,
    selector: "tk-calendar-localization",
    templateUrl: "calendar-localization.component.html"
})
export class CalendarLocalizationComponent {
    constructor() { }
    public btnChangeLocaleTap(args) {
        let topFrame = frameModule.topmost();
        let calendar: RadCalendar = <RadCalendar>topFrame.getViewById('calendar');
        calendar.locale = (<Button>args.object).text;
    }
}