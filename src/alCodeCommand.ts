import * as vscode from 'vscode';
import {ALNavigatorExtensionContext} from "./alNavigatorExtensionContext";

export class ALCodeCommand {    
    protected _alNavigatorExtensionContext : ALNavigatorExtensionContext;  

    public name: string;
    
    constructor(context : ALNavigatorExtensionContext, commandName: string) {
        this._alNavigatorExtensionContext = context;
        this.name = commandName;
        this._alNavigatorExtensionContext.vscodeExtensionContext.subscriptions.push(
            vscode.commands.registerCommand(
                commandName,
                () => this.run()
            ));        
    }

    protected run() {
        if (!vscode.window.activeTextEditor) {
            return;
        }
            
        let position = vscode.window.activeTextEditor.selection.active;
        let range = new vscode.Range(position, position);
        this.runAsync(range);        
    }

    protected async runAsync(range: vscode.Range) {
    }
}