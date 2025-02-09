import { Observable } from '@nativescript/core';

export class FileExplorerModel extends Observable {
    private _files: Array<string> = [];
    private _currentPath: string = '/';

    constructor() {
        super();
    }

    get files(): Array<string> {
        return this._files;
    }

    set files(value: Array<string>) {
        if (this._files !== value) {
            this._files = value;
            this.notifyPropertyChange('files', value);
        }
    }

    get currentPath(): string {
        return this._currentPath;
    }

    set currentPath(value: string) {
        if (this._currentPath !== value) {
            this._currentPath = value;
            this.notifyPropertyChange('currentPath', value);
        }
    }

    refreshFiles() {
        // TODO: Implement file system scanning
        this.files = ['example.py', 'main.cpp', 'project.java'];
    }
}