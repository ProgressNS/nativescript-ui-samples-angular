import { Injectable } from '@angular/core';
import { EXAMPLEITEMS } from "./mock-exampleItems";
import { ExampleItem } from "./exampleItem";

@Injectable()
export class ExampleItemService {
    getAllExampleItems(): ExampleItem[] {
        return EXAMPLEITEMS;
    }

    getParentExampleItem(index: number): ExampleItem {
        return EXAMPLEITEMS[index];
    }

    getChildExampleItem(parentTitle: string, subItemTitle: string, exampleItems): ExampleItem {
        if (exampleItems) {
            for (let index = 0; index < exampleItems.length; index++) {
                const element = exampleItems[index];
                if (element.title === parentTitle) {
                    const parentExampleItem = element;
                    if (parentExampleItem && parentExampleItem.subItems.length >= 0) {
                        const childItem = parentExampleItem.subItems.filter(item => item.title === subItemTitle)[0];

                        return childItem;
                    }
                }
                else {
                    if (element.subItems.length >= 0) {
                        const result = this.getChildExampleItem(parentTitle, subItemTitle, element.subItems);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
        }
        return null;
    }
}
