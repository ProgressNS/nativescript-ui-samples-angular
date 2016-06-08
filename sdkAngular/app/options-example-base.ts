import * as frameModule from "ui/frame";
import { Router } from "@angular/router-deprecated";
import * as ObservableModule from "data/observable";

export class OptionsExampleBase extends ObservableModule.Observable {
    protected navigationParameters;
    protected router: Router;
    constructor() {
        super();
    }
    
    public onOptionsTapped() {
        this.router.navigate(["Options", {selectedIndex: this.navigationParameters.selectedIndex, paramName: this.navigationParameters.paramName, items: this.navigationParameters.items }]);
    }
    
    public onNavigationButtonTap() {
        frameModule.topmost().goBack();
    }
}