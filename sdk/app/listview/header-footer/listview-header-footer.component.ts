import {Component} from "angular2/core";
// >> angular-listview-header-footer
@Component({
    selector: "my-app",
    template: `
<GridLayout rows="auto, *">
    <RadListView row="1" [items]="myItems">
        <template listItemTemplate #item="item">
            <StackLayout><Label [text]='item.name'></Label></StackLayout>
        </template>
        <StackLayout *listViewHeader backgroundColor="red">
            <Label text="This is the list header"></Label>
        </StackLayout>
        <StackLayout *listViewFooter backgroundColor="blue">
            <Label text="This is the list footer"></Label>
        </StackLayout>
    </RadListView>
</GridLayout>
`
})
// << angular-listview-header-footer
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
}