import { Injectable } from '@angular/core';
import { LOCATIONS } from "./mock-data";
import { SideDrawerLocation } from 'nativescript-pro-ui/sidedrawer';

@Injectable()
export class DataService {
     getDrawerLocations(): SideDrawerLocation[] {
        return LOCATIONS;
    }
}