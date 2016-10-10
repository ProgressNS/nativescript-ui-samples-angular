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