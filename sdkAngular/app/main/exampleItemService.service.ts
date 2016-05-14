import {Injectable} from '@angular/core';
import {EXAMPLEITEMS} from "./mock-exampleItems";
import {ExampleItem} from "./exampleItem";

@Injectable()
export class ExampleItemService {
    getAllExampleItems(): ExampleItem[] {
        return EXAMPLEITEMS;
    }

    getParentExampleItem(index: number): ExampleItem {
        return EXAMPLEITEMS[index];
    }

    getChildExampleItem(parentTitle: string, subItemTitle: string): ExampleItem {
        var parentExampleItem = EXAMPLEITEMS.filter(item => item.title == parentTitle)[0];
        var childItem = parentExampleItem.subItems.filter(item => item.title == subItemTitle)[0];

        return childItem;
    }
}