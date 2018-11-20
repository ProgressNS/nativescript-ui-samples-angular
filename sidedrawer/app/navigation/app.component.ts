import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ExampleItem } from "./exampleItem";
import { ExampleItemService } from "./exampleItemService.service";
import { Router } from '@angular/router';
import { View } from "tns-core-modules/ui/frame";

@Component({
  moduleId: module.id,
  selector: "tk-app",
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private _currentExample: ExampleItem;

  constructor(private _router: Router, private _exampleItemsService: ExampleItemService) { }

  ngOnInit() {
    this._currentExample = this._exampleItemsService.getParentExampleItem(0);
  }

  public get currentExample(): ExampleItem {
    return this._currentExample;
  }

  public set currentExample(value: ExampleItem) {
    this._currentExample = value;
  }

  public onNavigationItemTap(args: any) {
    const itemIndex = args.index;
    const tappedItem = this._currentExample.subItems[itemIndex];
    const sideDrawer = <RadSideDrawer>app.getRootView();

    if (args.object.id === "root-drawer-list") {
      // deselect all items
      args.object.eachChildView(childView => {
        this._toggleItemSelected(childView.getViewById("item-container"), false);
      });

      // select tapped item
      this._toggleItemSelected(args.view.getViewById("item-container"), true);
    }

    sideDrawer.closeDrawer();
    if (tappedItem.subItems.length === 0) {
      this._router.navigateByUrl(tappedItem.path);
    } else {
      this._router.navigate(['/examples-depth-2', this._currentExample.title, tappedItem.title]);
    }
  }

  private _toggleItemSelected(view: View, isSelected: boolean): any {
    // using css styles from theme
    view.className = isSelected ? "sidedrawer-list-item active" : "sidedrawer-list-item";
  }
}