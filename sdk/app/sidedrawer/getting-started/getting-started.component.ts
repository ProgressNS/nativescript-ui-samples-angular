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
    styleUrls: ['sidedrawer/getting-started/getting-started.component.css'],
    template: `
    <RadSideDrawer #drawer>
        <template drawerSide>
            <StackLayout class="drawerContent">
        <StackLayout class="headerContent">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <StackLayout cssClass="drawerMenuContent">
          <Label text="Primary" class="drawerSectionHeader"></Label>
          <Label text="Social" class="drawerSectionItem"></Label>
          <Label text="Promotions" class="drawerSectionItem"></Label>
          <Label text="Labels" class="drawerSectionHeader"></Label>
          <Label text="Important" class="drawerSectionItem"></Label>
          <Label text="Starred" class="drawerSectionItem"></Label>
          <Label text="Sent Mail" class="drawerSectionItem"></Label>
          <Label text="Drafts" class="drawerSectionItem"></Label>
        </StackLayout>
      </StackLayout>
        </template>
        <template drawerMain>
        <StackLayout>
        <Label text="SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer." textWrap="true"></Label>
        <Button text="OPEN DRAWER" (tap)=openDrawer()></Button>
        </StackLayout>
        </template>
    </RadSideDrawer>
`

})
export class AppComponent {
    constructor(@Inject(Page) private page: Page) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }
    
    public openDrawer(){
        this.drawer.showDrawer();
    }

}
