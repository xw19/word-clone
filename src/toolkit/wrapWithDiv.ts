import React from "react";

export function wrapSelectedText(tag: string, styles?: React.CSSProperties): HTMLElement | null {
    let sel: Selection | null;
    sel = window.getSelection();
        
    if (sel && sel.rangeCount) {
        var range = sel.getRangeAt(0)
        const newElement = document.createElement(tag)
        newElement.classList.add('selectedText');
        Object.assign(newElement.style, styles);
        const selectedText = range.toString().replaceAll(' ', '&nbsp;');
        range.deleteContents();
        newElement.innerHTML = selectedText;
        range.insertNode(newElement);
        return newElement;
    }
    return null
}
