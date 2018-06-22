
import { Country } from "./country";
import { Product } from "./product";
import { Person } from "./person";
import { Currency } from './currency';
import { Car } from './car';
import { Stock } from './stock';
import { Frame } from './frame';

// >> chart-angular-data-service
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    // >> (hide)
    // >> chart-angular-categorical-source
    getCategoricalSource(): Country[] {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    }
    // << chart-angular-categorical-source

    getCategoricalSource2(): Country[] {
        return [
            { Country: "Germany", Amount: 29, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 32, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 33, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 28, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 22, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    }

    getCategoricalSource3(): Country[] {
        return [
            { Country: "Germany", Amount: 35, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 38, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 40, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 36, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 42, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    }

    getBubbleCategoricalSource(): Country[] {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 0, ThirdVal: 0, Impact: 5, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 0, ThirdVal: 0, Impact: 7, Year: 0 },
            { Country: "Bulgaria", Amount: 25, SecondVal: 0, ThirdVal: 0, Impact: 10, Year: 0 },
            { Country: "Spain", Amount: 5, SecondVal: 0, ThirdVal: 0, Impact: 3, Year: 0 },
            { Country: "USA", Amount: 17, SecondVal: 0, ThirdVal: 0, Impact: 9, Year: 0 }
        ];
    }

    getFirstSeries(): Country[] {
        return [
            { Country: "Germany", Amount: 320, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 206, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 100, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 25, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 85, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    }

    getSecondSeries(): Country[] {
        return [
            { Country: "Germany", Amount: 120, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 56, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 300, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 95, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 405, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    }

    getThirdSeries(): Country[] {
        return [
            { Country: "Germany", Amount: 96, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 139, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 276, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 300, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 100, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    }

    // >> chart-angular-range-bar-source
    getRangeBarSource(): Product[] {
        return [
            { Name: "Groceries", High: 30, Low: 12, Sales: 0, Margin: 0 },
            { Name: "Tools", High: 135, Low: 124, Sales: 0, Margin: 0 },
            { Name: "Electronics", High: 55, Low: 12, Sales: 0, Margin: 0 },
            { Name: "Gardening", High: 50, Low: 29, Sales: 0, Margin: 0 }
        ];
    }
    // << chart-angular-range-bar-source

    // >> chart-angular-bubble-data-source
    getHighDataModel(): Country[] {
        return [
            { Year: 2000, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1456, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1866, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1900, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1700, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1600, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
        ];
    }

    getMiddleDataModel(): Country[] {
        return [
            { Year: 1200, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1156, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 1000, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 900, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 700, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 600, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
        ];
    }

    getLowDataModel(): Country[] {
        return [
            { Year: 200, Amount: 15, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 456, Amount: 13, Impact: 7, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 366, Amount: 25, Impact: 10, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 100, Amount: 5, Impact: 3, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 340, Amount: 17, Impact: 4, Country: "", SecondVal: 0, ThirdVal: 0 },
            { Year: 135, Amount: 20, Impact: 1, Country: "", SecondVal: 0, ThirdVal: 0 },
        ];
    }
    // << chart-angular-bubble-data-source

    // >> chart-angular-scatter-data-source
    getScatterSource(): Person[] {
        return [
            { Age: 20, Salary: 10000, Spendings: 4500, Savings: 5500, Impact: 1 },
            { Age: 25, Salary: 12300, Spendings: 6500, Savings: 5200, Impact: 7 },
            { Age: 30, Salary: 14000, Spendings: 8500, Savings: 5500, Impact: 10 },
            { Age: 35, Salary: 18000, Spendings: 9500, Savings: 7500, Impact: 6 },
            { Age: 40, Salary: 19520, Spendings: 15540, Savings: 3800, Impact: 4 },
            { Age: 45, Salary: 20000, Spendings: 15500, Savings: 4500, Impact: 2 },
            { Age: 50, Salary: 24200, Spendings: 20500, Savings: 3700, Impact: 11 },
            { Age: 55, Salary: 24000, Spendings: 22500, Savings: 1500, Impact: 8 },
            { Age: 60, Salary: 22000, Spendings: 22500, Savings: 500, Impact: 1 },
            { Age: 65, Salary: 20000, Spendings: 20500, Savings: 10, Impact: 9 }
        ];
    }
    // << chart-angular-scatter-data-source

    // >> chart-angular-candlestick-data-model
    getCandleStickSourceItems(): Currency[] {
        return [
            { Date: "01/6/2015", Open: 100, Close: 85, Low: 50, High: 139 },
            { Date: "27/7/2015", Open: 60, Close: 150, Low: 40, High: 159 },
            { Date: "18/8/2015", Open: 120, Close: 81, Low: 45, High: 141 },
            { Date: "19/9/2015", Open: 105, Close: 200, Low: 55, High: 250 }
        ];
    }
    // << chart-angular-candlestick-data-model

    // >> chart-angular-ohlc-data-model
    getOhlcSourceItems(): Currency[] {
        return [
            { Date: "20/6/2015", Open: 100, Close: 85, Low: 50, High: 139 },
            { Date: "02/7/2015", Open: 60, Close: 150, Low: 40, High: 159 },
            { Date: "01/8/2015", Open: 120, Close: 81, Low: 45, High: 141 },
            { Date: "01/9/2015", Open: 105, Close: 200, Low: 55, High: 250 }
        ];
    }
    // << chart-angular-ohlc-data-model

    getPieSource(): Car[] {
        return [
            { Brand: "Audi", Amount: 10 },
            { Brand: "Mercedes", Amount: 76 },
            { Brand: "Fiat", Amount: 60 },
            { Brand: "BMW", Amount: 24 },
            { Brand: "Crysler", Amount: 40 }
        ];
    }

    getSourceItems(): Product[] {
        return [
            { Name: "Groceries", Sales: 25, Margin: 10, High: 0, Low: 0 },
            { Name: "Tools", Sales: 34, Margin: 20, High: 0, Low: 0 },
            { Name: "Electronics", Sales: 15, Margin: 25, High: 0, Low: 0 },
            { Name: "Gardening", Sales: 40, Margin: 5, High: 0, Low: 0 }
        ];
    }

    // >> chart-angular-ohlc-data-model
    getDateTimeSource(): Stock[] {
        return [
            { TimeStamp: new Date(2015, 1, 11).getTime(), Amount: 10 },
            { TimeStamp: new Date(2015, 2, 11).getTime(), Amount: 10 },
            { TimeStamp: new Date(2015, 3, 1).getTime(), Amount: 1 },
            { TimeStamp: new Date(2015, 4, 3).getTime(), Amount: 3 },
            { TimeStamp: new Date(2015, 5, 11).getTime(), Amount: 18 },
            { TimeStamp: new Date(2015, 6, 1).getTime(), Amount: 7 },
            { TimeStamp: new Date(2015, 7, 3).getTime(), Amount: 5 },
            { TimeStamp: new Date(2015, 8, 11).getTime(), Amount: 4 },
            { TimeStamp: new Date(2015, 9, 1).getTime(), Amount: 2 },
            { TimeStamp: new Date(2015, 10, 3).getTime(), Amount: 6 },
        ];
    }

    getRateA(): Country[] {
        return [
            { Country: "Germany", Amount: 20, SecondVal: 14, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "France", Amount: 15, SecondVal: 23, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 10, SecondVal: 9, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 5, SecondVal: 19, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 0, SecondVal: 8, ThirdVal: 0, Impact: 0, Year: 0 }
        ]
    }

    getRateB(): Country[] {
        return [
            { Country: "Germany", Amount: 4, SecondVal: 14, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "France", Amount: 3, SecondVal: 23, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 2, SecondVal: 9, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 1, SecondVal: 19, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 0, SecondVal: 8, ThirdVal: 0, Impact: 0, Year: 0 }
        ]
    }

    getRateC(): Country[] {
        return [
            { Country: "Germany", Amount: 16, SecondVal: 14, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 12, SecondVal: 9, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 5, SecondVal: 19, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 8, SecondVal: 8, ThirdVal: 0, Impact: 0, Year: 0 }
        ]
    }

    getTotal(): Country[] {
        return [
            { Country: "Germany", Amount: 40, SecondVal: 14, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "France", Amount: 41, SecondVal: 23, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 9, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 2, SecondVal: 8, ThirdVal: 0, Impact: 0, Year: 0 }
        ]
    }

    getNegativeValues(): Frame[] {
        return [
            { Period: 1, Amount: 10 },
            { Period: 2, Amount: -10 },
            { Period: 3, Amount: 20 },
            { Period: 4, Amount: -20 },
            { Period: 5, Amount: 30 },
            { Period: 6, Amount: -30 },
            { Period: 7, Amount: 40 },
            { Period: 8, Amount: -40 },
            { Period: 9, Amount: 50 },
            { Period: 10, Amount: -50 }
        ]
    }
    // << chart-angular-ohlc-data-model
    // << (hide)
}
// << chart-angular-data-service