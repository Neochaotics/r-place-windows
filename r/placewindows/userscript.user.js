// ==UserScript==
// @name         r/place Windows
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  r/place windows start, frame, cursor, etc
// @author       Midokuni & Neochaotics
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://raw.githubusercontent.com/Neochaotics/r-place-windows/main/media/icon.png
// @grant        none
// ==/UserScript==

// Only need to change this for adding/removing/changing templates
// Each {} set is 1 blueprint. 
// image = url to the image of the blueprint
// label = nothing, just something descriptive
// pos = Position of the top left pixel of the blueprint. [x, y]
//                                                  |
// size = Size of the blueprint [width ----, height | ]
//                                                  |
// opacity = set this to 1. to change only on emergency.
// Use pos = 0,0 and size = 1000,1000 when images cover the entire canvas
let data = [  
    {
        image: "https://raw.githubusercontent.com/Neochaotics/r-place-windows/main/templates/98_Frame.png",
        label: "98 Frame",
        pos: [1957, 0],
        size: [43, 16],
        opacity: 1,
    },
    {
        image: "https://i.imgur.com/YkONOtj.png",
        label: "Jerma Sus",
        pos: [0, 0],
        size: [1000, 1000],
        opacity: 1,
    },
    {
        image: "https://www.dropbox.com/s/0o6u1a0771qfd6d/overlay.png?raw=1",
        label: "Gacha Alliance",
        pos: [0,0],
        size: [2000,2000],
        opacity: 1,
    },
    {
        image: "https://raw.githubusercontent.com/Midokuni/rplace/main/img/arona-b3.png",
        label: "Blue Archive Base 3 - Arona + Shiroko",
        pos: [1621, 441],
        size: [90/3, 139/3],
        opacity: 1,
    },
    {
        image: "https://raw.githubusercontent.com/Midokuni/rplace/main/img/hifu-b1.png",
        label: "Blue Archive Base 1 - Hifumi + Forkbot",
        pos: [136, 963],
        size: [162/3, 111/3],
        opacity: 1,
    },
]

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