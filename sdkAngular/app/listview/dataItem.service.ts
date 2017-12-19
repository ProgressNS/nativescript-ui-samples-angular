import { Injectable } from '@angular/core';
import { DATAITEMS } from "./mock-dataItems";
import { DataItem } from "./dataItem";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
var namesAndEmails = require("../listview/NamesAndEmails.json")
var posts = require("../listview/posts.json")
var listItems = require("../listview/item-layouts/listItems.json")

@Injectable()
export class DataItemService {
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    getDataItems(): DataItem[] {
        return DATAITEMS;
    }

    getIdenticalDataItems(size: number): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < size; i++) {
            result.push(new DataItem(i, "Item " + i, "This is item description."));
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

    getPostDataItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < posts.names.length; i++) {
            result.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i]));
        }

        return result;
    }

    getListItemsFromJson(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < listItems.items.length; i++) {
            result.push(new DataItem(i, listItems.items[i].author, "This is item description", listItems.items[i].title, listItems.items[i].category, listItems.items[i].photo));
        }

        return result;
    }

    getStaggeredItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < 50; i++) {
            result.push(new DataItem(i, "Item " + i, this.getRandomLengthString()));
        }

        return result;
    }

    getDataOperationsItems(): DataItem[] {
        return [
            new DataItem(89, "Special Item 89", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new DataItem(23, "Item 23", "This is item category is: Category 2", null, null, null, false, null, "Category 2"),
            new DataItem(1, "Item 1", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new DataItem(34, "Item 34", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
            new DataItem(55, "Special Item 55", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
            new DataItem(78, "Item 78", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new DataItem(5, "Item 5", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new DataItem(111, "Special Item 111", "This is item category is: Category 2", null, null, null, false, null, "Category 2"),
            new DataItem(665, "Special Item 665", "This is item category is: Category 2", null, null, null, false, null, "Category 2"),
            new DataItem(1134, "Item 1134", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new DataItem(22, "Special Item 22", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
            new DataItem(345, "Item 345", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new DataItem(80, "Item 80", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new DataItem(54, "Item 54", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
        ];
    }

    private getRandomLengthString() {
        var sentenceLength = Math.round((Math.random() * 15));
        var result = this._words[0];
        for (var i = 0; i < sentenceLength; i++) {
            result += (this._words[i % this._words.length] + " ");
        }
        return result;
    }
}