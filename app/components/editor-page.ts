import { EventData, Page, TextView } from '@nativescript/core';
import { EditorModel } from '../models/editor';

let editorModel: EditorModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    editorModel = new EditorModel();
    page.bindingContext = editorModel;
}

export function onTextChanged(args: EventData) {
    const textView = <TextView>args.object;
    editorModel.content = textView.text;
}

export function onNewFile() {
    editorModel.content = '';
    editorModel.filename = 'untitled';
    editorModel.language = 'text';
}

export function onSaveFile() {
    // TODO: Implement file saving functionality
    console.log('Saving file:', editorModel.filename);
}