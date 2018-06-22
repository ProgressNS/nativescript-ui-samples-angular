import { CustomPropertyEditor } from "nativescript-ui-dataform";

// >> dataform-button-editor-helper-ios
export class ButtonEditorHelper extends NSObject 
{    
    public buttonValue: number;
    public editor: CustomPropertyEditor;

    public updateEditorValue(editorView, newValue) {
        this.buttonValue = newValue;
        editorView.setTitleForState(this.buttonValue + " (tap to increase)", UIControlState.Normal);
    }

    public "handleTap:"(sender) {
        var newValue = this.buttonValue + 1;
        this.updateEditorValue(sender, newValue);
        this.editor.notifyValueChanged();
    }

    public static ObjCExposedMethods = {
        "handleTap:": { returns: interop.types.void, params: [ UIView.class() ] }
    };
}
// << dataform-button-editor-helper-ios