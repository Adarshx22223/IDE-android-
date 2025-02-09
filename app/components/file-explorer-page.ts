import { EventData, Page, ItemEventData } from '@nativescript/core';
import { FileExplorerModel } from '../models/file-explorer';

let fileExplorerModel: FileExplorerModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    fileExplorerModel = new FileExplorerModel();
    page.bindingContext = fileExplorerModel;
    fileExplorerModel.refreshFiles();
}

export function onRefresh() {
    fileExplorerModel.refreshFiles();
}

export function onFileTap(args: ItemEventData) {
    const fileName = fileExplorerModel.files[args.index];
    console.log('Selected file:', fileName);
    // TODO: Implement file opening logic
}