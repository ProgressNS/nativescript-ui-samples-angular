import { TKExampleTitleDirective } from "./example.directive"
import { tkIfAndroidDirective, tkIfIOSDirective } from "./platform.directives"
import { TKToggleNavButtonDirective } from "./toggle-nav-button.directive"

export const COMMON_DIRECTIVES = [
    TKExampleTitleDirective,
    TKToggleNavButtonDirective,
    tkIfAndroidDirective,
    tkIfIOSDirective
]
