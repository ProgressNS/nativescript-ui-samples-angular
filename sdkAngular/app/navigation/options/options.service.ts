import { Injectable } from '@angular/core';

@Injectable()
export class OptionsService {
    private _paramName: string;
    private _paramValue: any;
    
    get paramName(): string {
        return this._paramName;
    }
    
    set paramName(value: string) {
        this._paramName = value;
    }
    
    set paramValue(value: any) {
        this._paramValue = value;
    }
    
    get paramValue(): any {
        return this._paramValue;
    }
}