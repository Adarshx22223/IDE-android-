import { EventData, Page } from '@nativescript/core';
import { TerminalModel } from '../models/terminal';

let terminalModel: TerminalModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    terminalModel = new TerminalModel();
    page.bindingContext = terminalModel;
}

export function onExecuteCommand() {
    terminalModel.executeCommand();
}