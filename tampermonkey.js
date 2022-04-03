// ==UserScript==
// @name         Windows
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  r/place windows items
// @author       Midokuni & Neochaotics
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://raw.githubusercontent.com/Neochaotics/r-place-windows/main/media/98_Frame.png
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        for(let d of data) {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = d.image;
                i.style = `position: absolute; opacity: ${d.opacity};left: ${d.pos[0]}px;top: ${d.pos[1]}px;image-rendering: pixelated;width: ${d.size[0]}px;height: ${d.size[1]}px;`;
                console.log(d.label, i);
                return i;
            })());
        }
    }, false);
}
