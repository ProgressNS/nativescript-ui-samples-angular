import { Injectable } from '@angular/core';
import { Color } from "tns-core-modules/color";
import { CalendarEvent } from 'nativescript-ui-calendar';

@Injectable()
export class CalendarDayEventsService {
    getCalendarDayEvents(): Array<CalendarEvent> {
        const eventTitles: Array<string> = ["Meeting with Jack", "Lunch with Peter", "Planning meeting",
            "Go shopping", "Very important meeting", "Another meeting"];
        const eventColors: Array<Color> = [new Color("#0288D1"), new Color("#009688"), new Color("#E040FB")];

        const events: Array<CalendarEvent> = new Array<CalendarEvent>();
        const now: Date = new Date();
        const startDate: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endDate: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        startDate.setHours(9);
        endDate.setHours(10);
        let event = new CalendarEvent(eventTitles[0], startDate, endDate, false, eventColors[0]);
        events.push(event);

        startDate.setHours(12);
        endDate.setHours(13);
        event = new CalendarEvent(eventTitles[1], startDate, endDate, false, eventColors[1]);
        events.push(event);

        startDate.setHours(13);
        endDate.setHours(14);
        event = new CalendarEvent(eventTitles[2], startDate, endDate, false, eventColors[0]);
        events.push(event);

        startDate.setHours(20);
        endDate.setHours(22);
        event = new CalendarEvent(eventTitles[3], startDate, endDate, false, eventColors[2]);
        events.push(event);

        startDate.setHours(2);
        endDate.setHours(4);
        event = new CalendarEvent(eventTitles[4], startDate, endDate, false, eventColors[0]);
        events.push(event);

        startDate.setHours(16);
        endDate.setHours(17);
        event = new CalendarEvent(eventTitles[5], startDate, endDate, false, eventColors[0]);
        events.push(event);

        return events;
    }
}