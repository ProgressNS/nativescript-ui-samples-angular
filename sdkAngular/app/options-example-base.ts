import * as frameModule from "ui/frame";
import { Router } from '@angular/router';
import * as ObservableModule from "data/observable";

export class OptionsExampleBase extends ObservableModule.Observable {
    protected navigationParameters;
    protected router: Router;
    constructor() {
        super();
    }
    
    public onOptionsTapped() {
        console.log(">>>>> onOptionsTapped");
        this.router.navigate(['/options'], { queryParams: { selectedIndex: this.navigationParameters.selectedIndex, paramName: this.navigationParameters.paramName, items: this.navigationParameters.items } });
    }
    
    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}