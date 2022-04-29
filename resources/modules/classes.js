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
import { fileTree, contentDataBase, jobPeriod } from './content.js';
const { skills, company, period, role, displayRole } = jobPeriod;
const { adm, fullstack, art } = fileTree;
const { thisPage } = contentDataBase;
const lan = document.getElementsByTagName('html')[0].getAttribute('lang');
let device = {
    width: window.screen.width,
    orientation: window.screen.orientation.type,
    touch: window.navigator.maxTouchPoints,
    mobile: window.navigator.userAgentData.mobile
};
let currentWindow = [];
let listDesks = [];
let listTabs = [];
let listFiles = [];
let getClick = [];
let mainDesktop = [];


            /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                PENDING FEATURES AND/OR PENDING ISSUES:
                    1. MAKE open_File Function for images
                    2. Picture inbox
                    3. footer with Copyright, Terms and License
                    4. Accessibility version
            ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    

class Desktop {
    constructor(name) {
        this._name = document.getElementById(name);
        this._onlyName = name;
    };
    // PROPERTIES that are accessed WITHOUT THE PARENTHESES
    get name() {
        return this._name;
    };
    get onlyName() {
        return this._onlyName;
    };
    // **************************************************************************
    // FUNCTION TO OPEN A WINDOW
    get openWindow() {
        return this._openWindow;
    };
    _openWindow(target) { // THE TARGET REPRESENTS THE FIRST OBJECTS INSIDE THE FILETREE

        if (currentWindow.length) { // IF THERE IS A WINDOW ALREADY OPENED ++++++++++++++++++++++++++

            if (fileTree[target][lan].length === 0) { // IF THE FOLDER HAS NO CONTENT
                const pastTab = listTabs.length -1;
                const pastTabEl = document.getElementById(listTabs[pastTab]);
                pastTabEl.setAttribute('style', 'display: none');
                const deskTab = target + '_TAB'; // NAME OF ELEMENT'S ID 
                const openedWindow = document.getElementById(currentWindow[0]);

                const files = document.createElement('div'); // ADDS A CONTAINER FOR THE CONTENT
                files.setAttribute('class', 'contentBox');
                files.setAttribute('id', deskTab.toString());
                files.setAttribute('style', 'overflow: hidden; color: yellow');

                listTabs.push(deskTab.toString());
                
                openedWindow.appendChild(files); // ADDS CONTAINER TO CURRENT WINDOW
                if (lan === 'es') {
                    files.innerHTML = 'No hay contenido aún.';
                } else {
                    files.innerHTML = 'There is no content yet.';
                }
                const v = new Desktop(deskTab.toString()); // Create a new Desktop Object
                listDesks.push(v);
            } else if (fileTree[target][lan][0][0] === '$file') { // IF THE TASK IS TO OPEN A FILE
                // language: [[$file], [[Type of File],[Link to Img*],[External Link],[language],[name]]]
                const typeOfFile = fileTree[target][lan][1][0];
                const image = fileTree[target][lan][2];
                const link = fileTree[target][lan][3][0];
                const language = fileTree[target][lan][4][0];
                const titleName = fileTree[target][lan][5][0];
                const win = document.getElementById(currentWindow[0]);
                const close = document.getElementById('closetab');
                const back = document.getElementById('backtab');
                const ti = document.getElementById('title');
                const tabName = target + '_FILE'; // GENERIC NAME FOR TAB ARRAY

                switch (typeOfFile) {
                    case 'text':
                        // STYLE TRANSITION
                        win.setAttribute('class','textTransition window');
                        close.setAttribute('class', 'colorTransition closetab');
                        back.setAttribute('class', 'colorTransition backtab');
                        // HEADER SECTION
                        ti.setAttribute('style', 'display: none');
                        const textTitle = document.createElement('span');
                        textTitle.setAttribute('class', 'fileTitle');
                        textTitle.setAttribute('id', 'fileTitle');
                        textTitle.innerHTML = titleName;
                        win.appendChild(textTitle);
                        textTitle.setAttribute('class', 'appearTransition fileTitle');
                        // CONTENT SECTION
                        listTabs.push(tabName);
                        listDesks.push(tabName);
                        const priorTab = listTabs[listTabs.length-2];
                        const priorTabEl = document.getElementById(priorTab);
                        priorTabEl.setAttribute('style', 'display:none');

                        const fileContent = document.createElement('div');
                        fileContent.setAttribute('class','textBox');
                        fileContent.setAttribute('id',tabName);
                        // LOAD CONTENT
                        const contentLength = contentDataBase[target][language].length;
                        
                        for (let k=0; k < contentLength; k++) {
                            if (contentDataBase[target][language][k].length === 1) {
                                const newEl = document.createElement(contentDataBase[target][language][k][0]);
                                fileContent.appendChild(newEl);
                            } else if (contentDataBase[target][language][k][0] === 'a') {
                                let newEl, ref, content;
                                for (let l=0; l < contentDataBase[target][language][k].length; l++) {
                                    if (l === 0) {
                                        newEl = contentDataBase[target][language][k][l];
                                    } else if (l === 1) {
                                        ref = contentDataBase[target][language][k][l];
                                    } else {
                                        content = contentDataBase[target][language][k][l];
                                    };
                                };
                                const anchor = document.createElement(newEl);
                                anchor.setAttribute('href',ref);
                                anchor.setAttribute('target','_blank');
                                anchor.setAttribute('style', 'margin-top: 1.5rem; margin-bottom: 1.5rem; margin-left: 2rem; margin-right: 1rem;')
                                anchor.innerHTML = content;
                                fileContent.appendChild(anchor);
                            } else if (contentDataBase[target][language][k][0] === 'img') {
                                let newEl, src;
                                for (let l=0; l < contentDataBase[target][language][k].length; l++) {
                                    if (l === 0) {
                                        newEl = contentDataBase[target][language][k][l];
                                    } else if (l === 1) {
                                        src = contentDataBase[target][language][k][l];
                                    } else {
                                        content = contentDataBase[target][language][k][l];
                                    };
                                };
                                const image = document.createElement(newEl);
                                image.setAttribute('src',src);
                                image.setAttribute('alt','');
                                image.setAttribute('style', 'margin-top: 1.5rem; margin-bottom: 1.5rem; margin-left: 2rem; margin-right: 1rem;')
                                fileContent.appendChild(image);
                            } else {
                                let newEl, content;
                                for (let l=0; l < contentDataBase[target][language][k].length; l++) {
                                    if (l === 0) {
                                        newEl = contentDataBase[target][language][k][l];
                                    } else {
                                        content = contentDataBase[target][language][k][l];
                                    };
                                };
                                const para = document.createElement(newEl);
                                para.setAttribute('style', 'margin-left: 2rem; margin-right: 1rem;')
                                para.innerHTML = content;
                                fileContent.appendChild(para);
                            };
                        };
                        win.appendChild(fileContent); // LAST LINE
                    break;

                    case 'web':
                        const blackCrystal = document.createElement('div');
                        blackCrystal.setAttribute('class','webBox');

                        const choiceBox = document.createElement('div');
                        choiceBox.setAttribute('class','choiceBox');

                        const msgBox = document.createElement('p');
                        msgBox.setAttribute('class','msgBox');

                        const acceptBtn = document.createElement('a');
                        acceptBtn.setAttribute('class','acceptBtn');
                        acceptBtn.setAttribute('href',link);
                        acceptBtn.setAttribute('target','_blank');
                        acceptBtn.onclick = function () {blackCrystal.remove()};


                        const cancelBtn = document.createElement('a');
                        cancelBtn.setAttribute('class','cancelBtn');
                        cancelBtn.onclick = function () {blackCrystal.remove()};

                        if (lan === 'es') {
                            msgBox.innerHTML = 'Una página se abrirá en otra pestaña ¿Deseas continuar?';
                            acceptBtn.innerHTML = 'Continuar';
                            cancelBtn.innerHTML = 'Cerrar';
                        } else {
                            msgBox.innerHTML = 'You are about to open a website in another tab, Do you want to continue?';
                            acceptBtn.innerHTML = 'Continue';
                            cancelBtn.innerHTML = 'Close';
                        };

                        choiceBox.appendChild(cancelBtn);
                        choiceBox.appendChild(acceptBtn);
                        choiceBox.appendChild(msgBox);
                        blackCrystal.appendChild(choiceBox);

                        win.appendChild(blackCrystal);

                    break;

                    case 'gallery':
                        win.setAttribute('class','galleryTransition window');
                        // HEADER SECTION
                        ti.setAttribute('style', 'display: none');
                        const galleryTitle = document.createElement('span');
                        galleryTitle.setAttribute('style','text-align:center; grid-area: windowTitle; font-size: 2.5rem; margin: 0.5rem 0;');
                        galleryTitle.setAttribute('id', 'fileTitle');
                        galleryTitle.innerHTML = titleName;
                        win.appendChild(galleryTitle);
                        // CONTENT SECTION
                        listTabs.push(tabName);
                        listDesks.push(tabName);
                        const priorGallery = listTabs[listTabs.length-2];
                        const priorGalleryEl = document.getElementById(priorGallery);
                        priorGalleryEl.setAttribute('style', 'display:none');

                        const galleryContent = document.createElement('div');
                        galleryContent.setAttribute('class','galleryBox');
                        galleryContent.setAttribute('id',tabName);

                        // FUNCTIONALITY
                        const galleryImg = document.createElement('img');
                        let gallerySRC = './resources/images/' + image[0];
                        galleryImg.setAttribute('src', gallerySRC);
                        galleryImg.setAttribute('class','galleryImg');
                        galleryContent.appendChild(galleryImg);


                        const galleryLength = image.length -1;
                        let imageIndex = 0;
                        const galleryBack = document.createElement('div');
                        galleryBack.innerHTML = '<';
                        galleryBack.setAttribute('class','galleryDirections');
                        galleryBack.setAttribute('style','grid-area: galleryLeft');
                        galleryContent.appendChild(galleryBack);
                        galleryBack.addEventListener('click', function(){
                            if (imageIndex === 0) {
                                gallerySRC = './resources/images/' + image[galleryLength];
                                galleryImg.setAttribute('alt',image[galleryLength])
                                galleryImg.setAttribute('src', gallerySRC);
                                imageIndex = galleryLength;
                            } else {
                                imageIndex --;
                                gallerySRC = './resources/images/' + image[imageIndex];
                                galleryImg.setAttribute('alt',image[imageIndex])
                                galleryImg.setAttribute('src', gallerySRC);
                            }
                        });

                        const galleryNext = document.createElement('div');
                        galleryNext.innerHTML = '>';
                        galleryNext.setAttribute('class','galleryDirections');
                        galleryNext.setAttribute('style','grid-area: galleryRight');
                        galleryContent.appendChild(galleryNext);
                        galleryNext.addEventListener('click', function(){
                            if (imageIndex === galleryLength) {
                                gallerySRC = './resources/images/' + image[0];
                                galleryImg.setAttribute('src', gallerySRC);
                                imageIndex = 0;
                            } else {
                                imageIndex ++;
                                gallerySRC = './resources/images/' + image[imageIndex];
                                galleryImg.setAttribute('src', gallerySRC);
                            }
                        });

                        win.appendChild(galleryContent);
                    break;

                    case 'press':
                        // STYLE TRANSITION
                        win.setAttribute('class','presentationTransition window');
                        // HEADER SECTION
                        ti.setAttribute('style', 'display: none');
                        const transTitle = document.createElement('span');
                        transTitle.setAttribute('class', 'fileTitle');
                        transTitle.setAttribute('style', 'color:white;');
                        transTitle.setAttribute('id', 'fileTitle');
                        transTitle.innerHTML = titleName;
                        win.appendChild(transTitle);
                        transTitle.setAttribute('class', 'appearTransition fileTitle');
                        // CONTENT SECTION
                        listTabs.push(tabName);
                        listDesks.push(tabName);
                        const pastTab = listTabs[listTabs.length-2];
                        const pastTabEl = document.getElementById(pastTab);
                        pastTabEl.setAttribute('style', 'display:none');

                        const transContent = document.createElement('div');
                        transContent.setAttribute('class','transBox');
                        transContent.setAttribute('id',tabName);

                        
                        jobPeriod.company = 'ishop';
                        if (lan === 'es') {
                            jobPeriod.period = '<em>SEP 2020 - ENE 2022</em>';
                            jobPeriod.skills = ['Administración','Liderazgo','Trabajo en equipo','Solución de problemas','Atento al detalle'];
                            jobPeriod.role = '<strong>JEFE ADMINISTRATIVO</strong>';
                        } else {
                            jobPeriod.period = '<em>SEP 2020 - JAN 2022</em>';
                            jobPeriod.skills = ['Management','Leadership','Teamwork','Problem Solving','Attention to Detail'];
                            jobPeriod.role = '<strong>ADMINISTRATIVE MANAGER</strong>';
                        }
                        const fourthPeriod = jobPeriod.displayRole();
                        transContent.appendChild(fourthPeriod);

                        
                        jobPeriod.company = 'ishop';
                        if (lan === 'es') {
                            jobPeriod.period = '<em>MAR 2019 - AGO 2020</em>';
                            jobPeriod.skills = ['Entrenamiento','Administración','Innovación','Priorización','Comunicación'];
                            jobPeriod.role = '<strong>CAJERO ADMINISTRATIVO</strong>';
                        } else {
                            jobPeriod.period = '<em>MAR 2019 - AUG 2020</em>';
                            jobPeriod.skills = ['Training','Administration','Innovation','Priorization','Efficient Communication'];
                            jobPeriod.role = '<strong>ADMINISTRATIVE CASHIER</strong>';
                        }
                        const thirdPeriod = jobPeriod.displayRole();
                        transContent.appendChild(thirdPeriod);

                        
                        jobPeriod.company = 'ishop';
                        if (lan === 'es') {
                            jobPeriod.period = '<em>MAR 2018 - FEB 2019</em>';
                            jobPeriod.skills = ['Atención a Cliente','Dedicación','Manejo de dinero / Cobro'];
                            jobPeriod.role = '<strong>CAJERO</strong>';
                        } else {
                            jobPeriod.period = '<em>MAR 2018 - FEB 2019</em>';
                            jobPeriod.skills = ['Customer Service','Dedication','Payments Management'];
                            jobPeriod.role = '<strong>CASHIER</strong>';
                        }
                        const secondPeriod = jobPeriod.displayRole();
                        transContent.appendChild(secondPeriod);

                        
                        jobPeriod.company = 'gandhi';
                        if (lan === 'es') {
                            jobPeriod.period = '<em>JUL 2015 - FEB 2018</em>';
                            jobPeriod.skills = ['Atención a Cliente','Manejo de dinero / Cobro','Orientado a Resultados'];
                            jobPeriod.role = '<strong>CAJERO / VENDEDOR</strong>';
                        } else {
                            jobPeriod.period = '<em>JUL 2015 - FEB 2018</em>';
                            jobPeriod.skills = ['Customer Service','Payments Management','Target Oriented'];
                            jobPeriod.role = '<strong>CASHIER / SALES</strong>';
                        }
                        const firstPeriod = jobPeriod.displayRole();
                        transContent.appendChild(firstPeriod);

                        win.appendChild(transContent); // LAST LINE
                    break;

                    default:
                        alert('The type of file you are trying to open is not registered.');
                }
            } else { // IF THE FOLDER HAS OTHER FOLDERS OR FILES INSIDE
                const pastTab = listTabs.length -1;
                const pastTabEl = document.getElementById(listTabs[pastTab]);
                pastTabEl.setAttribute('style', 'display: none');

                const deskTab = target + '_TAB'; // NAME OF ELEMENT'S ID 
                const openedWindow = document.getElementById(currentWindow[0]);

                const files = document.createElement('div'); // ADDS A CONTAINER FOR THE CONTENT
                files.setAttribute('class', 'contentBox');
                files.setAttribute('id', deskTab.toString());

                listTabs.push(deskTab.toString());
                openedWindow.appendChild(files); // ADDS CONTAINER TO CURRENT WINDOW

                if (fileTree[target][lan].length === 0) {
                    if (lan === 'es') {
                        files.style.color = 'yellow';
                        files.innerHTML('No hay contenido aún.')
                    } else {
                        files.style.color = 'yellow';
                        files.innerHTML('There is no content yet.')
                    }
                } else {
                    for (let s=1; s < fileTree[target][lan].length; s++) { // CREATES FILES
                        let param1 = fileTree[target][lan][s][0];
                        let param2 = fileTree[target][lan][s][1];
                        let param3 = fileTree[target][lan][s][2];
                        let param4 = files.getAttribute('id');
                        let r = new File(String(param1), String(param2), String(param3), param4);
                        r.createFile();
                        listFiles.push(r);
                    };
                }
                const v = new Desktop(deskTab.toString()); // Create a new Desktop Object
                listDesks.push(v);
            };
            const backBtn = document.getElementById('backtab');
            backBtn.setAttribute('style','visibility: visible');
        } else { // IF THERE NOT AN OPENED WINDOW YET +++++++++++++++++++++++++++++++++++++++++++++++
            //  LOADING PAGE STAGE
            const loadingWindow = document.createElement('div');
            loadingWindow.setAttribute('class', 'loading window');
            this.name.appendChild(loadingWindow);
            const closeLoad = document.createElement('a');
            closeLoad.setAttribute('href', '#desktop');
            closeLoad.innerHTML = 'X';
            closeLoad.style.color = 'white';
            closeLoad.style.cursor = 'pointer';
            closeLoad.style.gridArea = 'windowBar';
            closeLoad.style.textDecoration = 'none';
            closeLoad.style.alignSelf = "center";
            closeLoad.style.justifySelf = 'right';
            closeLoad.style.marginRight = '1rem';
            closeLoad.style.marginTop = '0.5rem';
            loadingWindow.appendChild(closeLoad);
            closeLoad.onclick = function() {loadingWindow.remove(); return false;};
            
            // LOADING CONTENT INTO THE WINDOW STAGE
            const newWindow = document.createElement('div');
            const crystal = document.createElement('div');
            newWindow.setAttribute('class', 'window');
            crystal.setAttribute('class', 'crystal');
            const windowName = target + '_WIN';
            newWindow.setAttribute('id', windowName.toString());

            const closeTab = document.createElement('a'); // ADDS THE CLOSE TAB TO NEW WINDOW
            closeTab.setAttribute('href', '#desktop');
            closeTab.setAttribute('class', 'closetab');
            closeTab.setAttribute('id', 'closetab');
            closeTab.innerHTML = 'X';
            newWindow.appendChild(closeTab);

            const title = document.createElement('span'); // ADDS THE TITLE TO THE WINDOW
            title.setAttribute('class', 'windowTitle');
            title.setAttribute('id', 'title');
            title.innerHTML = fileTree[target][lan][0];
            newWindow.appendChild(title);

            const newName = target + '_DESK';
            const files = document.createElement('div'); // ADDS A CONTAINER FOR THE CONTENT
            files.setAttribute('class', 'contentBox');
            files.setAttribute('id', newName.toString());
            

            newWindow.appendChild(files); // ADDS CONTAINER TO NEW WINDOW
            crystal.appendChild(newWindow);
            this.name.appendChild(crystal); // ADDS NEW WINDOW TO DESK
            listTabs.push(files.getAttribute('id'));
            currentWindow.push(windowName.toString()); // ADDS THE NEW WINDOW TO THE ARRAY OF DESK

            for (let y=1; y < fileTree[target][lan].length; y++) { // CREATES FILES
                let param1 = fileTree[target][lan][y][0];
                let param2 = fileTree[target][lan][y][1];
                let param3 = fileTree[target][lan][y][2];
                let param4 = newName.toString();
                let x = new File(String(param1), String(param2), String(param3), param4);
                x.createFile();
                listFiles.push(x);
            };

            // MAKE THE CONTENT CONTAINER A DESKTOP OBJECT TO ENABLE SELECTION FEATURE
            const v = new Desktop(newName.toString()); // Create a new Desktop Object
            listDesks.push(v);
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            closeTab.onclick = function() {
                currentWindow.pop();
                listDesks = [];
                listTabs = [];
                listFiles = [];
                crystal.remove();
            };
            loadingWindow.remove();

            // BACK TAB FOR WINDOW
            const thisWindow = document.getElementById(currentWindow[0]);
            const close = document.getElementById('closetab');
            const winTitle = document.getElementById('title');
            const backTab = document.createElement('a');
            backTab.setAttribute('href','#desktop');
            backTab.setAttribute('class','backtab');
            backTab.setAttribute('id','backtab');
            if (lan === 'es') {
                backTab.innerHTML = '< Atrás';
            } else {
                backTab.innerHTML = '< Back';
            }
            thisWindow.appendChild(backTab);
            // FUNCTION
            backTab.onclick = function() {
                const fileTitle = document.getElementById('fileTitle');
                const currentTab = document.getElementById(listTabs[listTabs.length-1]);
                const preTab = document.getElementById(listTabs[listTabs.length-2]);
                // RESET STYLES
                thisWindow.setAttribute('class','window');
                backTab.setAttribute('class','backtab');
                close.setAttribute('class','closetab');
                
                currentTab.remove(); // Delete current file/folder display
                listTabs.pop(); // Remove deleted container from array
                listDesks.pop(); // Remove deleted container from array
                preTab.setAttribute('style','display: inline-flex'); // Display the file/folder targeted by the back button
                // CHECK IF THERE IS A FILE TITLE TO REMOVE
                if(fileTitle) {
                    fileTitle.remove();
                    winTitle.setAttribute('style', 'display: in-line');
                };
                // CHECK IF BACK TAB SHOULD KEEP DISPLAYING
                if (listTabs.length === 1) {
                    backTab.setAttribute('style','visibility: hidden');
                };
            };
        };
    };
};

