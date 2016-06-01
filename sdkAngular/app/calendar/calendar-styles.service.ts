
import {Injectable} from '@angular/core';
import {CalendarEvent} from 'nativescript-telerik-ui-pro/calendar' 
import { Color } from "color";
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

@Injectable()
export class CalendarStylesService {
    getMonthViewStyle(): calendarModule.CalendarMonthViewStyle {
        var monthViewStyle = new calendarModule.CalendarMonthViewStyle();
        monthViewStyle.backgroundColor = "Gray";
        monthViewStyle.showTitle = true;
        monthViewStyle.showWeekNumbers = true;
        monthViewStyle.showDayNames = true;
       
        var todayCellStyle = new calendarModule.DayCellStyle();
        todayCellStyle.cellBackgroundColor = "#66bbae";
        todayCellStyle.cellBorderWidth = 2;
        todayCellStyle.cellBorderColor = "#f1e8ca";
        todayCellStyle.cellTextColor = "#5b391e";
        todayCellStyle.cellTextFontName = "Times New Roman";
        todayCellStyle.cellTextFontStyle = "Bold";
        todayCellStyle.cellTextSize = 14;
        monthViewStyle.todayCellStyle = todayCellStyle;
        
        var dayCellStyle = new calendarModule.DayCellStyle();
        dayCellStyle.showEventsText = true;
        dayCellStyle.eventTextColor = "White";
        dayCellStyle.eventFontName = "Times New Roman";
        dayCellStyle.eventFontStyle = "BoldItalic";
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = "VerticalCenter";
        dayCellStyle.cellPaddingHorizontal = 10;
        dayCellStyle.cellPaddingVertical = 5;
        dayCellStyle.cellBackgroundColor = "#9ebd9e";
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = "#f1e8ca";
        dayCellStyle.cellTextColor = "#745151";
        dayCellStyle.cellTextFontName = "Times New Roman";
        dayCellStyle.cellTextFontStyle = "Bold";
        dayCellStyle.cellTextSize = 10;
        monthViewStyle.dayCellStyle = dayCellStyle;
        
        var weekendCellStyle = new calendarModule.DayCellStyle();
        weekendCellStyle.eventTextColor = "BlueViolet";
        weekendCellStyle.eventFontName = "Times New Roman";
        weekendCellStyle.eventFontStyle = "BoldItalic";
        weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellAlignment = "VerticalCenter";
        weekendCellStyle.cellPaddingHorizontal = 10;
        weekendCellStyle.cellPaddingVertical = 5;
        weekendCellStyle.cellBackgroundColor = "#dd855c";
        weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = "#f1e8ca";
        weekendCellStyle.cellTextColor = "#745151";
        weekendCellStyle.cellTextFontName = "Times New Roman";
        weekendCellStyle.cellTextFontStyle = "Bold";
        weekendCellStyle.cellTextSize = 12;
        monthViewStyle.weekendCellStyle = weekendCellStyle;
        
        var selectedCellStyle = new calendarModule.DayCellStyle();
        selectedCellStyle.eventTextColor = "Blue";
        selectedCellStyle.eventFontName = "Times New Roman";
        selectedCellStyle.eventFontStyle = "Bold";
        selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellAlignment = "VerticalCenter";
        selectedCellStyle.cellPaddingHorizontal = 10;
        selectedCellStyle.cellPaddingVertical = 5;
        selectedCellStyle.cellBackgroundColor = "#dbcbbb";
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = "#745151";
        selectedCellStyle.cellTextColor = "Black";
        selectedCellStyle.cellTextFontName = "Times New Roman";
        selectedCellStyle.cellTextFontStyle = "Bold";
        selectedCellStyle.cellTextSize = 18;
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;
        
        var weekNumberCellStyle = new calendarModule.CellStyle();
        weekNumberCellStyle.cellBackgroundColor = "#bbcbdb";
        weekNumberCellStyle.cellBorderWidth = 1;
        weekNumberCellStyle.cellBorderColor = "#f1e8ca";
        weekNumberCellStyle.cellTextColor = "#745151";
        weekNumberCellStyle.cellTextFontName = "Times New Roman";
        weekNumberCellStyle.cellTextFontStyle = "Bold";
        weekNumberCellStyle.cellTextSize = 8;
        monthViewStyle.weekNumberCellStyle = weekNumberCellStyle;
        
        var dayNameCellStyle = new calendarModule.CellStyle();
        dayNameCellStyle.cellBackgroundColor = "#f1e8ca";
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = "#745151";
        dayNameCellStyle.cellTextColor = "#745151";
        dayNameCellStyle.cellTextFontName = "Times New Roman";
        dayNameCellStyle.cellTextFontStyle = "Bold";
        dayNameCellStyle.cellTextSize = 10;
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;
        
        var titleCellStyle = new calendarModule.DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#bbcbdb";
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = "#745151";
        titleCellStyle.cellTextColor = "#dd855c";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        monthViewStyle.titleCellStyle = titleCellStyle;
        
        return monthViewStyle;
    }
    
