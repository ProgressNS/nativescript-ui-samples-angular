//partial type definitions
declare const enum UIUserInterfaceIdiom {
    Unspecified = -1,
    Phone = 0,
    Pad = 1,
    TV = 2
}

declare const UIUserInterfaceIdiomPad: number;
declare class NSObject { }
declare class UIDevice extends NSObject {
    static alloc(): UIDevice; // inherited from NSObject
    static currentDevice(): UIDevice;
    static new(): UIDevice; // inherited from NSObject
    userInterfaceIdiom: UIUserInterfaceIdiom;
}

declare class UIEdgeInsets {
    constructor(insets: any);
}

declare class NSIndexPath extends NSObject { 
    static indexPathForItemInSection(item: number, section: number): NSIndexPath;
}

declare class NSDateFormatter {
    static alloc(): NSDateFormatter; // inherited from NSObject
    init(): NSDateFormatter; // inherited from NSObject
    dateFormat: any;
}

declare class TKSolidFill {
    static solidFillWithColor(color: string): TKSolidFill; // inherited from NSObject
    dateFormat: any;
}

declare class UIButton {
    static buttonWithType(type);
}

declare const enum UIButtonType {
    Custom = 0,
    System = 1
}

declare const enum UIControlContentHorizontalAlignment {
    Center = 0,
    Left = 1,
    Right = 2,
    Fill = 3
}

declare const enum UIControlEvents {
    TouchDown = 1,
    TouchUpInside = 64
}

declare const enum UIControlState {
    Normal = 0,
    Highlighted = 1,
    Disabled = 2,
    Selected = 4
}

declare class UIView {
    static class();
}

declare module interop {        
    var types: {
        "void": any;
    }
}