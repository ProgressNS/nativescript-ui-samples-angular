import {Injectable} from 'angular2/core';
import {DATAITEMS} from "./mock-dataItems";
import {DataItem} from "./dataItem";
var namesAndEmails = require("../listview/NamesAndEmails.json")
var posts = require("../listview/posts.json")


@Injectable()
export class DataItemService {
    getDataItems(): DataItem[] {
        return DATAITEMS;
    }
    
    getIdenticalDataItems(size: number): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < size; i++) {
            result.push(new DataItem(i,  "Item " + i, "This is item description."));
        }
        
        return result;
    }
    
    getPersonDataItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < namesAndEmails.names.length; i++) {
            result.push(new DataItem(i, namesAndEmails.names[i], "This is item description"));
        }
        
        return result;
    }
    
    getNameEmailDataItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < namesAndEmails.names.length; i++) {
            result.push(new DataItem(i, namesAndEmails.names[i], namesAndEmails.emails[i]));
        }
        
        return result;
    }
    
    getPostDataItems():DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < posts.names.length; i++) {
            result.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i]));
        }
        
        return result;
    }
}