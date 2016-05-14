import { Injectable } from '@angular/core';
import { LOCATIONS } from "./mock-data";
import { SideDrawerLocation } from 'nativescript-telerik-ui-pro/sidedrawer';

@Injectable()
export class DataService {
     getDrawerLocations(): SideDrawerLocation[] {
        return LOCATIONS;
    }
}