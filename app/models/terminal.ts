import { Observable } from '@nativescript/core';

export class TerminalModel extends Observable {
    private _output: string = '';
    private _command: string = '';

    constructor() {
        super();
    }

    get output(): string {
        return this._output;
    }

    set output(value: string) {
        if (this._output !== value) {
            this._output = value;
            this.notifyPropertyChange('output', value);
        }
    }

    get command(): string {
        return this._command;
    }

    set command(value: string) {
        if (this._command !== value) {
            this._command = value;
            this.notifyPropertyChange('command', value);
        }
    }

    executeCommand() {
        // TODO: Implement command execution
        this.output += `\n$ ${this.command}`;
        this.command = '';
    }
}