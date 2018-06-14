import { AppiumDriver } from "nativescript-dev-appium";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export function getMonth() {
    const date = new Date();
    return monthNames[date.getMonth()];
}

export function getNextMonth() {
    const date = new Date();
    let month = date.getMonth() + 1;
    if (month === 12) {
        month = 0;
    }
    return monthNames[month];
}

export function getPreviousMonth() {
    const date = new Date();
    let month = date.getMonth() - 1;
    if (month === -1) {
        month = 11;
    }
    return monthNames[month];
}

export function getNextMonthOfYear() {
    const date = new Date();
    const currentMonth = date.getMonth();
    if (currentMonth === 11) {
        return getNextMonth() + " " + (getYear() + 1);
    }
    return getNextMonth() + " " + getYear();
}

export function getPreviousMonthOfYear() {
    const date = new Date();
    const currentMonth = date.getMonth();
    if (currentMonth === 0) {
        return getPreviousMonth() + " " + (getYear() - 1);
    }
    return getPreviousMonth() + " " + getYear();
}

export function getMonthBG() {
    const monthNames = ["януари", "февруари", "март", "април", "май", "юни",
        "юли", "август", "септември", "октомври", "ноември", "декември"
    ];
    const date = new Date();
    return monthNames[date.getMonth()];
}

export function getYear() {
    const date = new Date();
    return date.getFullYear();
}

export function getDate() {
    const date = new Date();
    return date.getDate();
}