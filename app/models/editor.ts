import { Observable } from '@nativescript/core';

export class EditorModel extends Observable {
    private _content: string = '';
    private _filename: string = 'untitled';
    private _language: string = 'text';

    constructor() {
        super();
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        if (this._content !== value) {
            this._content = value;
            this.notifyPropertyChange('content', value);
        }
    }

    get filename(): string {
        return this._filename;
    }

    set filename(value: string) {
        if (this._filename !== value) {
            this._filename = value;
            this.notifyPropertyChange('filename', value);
        }
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        if (this._language !== value) {
            this._language = value;
            this.notifyPropertyChange('language', value);
        }
    }
}