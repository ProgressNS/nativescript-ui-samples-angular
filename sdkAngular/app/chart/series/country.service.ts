import { Injectable } from '@angular/core';
import { CATEGORICALSOURCE, CATEGORICALSOURCE2, CATEGORICALSOURCE3, BUBBLECATEGORICALSOURCE } from "./mock-country";
import { Country } from "./country";

@Injectable()
export class CountryService {
    getCategoricalSource(): Country[] {
        return CATEGORICALSOURCE;
    }
    
    getCategoricalSource2(): Country[] {
        return CATEGORICALSOURCE2;
    }
    
    getCategoricalSource3(): Country[] {
        return CATEGORICALSOURCE3;
    }
    
    getBubbleCategoricalSource(): Country[] {
        return BUBBLECATEGORICALSOURCE;
    }
}