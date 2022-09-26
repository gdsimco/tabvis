const vscode = require('vscode');
const pastelColor = require("pastel-color");
const invert = require('invert-color');

module.exports.setColor = function(pathstr) {
    const filepath = pathstr.split('\\').reverse();

    if (filepath.length <= 1) {
        return; // This file is in top level directory
    }

    const dir = filepath[1];

    console.log("dir: " + dir);
    const color = pastelColor.getPastelColor(dir);
    const settings = vscode.workspace.getConfiguration("workbench");
    const currentColorCustomization = settings.get("colorCustomizations") || {};
    settings.update("colorCustomizations", {...currentColorCustomization, "tab.activeBackground": color.hex})
    settings.update("colorCustomizations", {...currentColorCustomization, "tab.activeForeground": invert(color.hex)})

}