import { CustomPropertyEditor } from "nativescript-ui-dataform";

declare class ButtonEditorHelper {    
    public buttonValue: number;
    public editor: CustomPropertyEditor;
    public updateEditorValue(editorView, newValue);
}