import { Component, Injectable, ViewChild } from "@angular/core";
import { CalendarSelectionMode, DateRange } from "nativescript-ui-calendar";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-programmatic-selection",
    templateUrl: "calendar-programmatic-selection.component.html"
})
@Injectable()
export class CalendarProgrammaticSelectionComponent {
    constructor() {
    }

    @ViewChild("myCalendar", { static: false }) _calendar: RadCalendarComponent;

    // >> angular-calendar-programmatic-selection
    onSingleSelectionTap() {
        this._calendar.nativeElement.selectionMode = CalendarSelectionMode.Single;
        let selectedDate = this.dateTomorrow();
        this._calendar.nativeElement.selectedDate = selectedDate;
    }

    onMultipleSelectionTap() {
        this._calendar.nativeElement.selectionMode = CalendarSelectionMode.Multiple;
        let firstSelectedDate = this.dateTomorrow();
        let secondSelectedDate = this.dateNextWeek();
        this._calendar.nativeElement.selectedDates = [firstSelectedDate, secondSelectedDate];
    }

    onRangeSelectionTap() {
        this._calendar.nativeElement.selectionMode = CalendarSelectionMode.Range;
        let firstSelectedDate = this.dateTomorrow();
        let lastSelectedDate = this.dateNextWeek();
        this._calendar.nativeElement.selectedDateRange = new DateRange(firstSelectedDate, lastSelectedDate);
    }

    onClearSelectionTap() {
        this._calendar.nativeElement.clearSelection();
    }
    // << angular-calendar-programmatic-selection

    dateTomorrow(): Date {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    }

    dateNextWeek(): Date {
        let date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
    }
}
