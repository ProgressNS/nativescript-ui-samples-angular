import { Injectable } from '@angular/core';
import { CalendarSelectionShape, CalendarCellAlignment, CalendarFontStyle } from 'nativescript-ui-calendar';
import { Color } from "tns-core-modules/color";
import { CalendarMonthViewStyle, DayCellStyle, CellStyle, CalendarWeekViewStyle, CalendarYearViewStyle, MonthCellStyle, CalendarMonthNamesViewStyle, CalendarDayViewStyle, DayEventsViewStyle, AllDayEventsViewStyle } from "nativescript-ui-calendar";

// >> calendar-styling-service
@Injectable()
export class CalendarStylesService {
    private _brownColor = new Color("#745151");
    private _lightYellowColor = new Color("#f1e8ca");
    private _greenBlueColor = new Color("#66bbae");
    private _darkBrownColor = new Color("#5b391e");
    private _lightGreenColor = new Color("#9ebd9e");
    private _orangeColor = new Color("#dd855c");
    private _lightBrownColor = new Color("#dbcbbb");
    private _lightGrayColor = new Color("#bbcbdb");
    private _lightBlueColor = new Color("#B5B5F9");
    private _brightBlueColor = new Color("#0023ff");
    private _cyanColor = new Color("#00ffff");
    private _whiteColor = new Color("White");
    private _blackColor = new Color("Black");
    private _grayColor = new Color("Gray");
    private _redColor = new Color("Red");
    private _blueColor = new Color("Blue");
    private _blueVioletColor = new Color("BlueViolet");
    private _preferredFontName = "Times New Roman";

    getMonthViewStyle(): CalendarMonthViewStyle {
        const monthViewStyle = new CalendarMonthViewStyle();
        monthViewStyle.backgroundColor = this._grayColor;
        monthViewStyle.showTitle = true;
        monthViewStyle.showWeekNumbers = true;
        monthViewStyle.showDayNames = true;
        monthViewStyle.selectionShape = CalendarSelectionShape.Round;
        monthViewStyle.selectionShapeSize = 15;
        monthViewStyle.selectionShapeColor = this._redColor;

        const todayCellStyle = new DayCellStyle();
        todayCellStyle.cellBackgroundColor = this._greenBlueColor;
        todayCellStyle.cellBorderWidth = 2;
        todayCellStyle.cellBorderColor = this._lightYellowColor;
        todayCellStyle.cellTextColor = this._darkBrownColor;
        todayCellStyle.cellTextFontName = this._preferredFontName;
        todayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        todayCellStyle.cellTextSize = 14;
        monthViewStyle.todayCellStyle = todayCellStyle;

        const dayCellStyle = new DayCellStyle();
        dayCellStyle.showEventsText = true;
        dayCellStyle.eventTextColor = this._whiteColor;
        dayCellStyle.eventFontName = this._preferredFontName;
        dayCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        dayCellStyle.cellPaddingHorizontal = 10;
        dayCellStyle.cellPaddingVertical = 5;
        dayCellStyle.cellBackgroundColor = this._lightGreenColor;
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = this._lightYellowColor;
        dayCellStyle.cellTextColor = this._brownColor;
        dayCellStyle.cellTextFontName = this._preferredFontName;
        dayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        dayCellStyle.cellTextSize = 10;
        monthViewStyle.dayCellStyle = dayCellStyle;

        const weekendCellStyle = new DayCellStyle();
        weekendCellStyle.eventTextColor = this._blueVioletColor;
        weekendCellStyle.eventFontName = this._preferredFontName;
        weekendCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
        weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        weekendCellStyle.cellPaddingHorizontal = 10;
        weekendCellStyle.cellPaddingVertical = 5;
        weekendCellStyle.cellBackgroundColor = this._orangeColor;
        weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = this._lightYellowColor;
        weekendCellStyle.cellTextColor = this._brownColor;
        weekendCellStyle.cellTextFontName = this._preferredFontName;
        weekendCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        weekendCellStyle.cellTextSize = 12;
        monthViewStyle.weekendCellStyle = weekendCellStyle;

        const selectedCellStyle = new DayCellStyle();
        selectedCellStyle.eventTextColor = this._blueColor;
        selectedCellStyle.eventFontName = this._preferredFontName;
        selectedCellStyle.eventFontStyle = CalendarFontStyle.Bold;
        selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        selectedCellStyle.cellPaddingHorizontal = 10;
        selectedCellStyle.cellPaddingVertical = 5;
        selectedCellStyle.cellBackgroundColor = this._lightBrownColor;
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = this._brownColor;
        selectedCellStyle.cellTextColor = this._blackColor;
        selectedCellStyle.cellTextFontName = this._preferredFontName;
        selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        selectedCellStyle.cellTextSize = 18;
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;

        const weekNumberCellStyle = new CellStyle();
        weekNumberCellStyle.cellBackgroundColor = this._lightGrayColor;
        weekNumberCellStyle.cellBorderWidth = 1;
        weekNumberCellStyle.cellBorderColor = this._lightYellowColor;
        weekNumberCellStyle.cellTextColor = this._brownColor;
        weekNumberCellStyle.cellTextFontName = this._preferredFontName;
        weekNumberCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        weekNumberCellStyle.cellTextSize = 8;
        monthViewStyle.weekNumberCellStyle = weekNumberCellStyle;

        const dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = this._lightYellowColor;
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = this._brownColor;
        dayNameCellStyle.cellTextColor = this._brownColor;
        dayNameCellStyle.cellTextFontName = this._preferredFontName;
        dayNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        dayNameCellStyle.cellTextSize = 10;
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = this._lightGrayColor;
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = this._brownColor;
        titleCellStyle.cellTextColor = this._orangeColor;
        titleCellStyle.cellTextFontName = this._preferredFontName;
        titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        titleCellStyle.cellTextSize = 18;
        monthViewStyle.titleCellStyle = titleCellStyle;

        return monthViewStyle;
    }

