import { Directive, ViewContainerRef, TemplateRef, Inject } from '@angular/core';
import { Device, platformNames } from "platform";
import { DEVICE } from "nativescript-angular/platform-providers";

@Directive({ selector: "[tkIfAndroid]" })
export class tkIfAndroidDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
}

@Directive({ selector: "[tkIfIOS]" })
export class tkIfIOSDirective {
    constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
        if (device.os === platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
}