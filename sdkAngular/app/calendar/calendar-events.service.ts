import { Injectable } from '@angular/core';
import { Color } from "color";
// >> angular-calendar-require
import { CalendarEvent } from 'nativescript-ui-calendar' 
// << angular-calendar-require 

// >> angular-calendar-events-service
@Injectable()
export class CalendarEventsService {
    getCalendarEvents(): Array<CalendarEvent> {
        let now = new Date();
        let startDate: Date,
            endDate: Date,
            event: CalendarEvent;
        let colors: Array<Color> = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        let events: Array<CalendarEvent> = new Array<CalendarEvent>();
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            event = new CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }
        return events;
    }
}
// << angular-calendar-events-service