    getWeekViewStyle(): calendarModule.CalendarWeekViewStyle {
        var weekViewStyle = new calendarModule.CalendarWeekViewStyle();
        weekViewStyle.backgroundColor = "#dd855c";
        weekViewStyle.showTitle = true;
        weekViewStyle.showWeekNumbers = true;
        weekViewStyle.showDayNames = true;
        
        var todayCellStyle = new calendarModule.DayCellStyle();
        todayCellStyle.cellBackgroundColor = "#dd855c";
        todayCellStyle.cellBorderWidth = 1;
        todayCellStyle.cellBorderColor = "#f1e8ca";
        todayCellStyle.cellTextColor = "#745151";
        todayCellStyle.cellTextFontName = "Times New Roman";
        todayCellStyle.cellTextFontStyle = "Bold";
        todayCellStyle.cellTextSize = 14;
        weekViewStyle.todayCellStyle = todayCellStyle;
        
        var dayCellStyle = new calendarModule.DayCellStyle();
        dayCellStyle.showEventsText = true;
        dayCellStyle.eventTextColor = "White";
        dayCellStyle.eventFontName = "Times New Roman";
        dayCellStyle.eventFontStyle = "BoldItalic";
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = "VerticalCenter";
        dayCellStyle.cellPaddingHorizontal = 10;
        dayCellStyle.cellPaddingVertical = 5;
        dayCellStyle.cellBackgroundColor = "#9ebd9e";
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = "#f1e8ca";
        dayCellStyle.cellTextColor = "#745151";
        dayCellStyle.cellTextFontName = "Times New Roman";
        dayCellStyle.cellTextFontStyle = "Bold";
        dayCellStyle.cellTextSize = 10;
        weekViewStyle.dayCellStyle = dayCellStyle;
        
        var weekendCellStyle = new calendarModule.DayCellStyle();
        weekendCellStyle.eventTextColor = "BlueViolet";
        weekendCellStyle.eventFontName = "Times New Roman";
        weekendCellStyle.eventFontStyle = "BoldItalic";
        weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellAlignment = "VerticalCenter";
        weekendCellStyle.cellPaddingHorizontal = 10;
        weekendCellStyle.cellPaddingVertical = 5;
        weekendCellStyle.cellBackgroundColor = "#f1e8ca";
        weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = "#f1e8ca";
        weekendCellStyle.cellTextColor = "#745151";
        weekendCellStyle.cellTextFontName = "Times New Roman";
        weekendCellStyle.cellTextFontStyle = "Bold";
        weekendCellStyle.cellTextSize = 12;
        weekViewStyle.weekendCellStyle = weekendCellStyle;
        
        var selectedCellStyle = new calendarModule.DayCellStyle();
        selectedCellStyle.eventTextColor = "Blue";
        selectedCellStyle.eventFontName = "Times New Roman";
        selectedCellStyle.eventFontStyle = "Bold";
        selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellAlignment = "VerticalCenter";
        selectedCellStyle.cellPaddingHorizontal = 10;
        selectedCellStyle.cellPaddingVertical = 5;
        selectedCellStyle.cellBackgroundColor = "#745151";
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = "#f1e8ca";
        selectedCellStyle.cellTextColor = "Black";
        selectedCellStyle.cellTextFontName = "Times New Roman";
        selectedCellStyle.cellTextFontStyle = "Bold";
        selectedCellStyle.cellTextSize = 18;
        weekViewStyle.selectedDayCellStyle = selectedCellStyle;
        
        var weekNumberCellStyle = new calendarModule.CellStyle();
        weekNumberCellStyle.cellBackgroundColor = "#bbcbdb";
        weekNumberCellStyle.cellBorderWidth = 2;
        weekNumberCellStyle.cellBorderColor = "#745151";
        weekNumberCellStyle.cellTextColor = "#745151";
        weekNumberCellStyle.cellTextFontName = "Times New Roman";
        weekNumberCellStyle.cellTextFontStyle = "Bold";
        weekNumberCellStyle.cellTextSize = 8;
        weekViewStyle.weekNumberCellStyle = weekNumberCellStyle;
        
        var dayNameCellStyle = new calendarModule.CellStyle();
        dayNameCellStyle.cellBackgroundColor = "#bbcbdb";
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = "#f1e8ca";
        dayNameCellStyle.cellTextColor = "#745151";
        dayNameCellStyle.cellTextFontName = "Times New Roman";
        dayNameCellStyle.cellTextFontStyle = "Bold";
        dayNameCellStyle.cellTextSize = 10;
        weekViewStyle.dayNameCellStyle = dayNameCellStyle;
        
        var titleCellStyle = new calendarModule.DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#dd855c";
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = "#f1e8ca";
        titleCellStyle.cellTextColor = "#745151";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        weekViewStyle.titleCellStyle = titleCellStyle;
        
        return weekViewStyle;
    }
    
