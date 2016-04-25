import {Injectable} from 'angular2/core';
import {DATAITEMS} from "./mock-dataItems";
import {DataItem} from "./dataItem";
var namesAndEmails = require("../listview/NamesAndEmails.json")


@Injectable()
export class DataItemService {
    getDataItems(): DataItem[] {
        return DATAITEMS;
    }
    
    getIdenticalDataItems(size: number): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < size; i++) {
            result.push({
                id: i,
                itemName: "Item " + i,
                itemDescription:"This is item description."
            });
        }
        
        return result;
    }
    
    getPersonsDataItems(size: number): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < size; i++) {
            result.push(new DataItem(i, namesAndEmails.names[i], "This is item description"));
        }
        
        return result;
    }
}