import * as frameModule from "tns-core-modules/ui/frame";
import { Router } from '@angular/router';
import { Observable } from "tns-core-modules/data/observable";

export class OptionsExampleBase extends Observable {
    protected navigationParameters;
    protected router: Router;
    constructor() {
        super();
    }
    
    public onOptionsTapped(args: any) {
        this.router.navigate(['/options'], { queryParams: { selectedIndex: this.navigationParameters.selectedIndex, paramName: this.navigationParameters.paramName, items: this.navigationParameters.items } });
    }
    
    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}