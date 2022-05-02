/*
                            OWNERSHIP AND LICENSE
    
    > Ownership

    I ("me", "JOSE MARIA SOLA ESTRADA", "JOSÉ MARÍA SOLÁ ESTRADA", "Jossy Solá",
    "jossysola") solemnly state and affirm with honesty that after the MIT License
    all the Content ("Code", "Script") has been written, designed, debugged, 
    commented, modified and developed by me from the start, without including or 
    integrating any type of content made by another individual in any part of the 
    composing process, making me the AUTHOR of this file and its full Content.

    > MIT License

    Copyright (c) 2022 JOSE MARIA SOLA ESTRADA

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
import { Desktop, lan, device, getClick, mainDesktop, getSelection, inboxMsg } from "./resources/modules/classes.js";
const {width, orientation, touch, mobile} = device;

if ( device.touch > 0 ) {
    // SET MAIN DESKTOP ENVIRONMENT
    const desk = new Desktop('desktop');
    mainDesktop.push(desk);

    const firstFolder = document.getElementById('adm');
    const secondFolder = document.getElementById('fullstack');
    const thirdFolder = document.getElementById('art');

    firstFolder.addEventListener('touchstart', function() { desk.openWindow('adm') });
    secondFolder.addEventListener('touchstart', function() { desk.openWindow('fullstack') });
    thirdFolder.addEventListener('touchstart', function() { desk.openWindow('art') });

    // OPEN WINDOW IF USER TOUCHES AN ELEMENT
    /*firstFolder.onclick = function() {desk.openWindow('adm')};
    secondFolder.onclick = function() {desk.openWindow('fullstack')};
    thirdFolder.onclick = function() {desk.openWindow('art')};*/

} else {
        // SET MAIN DESKTOP ENVIRONMENT
    const desk = new Desktop('desktop');
    mainDesktop.push(desk);

    const firstFolder = document.getElementById('adm');
    const secondFolder = document.getElementById('fullstack');
    const thirdFolder = document.getElementById('art');
    const inbox = document.getElementById('inbox');

    // SET CLICKABLE INBOX
    inbox.onclick = inboxMsg;

    // SET SELECTION FEATURE IN THE DESKTOP ENVIRONMENT
    desk.name.onmousedown = function() { getClick.push('desktop') };
    firstFolder.onmousedown = function(event) {const targ = event.path[1].getAttribute('id'); getClick.push(targ)};
    secondFolder.onmousedown = function(event) {const targ = event.path[1].getAttribute('id'); getClick.push(targ)};
    thirdFolder.onmousedown = function(event) {const targ = event.path[1].getAttribute('id'); getClick.push(targ)};
    desk.name.onmouseup = function () { getSelection() };

    // OPEN WINDOW IF USER DOUBLE CLICKS
    firstFolder.ondblclick = function(event) {const targ = event.path[1].getAttribute('id'); desk.openWindow(targ)};
    secondFolder.ondblclick = function(event) {const targ = event.path[1].getAttribute('id'); desk.openWindow(targ)};
    thirdFolder.ondblclick = function(event) {const targ = event.path[1].getAttribute('id'); desk.openWindow(targ)};
};
