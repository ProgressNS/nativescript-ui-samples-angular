import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TKExampleTitleDirective } from './example.directive';
import { TKToggleNavButtonDirective } from './toggle-nav-button.directive';
import { TKIfAndroidDirective, TKIfIOSDirective } from './platform.directives';

@NgModule({
    declarations: [
        TKExampleTitleDirective,
        TKToggleNavButtonDirective,
        TKIfAndroidDirective,
        TKIfIOSDirective
    ],
    exports: [
        TKExampleTitleDirective,
        TKToggleNavButtonDirective,
        TKIfAndroidDirective,
        TKIfIOSDirective
    ]
})
export class CommonDirectivesModule { }