import { Injectable } from '@angular/core';
import { Color } from "tns-core-modules/color";
import { CalendarEvent } from 'nativescript-ui-calendar';

@Injectable()
export class CalendarCustomEventsService {
    eventColors = [new Color("#71CBED"), new Color("#689F38"), new Color("#7B1FA2")];
    getCalendarEvents(): Array<CustomEvent> {
        let now = new Date();
        let startDate: Date,
            endDate: Date,
            event: CustomEvent;

        // >> angular-calendar-custom-event-items-ts
        let events: Array<CustomEvent> = new Array<CustomEvent>();
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i % 2, 12 + i);
            endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i % 2, 12 + i, 30);
            let eventLocation = i > 5 ? "at home" : "at the office";
            event = new CustomEvent(i, "event " + i, eventLocation, startDate, endDate, false, this.eventColors[i % 3]);
            events.push(event);
        }
        return events;
        // << angular-calendar-custom-event-items-ts
    }
}

// >> angular-calendar-custom-event-model-ts
export class CustomEvent extends CalendarEvent {
    id: number;
    location: string;
    formattedTime: string;

    constructor(id: number, title: string, location: string, startDate: Date, endDate: Date, isAllDay?: boolean, eventColor?: Color) {
        super(title, startDate, endDate, isAllDay, eventColor);
        this.id = id;
        this.location = location;
        const hours = startDate.getHours();
        const minutes = startDate.getMinutes();
        this.formattedTime = (hours < 10 ? "0" : "") + hours + ':' + (minutes < 10 ? "0" : "") + minutes;
    }
}
// << angular-calendar-custom-event-model-ts