    getWeekViewStyle(): CalendarWeekViewStyle {
        const weekViewStyle = new CalendarWeekViewStyle();
        weekViewStyle.backgroundColor = this._orangeColor;
        weekViewStyle.showTitle = true;
        weekViewStyle.showWeekNumbers = true;
        weekViewStyle.showDayNames = true;

        const todayCellStyle = new DayCellStyle();
        todayCellStyle.cellBackgroundColor = this._orangeColor;
        todayCellStyle.cellBorderWidth = 1;
        todayCellStyle.cellBorderColor = this._lightYellowColor;
        todayCellStyle.cellTextColor = this._brownColor;
        todayCellStyle.cellTextFontName = this._preferredFontName;
        todayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        todayCellStyle.cellTextSize = 14;
        weekViewStyle.todayCellStyle = todayCellStyle;

        const dayCellStyle = new DayCellStyle();
        dayCellStyle.showEventsText = true;
        dayCellStyle.eventTextColor = this._whiteColor;
        dayCellStyle.eventFontName = this._preferredFontName;
        dayCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        dayCellStyle.cellPaddingHorizontal = 10;
        dayCellStyle.cellPaddingVertical = 5;
        dayCellStyle.cellBackgroundColor = this._lightGreenColor;
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = this._lightYellowColor;
        dayCellStyle.cellTextColor = this._brownColor;
        dayCellStyle.cellTextFontName = this._preferredFontName;
        dayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        dayCellStyle.cellTextSize = 10;
        weekViewStyle.dayCellStyle = dayCellStyle;

        const weekendCellStyle = new DayCellStyle();
        weekendCellStyle.eventTextColor = this._blueVioletColor;
        weekendCellStyle.eventFontName = this._preferredFontName;
        weekendCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
        weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        weekendCellStyle.cellPaddingHorizontal = 10;
        weekendCellStyle.cellPaddingVertical = 5;
        weekendCellStyle.cellBackgroundColor = this._lightYellowColor;
        weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = this._lightYellowColor;
        weekendCellStyle.cellTextColor = this._brownColor;
        weekendCellStyle.cellTextFontName = this._preferredFontName;
        weekendCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        weekendCellStyle.cellTextSize = 12;
        weekViewStyle.weekendCellStyle = weekendCellStyle;

        const selectedCellStyle = new DayCellStyle();
        selectedCellStyle.eventTextColor = this._blueColor;
        selectedCellStyle.eventFontName = this._preferredFontName;
        selectedCellStyle.eventFontStyle = CalendarFontStyle.Bold;
        selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        selectedCellStyle.cellPaddingHorizontal = 10;
        selectedCellStyle.cellPaddingVertical = 5;
        selectedCellStyle.cellBackgroundColor = this._brownColor;
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = this._lightYellowColor;
        selectedCellStyle.cellTextColor = this._blackColor;
        selectedCellStyle.cellTextFontName = this._preferredFontName;
        selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        selectedCellStyle.cellTextSize = 18;
        weekViewStyle.selectedDayCellStyle = selectedCellStyle;

        const weekNumberCellStyle = new CellStyle();
        weekNumberCellStyle.cellBackgroundColor = this._lightGrayColor;
        weekNumberCellStyle.cellBorderWidth = 2;
        weekNumberCellStyle.cellBorderColor = this._brownColor;
        weekNumberCellStyle.cellTextColor = this._brownColor;
        weekNumberCellStyle.cellTextFontName = this._preferredFontName;
        weekNumberCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        weekNumberCellStyle.cellTextSize = 8;
        weekViewStyle.weekNumberCellStyle = weekNumberCellStyle;

        const dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = this._lightGrayColor;
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = this._lightYellowColor;
        dayNameCellStyle.cellTextColor = this._brownColor;
        dayNameCellStyle.cellTextFontName = this._preferredFontName;
        dayNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        dayNameCellStyle.cellTextSize = 10;
        weekViewStyle.dayNameCellStyle = dayNameCellStyle;

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = this._orangeColor;
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = this._lightYellowColor;
        titleCellStyle.cellTextColor = this._brownColor;
        titleCellStyle.cellTextFontName = this._preferredFontName;
        titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        titleCellStyle.cellTextSize = 18;
        weekViewStyle.titleCellStyle = titleCellStyle;

        return weekViewStyle;
    }

