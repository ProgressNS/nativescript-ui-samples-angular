import { Component, Input } from '@angular/core';
import { DataItem } from "../dataItem";

@Component({
    selector: 'custom-image-template',
    moduleId: module.id,
    templateUrl: 'custom-image-template.component.html',
    styleUrls: ['custom-image-template.component.css']
})

export class CustomImageTemplateComponent {
    @Input('item') item: DataItem;
}