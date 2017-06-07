import { CustomPropertyEditor } from "nativescript-telerik-ui-pro/dataform";

export class ButtonEditorHelper {    
    public buttonValue: number;
    public editor: CustomPropertyEditor;

    public updateEditorValue(editorView, newValue) {
        this.buttonValue = newValue;
    }
}