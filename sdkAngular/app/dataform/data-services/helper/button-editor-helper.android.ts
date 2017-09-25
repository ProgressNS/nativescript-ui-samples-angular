import { CustomPropertyEditor } from "nativescript-pro-ui/dataform";

// >> dataform-button-editor-helper-android
export class ButtonEditorHelper {    
    public buttonValue: number;
    public editor: CustomPropertyEditor;

    public updateEditorValue(editorView, newValue) {
        this.buttonValue = newValue;
    }
}
// << dataform-button-editor-helper-android