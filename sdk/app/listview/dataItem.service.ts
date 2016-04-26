import {Injectable} from 'angular2/core';
import {DATAITEMS} from "./mock-dataItems";
import {DataItem} from "./dataItem";
import {Person} from "./Person";
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
            result.push({
                id: i,
                itemName: "Item " + i,
                itemDescription:"This is item description."
            });
        }
        
        return result;
    }
    
    getPersonsDataItems(): DataItem[] {
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
    
    getPersonPosts():Person[] {
        var result = new Array<Person>();
        for (var i = 0; i < posts.names.length; i++) {
            result.push(new Person(posts.names[i], posts.titles[i], posts.text[i]));
        }
        
        return result;
    }
}