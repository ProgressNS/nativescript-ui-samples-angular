import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `
<GridLayout rows="auto, *">
    <RadListView row="1" [items]="myItems" selectionBehavior="Press" (itemSelected)="onItemSelected()">
        <template listItemTemplate #item="item">
            <StackLayout><Label [text]='item.name'></Label></StackLayout>
        </template>
    </RadListView>
</GridLayout>
`
})
export class AppComponent {
    private _items;

    constructor() {
        this._items = new Array();

        for (var i = 0; i < 100; i++) {
            this._items.push({
                name: "Item" + i
            });
        }
    }

    get myItems() {
        return this._items;
    }

    set myItems(value) {
        this._items = value;
    }
    
    public onItemSelected(args){
        console.log("Item selected ");
    }
}