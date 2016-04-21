import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `
<GridLayout rows="auto, *">
    <RadListView row="1" [items]="myItems" itemSwipe="true" (itemSwipeProgressStarted)="onSwipeProgressStarted($event)">
        <template listItemTemplate #item="item">
            <StackLayout height="80" backgroundColor="Green"><Label [text]='item.name'></Label></StackLayout>
        </template>
            <GridLayout *listItemSwipeTemplate columns="auto, *, auto">
                <Button col="0" text="Left button" backgroundColor="Blue"></Button>
                <Button col="2" text="Right button" backgroundColor="Red"></Button>
            </GridLayout>
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
    
    public onSwipeProgressStarted(args){
        console.log("Swipe progress started")
    }
}