import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "application";
import { ExampleItem } from "./exampleItem";
import { ExampleItemService } from "./exampleItemService.service";
import { ActivatedRoute, Router } from '@angular/router';

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
    var itemIndex = args.index;
    var tappedItem = this._currentExample.subItems[itemIndex];
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
    if (tappedItem.subItems.length === 0) {
      this._router.navigateByUrl(tappedItem.path);
    } else {
      this._router.navigate(['/examples-depth-2', this._currentExample.title, tappedItem.title]);
    }
  }
}