    getYearViewStyle(): CalendarYearViewStyle {
        const yearViewStyle = new CalendarYearViewStyle();

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = this._orangeColor;
        titleCellStyle.cellBorderWidth = 2;
        titleCellStyle.cellBorderColor = this._lightYellowColor;
        titleCellStyle.cellTextColor = this._brownColor;
        titleCellStyle.cellTextFontName = this._preferredFontName;
        titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        titleCellStyle.cellTextSize = 18;
        yearViewStyle.titleCellStyle = titleCellStyle;

        const monthCellStyle = new MonthCellStyle();
        monthCellStyle.weekendTextColor = this._orangeColor;
        monthCellStyle.todayTextColor = this._blackColor;
        monthCellStyle.dayTextColor = this._brownColor;
        monthCellStyle.dayFontName = this._preferredFontName;
        monthCellStyle.dayFontStyle = CalendarFontStyle.Bold;
        monthCellStyle.dayTextSize = 12;
        monthCellStyle.dayNameTextColor = this._lightGreenColor;
        monthCellStyle.dayNameFontName = this._preferredFontName;
        monthCellStyle.dayNameFontStyle = CalendarFontStyle.Bold;
        monthCellStyle.dayNameTextSize = 14;
        monthCellStyle.monthNameTextColor = this._orangeColor;
        monthCellStyle.monthNameFontName = this._preferredFontName;
        monthCellStyle.monthNameFontStyle = CalendarFontStyle.BoldItalic;
        monthCellStyle.monthNameTextSize = 15;
        yearViewStyle.monthCellStyle = monthCellStyle;

        return yearViewStyle;
    }

