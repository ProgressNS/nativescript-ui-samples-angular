import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `
<GridLayout rows="auto, *">
    <RadListView row="1" [items]="myItems" loadOnDemandMode="Auto" (loadMoreDataRequested)="onLoadOnDemandRequested()">
        <template listItemTemplate #item="item">
            <StackLayout height="80" backgroundColor="Green"><Label [text]='item.name'></Label></StackLayout>
        </template>
    </RadListView>
</GridLayout>
`
})
export class AppComponent {
    private _items;

    constructor() {
        this._items = new Array();

        for (var i = 0; i < 20; i++) {
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
    
    public onLoadOnDemandRequested(args){
        console.log("Load on demand fired");
        
    }
}