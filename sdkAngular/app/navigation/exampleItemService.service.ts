import { Injectable } from '@angular/core';
import { EXAMPLEITEMS } from "./mock-exampleItems";
import { ExampleItem } from "./exampleItem";
import { AppExampleComponents } from "./appExamples";

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
            for (var index = 0; index < exampleItems.length; index++) {
                var element = exampleItems[index];
                if (element.title === parentTitle) {
                    var parentExampleItem = element;
                    if (parentExampleItem && parentExampleItem.subItems.length >= 0) {
                        var childItem = parentExampleItem.subItems.filter(item => item.title === subItemTitle)[0];

                        return childItem;
                    }
                }
                else {
                    if (element.subItems.length >= 0) {
                        var result = this.getChildExampleItem(parentTitle, subItemTitle, element.subItems);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
        }
    }

    checkName(wordToCompare: string) {
        return function (value: any) {
            if (value.name == wordToCompare) {
                return value;
            }
        }
    }

    getComponentByName(name: string): any {
        var result = AppExampleComponents.filter(this.checkName(name));
        if (result.length == 1) {
            return result[0];
        }

        throw new Error("No Component named '" + name + "' found.");
    }
}