import * as frameModule from "ui/frame";
import { Router } from "@angular/router-deprecated";

export class OptionsExampleBase {
    protected navigationParameters;
    protected router: Router;
    constructor() {}
    
    public onOptionsTapped() {
        this.router.navigate(["Options", {selectedIndex: this.navigationParameters.selectedIndex, paramName: this.navigationParameters.paramName, items: this.navigationParameters.items }]);
    }
    
    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}