
import { Country } from "./country";
import { Product } from "./product";
import { Person } from "./person";
import { Currency } from './currency';
import { Car } from './car';
import { Stock } from './stock';
import { Frame } from './frame';
import { TemperatureData } from './temperature-data';

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

    getTemperatures(): TemperatureData[] {
        return [
            { Month: "JAN", Ulaanbaatar: -21.6, Paris: 4.9, Bangkok: 27 },
            { Month: "FEB", Ulaanbaatar: -16.6, Paris: 5.6, Bangkok: 28.3 },
            { Month: "MAR", Ulaanbaatar: -7.4, Paris: 8.8, Bangkok: 29.5 },
            { Month: "APR", Ulaanbaatar: 2, Paris: 11.5, Bangkok: 30.5 },
            { Month: "MAY", Ulaanbaatar: 10.1, Paris: 15.2, Bangkok: 29.9 },
            { Month: "JUN", Ulaanbaatar: 15.7, Paris: 18.3, Bangkok: 29.5 },
            { Month: "JUL", Ulaanbaatar: 18.2, Paris: 20.5, Bangkok: 29 },
            { Month: "AUG", Ulaanbaatar: 16, Paris: 20.3, Bangkok: 28.8 },
            { Month: "SEP", Ulaanbaatar: 9.6, Paris: 16.9, Bangkok: 28.3 },
            { Month: "OCT", Ulaanbaatar: 0.5, Paris: 13, Bangkok: 28.1 },
            { Month: "NOV", Ulaanbaatar: -11.9, Paris: 8.3, Bangkok: 27.8 },
            { Month: "DEC", Ulaanbaatar: -19, Paris: 5.5, Bangkok: 26.5 }
        ];
    }

    getPlayersRealMadridData() {
        return [
            { Player: "Thibaut Courtois", Height: 199, Weight: 96 },
            { Player: "Marcelo", Height: 174, Weight: 75 },
            { Player: "Sergio Ramos", Height: 184, Weight: 82 },
            { Player: "Raphael Varane", Height: 191, Weight: 81 },
            { Player: "Daniel Carvajal", Height: 173, Weight: 73 },
            { Player: "Casemiro", Height: 185, Weight: 84 },
            { Player: "Toni Kroos", Height: 183, Weight: 76 },
            { Player: "Luka Modric", Height: 172, Weight: 66 },
            { Player: "Gareth Bale", Height: 185, Weight: 81 },
            { Player: "Karim Benzema", Height: 185, Weight: 81 },
            { Player: "Eden Hazard", Height: 175, Weight: 74 },
        ];
    }

    getPlayersBarcelonaData() {
        return [
            { Player: "Marc-André ter Stegen", Height: 187, Weight: 85 },
            { Player: "Jordi Alba", Height: 170, Weight: 68 },
            { Player: "Clément Lenglet", Height: 186, Weight: 81 },
            { Player: "Gerard Piqué", Height: 194, Weight: 85 },
            { Player: "Nélson Semedo", Height: 177, Weight: 67 },
            { Player: "Frenkie de Jong", Height: 180, Weight: 74 },
            { Player: "Sergio Busquets", Height: 189, Weight: 76 },
            { Player: "Arthur", Height: 171, Weight: 73 },
            { Player: "Antoine Griezmann", Height: 176, Weight: 73 },
            { Player: "Luis Suárez", Height: 182, Weight: 86 },
            { Player: "Lionel Messi", Height: 170, Weight: 72 }
        ];
    }

    getPhoneStorageData() {
        return [
            { Type: "Photos", Value: 2500 },
            { Type: "Music", Value: 2800 },
            { Type: "Games", Value: 1400 },
            { Type: "Videos", Value: 1200 },
            { Type: "Apps", Value: 700 },
            { Type: "Empty", Value: 1400 },
        ];
    }

    getSalesData() {
        return [
            { Vendor: "Xiaomi", Q12019: 27.8, Q12018: 28.1 },
            { Vendor: "Apple", Q12019: 42.0, Q12018: 52.2 },
            { Vendor: "Huawei", Q12019: 59.1, Q12018: 39.3 },
            { Vendor: "Samsung", Q12019: 72.0, Q12018: 78.2 }
        ];
    }

    getUsersData() {
        return [
            { Date: new Date(2019, 10, 4).getTime(), CategoryA: 150, CategoryB: 150, CategoryC: 150 },
            { Date: new Date(2019, 10, 5).getTime(), CategoryA: 148, CategoryB: 145, CategoryC: 148 },
            { Date: new Date(2019, 10, 6).getTime(), CategoryA: 147, CategoryB: 144, CategoryC: 145 },
            { Date: new Date(2019, 10, 7).getTime(), CategoryA: 143, CategoryB: 140, CategoryC: 142 },
            { Date: new Date(2019, 10, 8).getTime(), CategoryA: 140, CategoryB: 138, CategoryC: 139 },
            { Date: new Date(2019, 10, 9).getTime(), CategoryA: 138, CategoryB: 135, CategoryC: 138 },
            { Date: new Date(2019, 10, 10).getTime(), CategoryA: 136, CategoryB: 133, CategoryC: 137 },
            { Date: new Date(2019, 10, 11).getTime(), CategoryA: 133, CategoryB: 132, CategoryC: 136 },
            { Date: new Date(2019, 10, 12).getTime(), CategoryA: 130, CategoryB: 130, CategoryC: 130 },
            { Date: new Date(2019, 10, 13).getTime(), CategoryA: 130, CategoryB: 128, CategoryC: 128 },
            { Date: new Date(2019, 10, 14).getTime(), CategoryA: 130, CategoryB: 127, CategoryC: 127 },
            { Date: new Date(2019, 10, 15).getTime(), CategoryA: 126, CategoryB: 126, CategoryC: 125 },
            { Date: new Date(2019, 10, 16).getTime(), CategoryA: 123, CategoryB: 120, CategoryC: 123 },
            { Date: new Date(2019, 10, 17).getTime(), CategoryA: 120, CategoryB: 120, CategoryC: 120 },
            { Date: new Date(2019, 10, 18).getTime(), CategoryA: 118, CategoryB: 119, CategoryC: 119 },
            { Date: new Date(2019, 10, 19).getTime(), CategoryA: 116, CategoryB: 118, CategoryC: 117 },
            { Date: new Date(2019, 10, 20).getTime(), CategoryA: 114, CategoryB: 115, CategoryC: 115 },
            { Date: new Date(2019, 10, 21).getTime(), CategoryA: 112, CategoryB: 115, CategoryC: 114 },
            { Date: new Date(2019, 10, 22).getTime(), CategoryA: 112, CategoryB: 113, CategoryC: 113 },
            { Date: new Date(2019, 10, 23).getTime(), CategoryA: 112, CategoryB: 112, CategoryC: 112 },
            { Date: new Date(2019, 10, 24).getTime(), CategoryA: 112, CategoryB: 111, CategoryC: 111 },
            { Date: new Date(2019, 10, 25).getTime(), CategoryA: 110, CategoryB: 110, CategoryC: 110 },
            { Date: new Date(2019, 10, 26).getTime(), CategoryA: 110, CategoryB: 108, CategoryC: 109 },
            { Date: new Date(2019, 10, 27).getTime(), CategoryA: 109, CategoryB: 107, CategoryC: 108 },
            { Date: new Date(2019, 10, 28).getTime(), CategoryA: 107, CategoryB: 105, CategoryC: 107 },
            { Date: new Date(2019, 10, 29).getTime(), CategoryA: 106, CategoryB: 105, CategoryC: 106 },
            { Date: new Date(2019, 10, 30).getTime(), CategoryA: 106, CategoryB: 105, CategoryC: 103 },
            { Date: new Date(2019, 11, 1).getTime(), CategoryA: 105, CategoryB: 103, CategoryC: 102 },
            { Date: new Date(2019, 11, 2).getTime(), CategoryA: 103, CategoryB: 102, CategoryC: 101 },
            { Date: new Date(2019, 11, 3).getTime(), CategoryA: 100, CategoryB: 100, CategoryC: 100 },
        ];
    }

    getCampaignData() {
        return [
            { Date: new Date(2019, 5, 1).getTime(), Clicks: 150, Impressions: 510 },
            { Date: new Date(2019, 5, 2).getTime(), Clicks: 145, Impressions: 520 },
            { Date: new Date(2019, 5, 3).getTime(), Clicks: 160, Impressions: 505 },
            { Date: new Date(2019, 5, 4).getTime(), Clicks: 140, Impressions: 510 },
            { Date: new Date(2019, 5, 5).getTime(), Clicks: 150, Impressions: 515 },
            { Date: new Date(2019, 5, 6).getTime(), Clicks: 155, Impressions: 620 },
            { Date: new Date(2019, 5, 7).getTime(), Clicks: 145, Impressions: 610 },
            { Date: new Date(2019, 5, 8).getTime(), Clicks: 260, Impressions: 530 },
            { Date: new Date(2019, 5, 9).getTime(), Clicks: 255, Impressions: 630 },
            { Date: new Date(2019, 5, 10).getTime(), Clicks: 240, Impressions: 380 },
            { Date: new Date(2019, 5, 11).getTime(), Clicks: 260, Impressions: 550 },
            { Date: new Date(2019, 5, 12).getTime(), Clicks: 300, Impressions: 480 },
            { Date: new Date(2019, 5, 13).getTime(), Clicks: 265, Impressions: 510 },
            { Date: new Date(2019, 5, 14).getTime(), Clicks: 260, Impressions: 490 },
            { Date: new Date(2019, 5, 15).getTime(), Clicks: 310, Impressions: 505 },
            { Date: new Date(2019, 5, 16).getTime(), Clicks: 260, Impressions: 470 },
            { Date: new Date(2019, 5, 17).getTime(), Clicks: 270, Impressions: 475 },
            { Date: new Date(2019, 5, 18).getTime(), Clicks: 280, Impressions: 470 },
            { Date: new Date(2019, 5, 19).getTime(), Clicks: 230, Impressions: 520 },
            { Date: new Date(2019, 5, 20).getTime(), Clicks: 180, Impressions: 510 },
            { Date: new Date(2019, 5, 21).getTime(), Clicks: 175, Impressions: 610 },
            { Date: new Date(2019, 5, 22).getTime(), Clicks: 165, Impressions: 460 },
            { Date: new Date(2019, 5, 23).getTime(), Clicks: 150, Impressions: 530 },
            { Date: new Date(2019, 5, 24).getTime(), Clicks: 200, Impressions: 540 },
            { Date: new Date(2019, 5, 25).getTime(), Clicks: 175, Impressions: 530 },
            { Date: new Date(2019, 5, 26).getTime(), Clicks: 190, Impressions: 540 },
            { Date: new Date(2019, 5, 27).getTime(), Clicks: 230, Impressions: 700 },
            { Date: new Date(2019, 5, 28).getTime(), Clicks: 180, Impressions: 580 },
            { Date: new Date(2019, 5, 29).getTime(), Clicks: 140, Impressions: 460 },
            { Date: new Date(2019, 5, 30).getTime(), Clicks: 150, Impressions: 480 },
        ];
    }

    getStockData() {
        return [
            { Date: "16/09/2019", Open: 136.29, High: 137.24, Low: 135.30, Close: 135.80 },
            { Date: "17/09/2019", Open: 135.80, High: 136.73, Low: 135.67, Close: 136.31 },
            { Date: "18/09/2019", Open: 136.41, High: 137.07, Low: 135.72, Close: 136.80 },
            { Date: "19/09/2019", Open: 137.00, High: 137.36, Low: 131.61, Close: 132.27 },
            { Date: "20/09/2019", Open: 133.03, High: 133.23, Low: 131.61, Close: 132.27 },
            { Date: "23/09/2019", Open: 131.99, High: 132.89, Low: 131.89, Close: 132.46 },
            { Date: "24/09/2019", Open: 134.01, High: 134.15, Low: 131.50, Close: 131.97 },
            { Date: "25/09/2019", Open: 131.79, High: 133.42, Low: 131.22, Close: 133.09 },
            { Date: "26/09/2019", Open: 133.14, High: 133.30, Low: 129.06, Close: 131.27 },
            { Date: "27/09/2019", Open: 130.10, High: 131.00, Low: 128.92, Close: 129.96 },
            { Date: "30/09/2019", Open: 130.35, High: 130.86, Low: 129.82, Close: 130.32 },
            { Date: "01/10/2019", Open: 130.80, High: 131.78, Low: 129.51, Close: 129.55 },
            { Date: "02/10/2019", Open: 128.51, High: 129.22, Low: 127.57, Close: 129.14 },
            { Date: "03/10/2019", Open: 128.60, High: 129.43, Low: 127.54, Close: 128.15 }
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
        ];
    }

    getRateB(): Country[] {
        return [
            { Country: "Germany", Amount: 4, SecondVal: 14, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "France", Amount: 3, SecondVal: 23, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 2, SecondVal: 9, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 1, SecondVal: 19, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 0, SecondVal: 8, ThirdVal: 0, Impact: 0, Year: 0 }
        ];
    }

    getRateC(): Country[] {
        return [
            { Country: "Germany", Amount: 16, SecondVal: 14, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 12, SecondVal: 9, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 5, SecondVal: 19, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 8, SecondVal: 8, ThirdVal: 0, Impact: 0, Year: 0 }
        ];
    }

    getTotal(): Country[] {
        return [
            { Country: "Germany", Amount: 40, SecondVal: 14, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "France", Amount: 41, SecondVal: 23, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 9, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 0, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 2, SecondVal: 8, ThirdVal: 0, Impact: 0, Year: 0 }
        ];
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
        ];
    }
    // << chart-angular-ohlc-data-model
    // << (hide)
}
// << chart-angular-data-service