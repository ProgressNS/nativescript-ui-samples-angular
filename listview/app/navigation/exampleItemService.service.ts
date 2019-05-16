import { Injectable } from '@angular/core';
import { EXAMPLEITEMS, EXCLUDED_EXAMPLEITEMS } from "./mock-exampleItems";
import { ExampleItem } from "./exampleItem";
import { isIOS } from "tns-core-modules/platform";

@Injectable()
export class ExampleItemService {
    private filterFunction(item) {
        let res = true;
        EXCLUDED_EXAMPLEITEMS.forEach(excludedItem => {
            const exclude = isIOS && excludedItem.platform === "ios" || !isIOS && excludedItem.platform === "android";
            if (!item || (item.title === excludedItem.title && exclude)) {
                res = false;
            }
        });

        return res;
    }

    getAllExampleItems(): ExampleItem[] {
        return EXAMPLEITEMS;
    }

    getParentExampleItem(index: number): ExampleItem {
        const item = EXAMPLEITEMS[index];
        item.subItems = item.subItems.filter(item => this.filterFunction(item));

        return item;
    }

    getChildExampleItem(parentTitle: string, subItemTitle: string, exampleItems): ExampleItem {
        if (exampleItems) {
            for (let index = 0; index < exampleItems.length; index++) {
                const element = exampleItems[index];
                if (element.title === parentTitle) {
                    const parentExampleItem = element;
                    if (parentExampleItem && parentExampleItem.subItems.length >= 0) {
                        const childItem = parentExampleItem.subItems.filter(item => item.title === subItemTitle)[0];
                        childItem.subItems = childItem.subItems.filter(item => this.filterFunction(item));

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
    }
}
