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
    <RadSideDrawer #drawer>
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
        <template drawerMain>
        <Label text="SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer." textWrap="true"></Label>
        </template>
    </RadSideDrawer>
`,
})
export class AppComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        const sideDrawerItem = new ActionItem();
        sideDrawerItem.text = "OPEN";
        sideDrawerItem.on("tap", () => this.drawer.toggleDrawerState());
        this.page.actionBar.actionItems.addItem(sideDrawerItem);
    }

}