    getDayViewStyle(): CalendarDayViewStyle {
        const dayViewStyle = new CalendarDayViewStyle();
        dayViewStyle.backgroundColor = this._orangeColor;
        dayViewStyle.showWeekNumbers = true;
        dayViewStyle.showDayNames = true;
        dayViewStyle.showTitle = true;

        const todayCellStyle = new DayCellStyle();
        todayCellStyle.cellBackgroundColor = this._orangeColor;
        todayCellStyle.cellBorderWidth = 1;
        todayCellStyle.cellBorderColor = this._lightYellowColor;
        todayCellStyle.cellTextColor = this._brownColor;
        todayCellStyle.cellTextFontName = this._preferredFontName;
        todayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        todayCellStyle.cellTextSize = 14;
        dayViewStyle.todayCellStyle = todayCellStyle;

        const dayCellStyle = new DayCellStyle();
        dayCellStyle.showEventsText = true;
        dayCellStyle.eventTextColor = this._whiteColor;
        dayCellStyle.eventFontName = this._preferredFontName;
        dayCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        dayCellStyle.cellPaddingHorizontal = 10;
        dayCellStyle.cellPaddingVertical = 5;
        dayCellStyle.cellBackgroundColor = this._lightGreenColor;
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = this._lightYellowColor;
        dayCellStyle.cellTextColor = this._brownColor;
        dayCellStyle.cellTextFontName = this._preferredFontName;
        dayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        dayCellStyle.cellTextSize = 10;
        dayViewStyle.dayCellStyle = dayCellStyle;

        const weekendCellStyle = new DayCellStyle();
        weekendCellStyle.eventTextColor = this._blueVioletColor;
        weekendCellStyle.eventFontName = this._preferredFontName;
        weekendCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
        weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        weekendCellStyle.cellPaddingHorizontal = 10;
        weekendCellStyle.cellPaddingVertical = 5;
        weekendCellStyle.cellBackgroundColor = this._lightYellowColor;
        weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = this._lightYellowColor;
        weekendCellStyle.cellTextColor = this._brownColor;
        weekendCellStyle.cellTextFontName = this._preferredFontName;
        weekendCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        weekendCellStyle.cellTextSize = 12;
        dayViewStyle.weekendCellStyle = weekendCellStyle;

        const selectedCellStyle = new DayCellStyle();
        selectedCellStyle.eventTextColor = this._blueColor;
        selectedCellStyle.eventFontName = this._preferredFontName;
        selectedCellStyle.eventFontStyle = CalendarFontStyle.Bold;
        selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
        selectedCellStyle.cellPaddingHorizontal = 10;
        selectedCellStyle.cellPaddingVertical = 5;
        selectedCellStyle.cellBackgroundColor = this._brownColor;
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = this._lightYellowColor;
        selectedCellStyle.cellTextColor = this._blackColor;
        selectedCellStyle.cellTextFontName = this._preferredFontName;
        selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        selectedCellStyle.cellTextSize = 18;
        dayViewStyle.selectedDayCellStyle = selectedCellStyle;

        const weekNumberCellStyle = new CellStyle();
        weekNumberCellStyle.cellBackgroundColor = this._lightGrayColor;
        weekNumberCellStyle.cellBorderWidth = 1;
        weekNumberCellStyle.cellBorderColor = this._lightYellowColor;
        weekNumberCellStyle.cellTextColor = this._brownColor;
        weekNumberCellStyle.cellTextFontName = this._preferredFontName;
        weekNumberCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        weekNumberCellStyle.cellTextSize = 8;
        dayViewStyle.weekNumberCellStyle = weekNumberCellStyle;

        const dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = this._lightYellowColor;
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = this._brownColor;
        dayNameCellStyle.cellTextColor = this._brownColor;
        dayNameCellStyle.cellTextFontName = this._preferredFontName;
        dayNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        dayNameCellStyle.cellTextSize = 10;
        dayViewStyle.dayNameCellStyle = dayNameCellStyle;

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = this._orangeColor;
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = this._lightYellowColor;
        titleCellStyle.cellTextColor = this._brownColor;
        titleCellStyle.cellTextFontName = this._preferredFontName;
        titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        titleCellStyle.cellTextSize = 18;
        dayViewStyle.titleCellStyle = titleCellStyle;

        const dayEventsViewStyle = new DayEventsViewStyle();
        dayEventsViewStyle.backgroundColor = this._lightBlueColor;
        dayEventsViewStyle.timeLabelFormat = "HH:mm";
        dayEventsViewStyle.timeLabelTextColor = this._brightBlueColor;
        dayEventsViewStyle.timeLabelTextSize = 12;
        dayViewStyle.dayEventsViewStyle = dayEventsViewStyle;

        const allDayEventsViewStyle = new AllDayEventsViewStyle();
        allDayEventsViewStyle.backgroundColor = this._cyanColor;
        allDayEventsViewStyle.allDayText = "DAILY";
        allDayEventsViewStyle.allDayTextIsVisible = true;
        dayViewStyle.allDayEventsViewStyle = allDayEventsViewStyle;

        return dayViewStyle;
    }

    getMonthNamesViewStyle(): CalendarMonthNamesViewStyle {
        const monthNamesViewStyle = new CalendarMonthNamesViewStyle();

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = this._orangeColor;
        titleCellStyle.cellBorderWidth = 2;
        titleCellStyle.cellBorderColor = this._lightYellowColor;
        titleCellStyle.cellTextColor = this._brownColor;
        titleCellStyle.cellTextFontName = this._preferredFontName;
        titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        titleCellStyle.cellTextSize = 18;
        monthNamesViewStyle.titleCellStyle = titleCellStyle;

        const monthNameCellStyle = new CellStyle();
        monthNameCellStyle.cellBackgroundColor = this._lightGreenColor;
        monthNameCellStyle.cellBorderWidth = 2;
        monthNameCellStyle.cellBorderColor = this._lightYellowColor;
        monthNameCellStyle.cellTextColor = this._brownColor;
        monthNameCellStyle.cellTextFontName = this._preferredFontName;
        monthNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
        monthNameCellStyle.cellTextSize = 20;
        monthNamesViewStyle.monthNameCellStyle = monthNameCellStyle;

        return monthNamesViewStyle;
    }
    // << calendar-styling-service
}