    getYearViewStyle(): calendarModule.CalendarYearViewStyle {
        var yearViewStyle = new calendarModule.CalendarYearViewStyle();
        
        var titleCellStyle = new calendarModule.DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#dd855c";
        titleCellStyle.cellBorderWidth = 2;
        titleCellStyle.cellBorderColor = "#f1e8ca";
        titleCellStyle.cellTextColor = "#745151";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        yearViewStyle.titleCellStyle = titleCellStyle;
        
        var monthCellStyle = new calendarModule.MonthCellStyle();
        monthCellStyle.weekendTextColor = "#dd855c";
        monthCellStyle.todayTextColor = "Black";
        monthCellStyle.dayTextColor = "#745151";
        monthCellStyle.dayFontName = "Times New Roman";
        monthCellStyle.dayFontStyle = "Bold";
        monthCellStyle.dayTextSize = 12;
        monthCellStyle.dayNameTextColor = "#9ebd9e";
        monthCellStyle.dayNameFontName = "Times New Roman";
        monthCellStyle.dayNameFontStyle = "Bold";
        monthCellStyle.dayNameTextSize = 14;
        monthCellStyle.monthNameTextColor = "#dd855c";
        monthCellStyle.monthNameFontName = "Times New Roman";
        monthCellStyle.monthNameFontStyle = "BoldItalic";
        monthCellStyle.monthNameTextSize = 15;
        yearViewStyle.monthCellStyle = monthCellStyle;
        
        return yearViewStyle;
    }
    
    getMonthNamesViewStyle(): calendarModule.CalendarMonthNamesViewStyle {
        var monthNamesViewStyle = new calendarModule.CalendarMonthNamesViewStyle();
        
        var titleCellStyle = new calendarModule.DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#dd855c";
        titleCellStyle.cellBorderWidth = 2;
        titleCellStyle.cellBorderColor = "#f1e8ca";
        titleCellStyle.cellTextColor = "#745151";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        monthNamesViewStyle.titleCellStyle = titleCellStyle;
        
        var monthNameCellStyle = new calendarModule.CellStyle();
        monthNameCellStyle.cellBackgroundColor = "#9ebd9e";
        monthNameCellStyle.cellBorderWidth = 2;
        monthNameCellStyle.cellBorderColor = "#f1e8ca";
        monthNameCellStyle.cellTextColor = "#745151";
        monthNameCellStyle.cellTextFontName = "Times New Roman";
        monthNameCellStyle.cellTextFontStyle = "Bold";
        monthNameCellStyle.cellTextSize = 20;
        monthNamesViewStyle.monthNameCellStyle = monthNameCellStyle;
        
        return monthNamesViewStyle;
    }
}