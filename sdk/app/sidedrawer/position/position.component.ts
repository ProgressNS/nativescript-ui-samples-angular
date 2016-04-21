import {Component, ElementRef, ViewChild, Inject} from "angular2/core";
import {View} from "ui/core/view";
import {RadSideDrawer} from "nativescript-telerik-ui-pro/sidedrawer";
import {Page} from "ui/page";
import {ActionItem} from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import {RadSideDrawerComponent, SideDrawerType, MainTemplateDirective, DrawerTemplateDirective} from "nativescript-telerik-ui-pro/sidedrawer/angular/side-drawer-directives";

@Component({
    selector: "my-app",
    directives: [RadSideDrawerComponent, MainTemplateDirective, DrawerTemplateDirective],
    template: `
    <RadSideDrawer #drawer drawerLocation="{{pos}}">
        <template drawerSide>
            <StackLayout cssClass="drawerContent">
        <StackLayout cssClass="headerContent">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <StackLayout cssClass="drawerMenuContent">
          <Label text="Primary" cssClass="drawerSectionHeader"></Label>
          <Label text="Social" cssClass="drawerSectionItem"></Label>
          <Label text="Promotions" cssClass="drawerSectionItem"></Label>
          <Label text="Labels" cssClass="drawerSectionHeader"></Label>
          <Label text="Important" cssClass="drawerSectionItem"></Label>
          <Label text="Starred" cssClass="drawerSectionItem"></Label>
          <Label text="Sent Mail" cssClass="drawerSectionItem"></Label>
          <Label text="Drafts" cssClass="drawerSectionItem"></Label>
        </StackLayout>
      </StackLayout>
        </template>
      <StackLayout *drawerMain>
        <Label text="SideDrawer for NativeScript is shown from the left side of the app window by default.You can change this behavior by setting the drawerLocation property to Left, Top, Right or Bottom." textWrap="true"></Label>
        <Button text="Left" (tap)="onLeftLocationTap()" cssClass="drawerContentButton"></Button>
        <Button text="Top" (tap)="onTopLocationTap()" cssClass="drawerContentButton"></Button>
        <Button text="Right" (tap)="onRightLocationTap()" cssClass="drawerContentButton"></Button>
        <Button text="Bottom" (tap)="onBottomLocationTap()" cssClass="drawerContentButton"></Button>
      </StackLayout>
    </RadSideDrawer>
`,
})
export class AppComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public pos:string = "Left";

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        const sideDrawerItem = new ActionItem();
        sideDrawerItem.text = "OPEN";
        sideDrawerItem.on("tap", () => this.drawer.toggleDrawerState());
        this.page.actionBar.actionItems.addItem(sideDrawerItem);
    }
    
    public onRightLocationTap(args) {
        this.setDrawerLocation("Right");
    }

    public onLeftLocationTap(args) {
        this.setDrawerLocation("Left");
    }

    public onBottomLocationTap(args) {
        this.setDrawerLocation("Bottom");
    }

    public onTopLocationTap(args) {
        this.setDrawerLocation("Top");
    }

    private setDrawerLocation(location: string) {
        this.pos = location;
        this.drawer.showDrawer();
    }
}