class File {
    constructor(name, type, target, parent) {
        this._name = name;
        this._type = type;
        this._target = target;
        this._parent = parent;
    }

    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get target() {
        return this._target;
    }
    get parent() {
        return this._parent;
    }

    createFile() {
        const theParent = document.getElementById(this._parent);
        const file = document.createElement('div');
        file.setAttribute('id', this._name);
        file.setAttribute('class', 'file');
        
        if (this._type === 'folder') {
            const imgNotSelected = document.createElement('img');
            imgNotSelected.setAttribute('src', './resources/images/folder_notselected.svg');
            imgNotSelected.setAttribute('alt', '');
            file.appendChild(imgNotSelected);

            const imgSelected = document.createElement('img');
            imgSelected.setAttribute('class', 'selected');
            imgSelected.setAttribute('src', './resources/images/folder_selected.svg');
            imgSelected.setAttribute('alt', '');
            file.appendChild(imgSelected);

            const title = document.createElement('span');
            title.innerHTML = this._name;
            file.appendChild(title);
        } else if (this._type === 'text') {
            const imgNotSelected = document.createElement('img');
            imgNotSelected.setAttribute('src', './resources/images/text_notselected.svg');
            imgNotSelected.setAttribute('alt', '');
            file.appendChild(imgNotSelected);

            const imgSelected = document.createElement('img');
            imgSelected.setAttribute('class', 'selected');
            imgSelected.setAttribute('src', './resources/images/text_selected.svg');
            imgSelected.setAttribute('alt', '');
            file.appendChild(imgSelected);

            const title = document.createElement('span');
            title.innerHTML = this._name;
            file.appendChild(title);
        } else if (this._type === 'web') {
            const imgNotSelected = document.createElement('img');
            imgNotSelected.setAttribute('src', './resources/images/web_notselected.svg');
            imgNotSelected.setAttribute('alt', '');
            file.appendChild(imgNotSelected);

            const imgSelected = document.createElement('img');
            imgSelected.setAttribute('class', 'selected');
            imgSelected.setAttribute('src', './resources/images/web_selected.svg');
            imgSelected.setAttribute('alt', '');
            file.appendChild(imgSelected);

            const title = document.createElement('span');
            title.innerHTML = this._name;
            file.appendChild(title);
        } else if (this._type === 'press') {
            const imgNotSelected = document.createElement('img');
            imgNotSelected.setAttribute('src', './resources/images/presentation_notselected.svg');
            imgNotSelected.setAttribute('alt', '');
            file.appendChild(imgNotSelected);

            const imgSelected = document.createElement('img');
            imgSelected.setAttribute('class', 'selected');
            imgSelected.setAttribute('src', './resources/images/presentation_selected.svg');
            imgSelected.setAttribute('alt', '');
            file.appendChild(imgSelected);

            const title = document.createElement('span');
            title.innerHTML = this._name;
            file.appendChild(title);
        } else {
            alert('There is an attempt to create a type of file that does not exist.');
        }
        
        theParent.appendChild(file);
        // SINGLE AND DOUBLE CLICK LISTENER
        const tg = this._target;
        const tn = this._name;
        if (device.mobile === true || device.touch > 0) {
            file.onclick = function() { listDesks[0].openWindow(tg); };
        } else {
            file.addEventListener('mousedown', function() {getClick.push(tn)});
            file.ondblclick = function() { listDesks[0].openWindow(tg); };
        };
    };
};

function getSelection() {
    const clickID = document.getElementById(getClick[0]);
    const deskID = mainDesktop[0].name.getElementsByClassName('selected');
    if (mainDesktop[0] === getClick[0]) { // Checks if the area clicked is the same as the desktop
        for (let z=0; z < deskID.length; z++) { // Does an action in each item of the array
            deskID[z].setAttribute('style', 'visibility: hidden'); // Hides the item (image highlighted)
        };
    } else { // If the user clicks any of the folders          
        for (let z=0; z < deskID.length; z++) { // Does an action in each item of the array
            deskID[z].setAttribute('style', 'visibility: hidden'); // Hides the item (image highlighted)
        };
        const clickChildren = clickID.children; // Gets the elements inside the element clicked
        clickChildren[1].setAttribute('style', 'visibility: visible'); // Makes the second element visible (the element with the class 'selected')
    };
    if (getClick.length) { // After highlighting the item clicked, this empties the array called oneClick which holds the name of the element clicked
        getClick = [];
    };   
};

export {Desktop, File, lan, device, getClick, mainDesktop, getSelection };