// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const setcolor = require('./setcolor.js');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tabvis" is now active 1!');

	vscode.window.tabGroups.onDidChangeTabs(e => {
		if (e && e.opened && (e.opened.length > 0 || e.changed.length > 0)) {
			setTimeout(() => {
				setcolor.setColor(vscode.window.activeTextEditor.document.fileName);
			}, 1);
		}
	});
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
