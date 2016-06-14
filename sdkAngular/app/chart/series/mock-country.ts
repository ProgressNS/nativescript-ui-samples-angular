import { Country } from './country';
import { Product } from './product';

// >> categorical-source
export var CATEGORICALSOURCE: Country[] = [
    { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
];
// << categorical-source

export var CATEGORICALSOURCE2: Country[] = [
    { Country: "Germany", Amount: 29, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "France", Amount: 32, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: "Bulgaria", Amount: 33, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: "Spain", Amount: 28, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "USA", Amount: 22, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
];

export var CATEGORICALSOURCE3: Country[] = [
    { Country: "Germany", Amount: 35, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "France", Amount: 38, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: "Bulgaria", Amount: 40, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: "Spain", Amount: 36, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "USA", Amount: 42, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
];

export var BUBBLECATEGORICALSOURCE: Country[] = [
    { Country: "Germany", Amount: 15, SecondVal: 0, ThirdVal: 0, Impact: 5, Year: 0 },
    { Country: "France", Amount: 13, SecondVal: 0, ThirdVal: 0, Impact: 7, Year: 0 },
    { Country: "Bulgaria", Amount: 25, SecondVal: 0, ThirdVal: 0, Impact: 10, Year: 0 },
    { Country: "Spain", Amount: 5, SecondVal: 0, ThirdVal: 0, Impact: 3, Year: 0 },
    { Country: "USA", Amount: 17, SecondVal: 0, ThirdVal: 0, Impact: 9, Year: 0 }
];

export var FIRSTSERIES: Country[] = [
    { Country: "Germany", Amount: 320, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "France", Amount: 206, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: "Bulgaria", Amount: 100, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: "Spain", Amount: 25, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "USA", Amount: 85, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
];

export var SECONDSERIES: Country[] = [
    { Country: "Germany", Amount: 120, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "France", Amount: 56, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: "Bulgaria", Amount: 300, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: "Spain", Amount: 95, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "USA", Amount: 405, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
];

export var THIRDSERIES: Country[] = [
    { Country: "Germany", Amount: 96, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "France", Amount: 139, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: "Bulgaria", Amount: 276, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: "Spain", Amount: 300, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: "USA", Amount: 100, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
];

// >> range-bar-source
export var RANGEBARSOURCE: Product[] = [
    { Name: "Groceries", High: 30, Low: 12 },
    { Name: "Tools", High: 135, Low: 124 },
    { Name: "Electronics", High: 55, Low: 12 },
    { Name: "Gardening", High: 50, Low: 29 }
];
// << range-bar-source 

// >> bubble-data-source
export var HIGHDATAMODEL: Country[] = [
    { Year: 2000, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 1456, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 1866, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 1900, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 1700, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
    { Year: 1600, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 }, 
];


export var MIDDLEDATAMODEL: Country[] = [
    { Year: 1200, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 1156, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 1000, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 900, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 700, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
    { Year: 600, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
];
    
    
export var LOWDATAMODEL: Country[] = [
    { Year: 200, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 456, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 366, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 100, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
    {  Year: 340, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
    { Year: 135, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
];
    
// << bubble-data-source