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

// FOLDERS PATH SYNTAX: ---------- language: [[Title of Window], [[Title of File],[Type of File],[Target of File]]]
// FILE TARGET SYNTAX: ---------- language: [[$file], [[Type of File],[Link to Img*],[External Link],[language],[name]]]

// >>>>> I just realized that I separated the values in individual arrays instead of just leaving one array with string values separated with commas

const fileTree = {
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    adm: {
        es: [['Administración y Atención a Cliente'],[['Experiencia'],['press'],['resume']]],
        en: [['Customer Service & Administration'],[['Experience'],['press'],['resume']]]
    },
        resume: {
            es: [['$file'],['press'],['img'],['link'],['es'],['Experiencia']],
            en: [['$file'],['press'],['img'],['link'],['en'],['Experience']]
        },
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    fullstack: {
        es: [['Desarrollo Web'], [['Front-End'],['folder'],['frontProjects']], [['JavaScript'],['folder'],['jsProjects']], [['Back-End'],['folder'],['backendProjects']]],
        en: [['Web Development'], [['Front-End'],['folder'],['frontProjects']], [['JavaScript'],['folder'],['jsProjects']], [['Back-End'],['folder'],['backendProjects']]]
    },
        frontProjects: {
            es: [['Proyectos Front-End'],[['Éste sitio web'],['text'],['thisPage']],[['Prototipo de Club (Inicio)'],['web'],['clubPrototype']],[['Prototipo de Compañía (Inicio)'],['web'],['companyprototype']],[['Acordión de estudio (CSS)'],['web'],['cheatsheet']]],
            en: [['Front-End Projects'],[['This website'],['text'],['thisPage']],[['Club Prototype (Mainpage)'],['web'],['clubPrototype']],[['Company Prototype (Mainpage)'],['web'],['companyprototype']],[['CSS Cheatsheet'],['web'],['cheatsheet']]]
        },
            thisPage: {
                es: [['$file'],['text'],['img'],['link'],['es'],['Éste sitio web']],
                en: [['$file'],['text'],['img'],['link'],['en'],['This website']]
            },
            clubPrototype: {
                es: [['$file'],['web'],['img'],['https://jossysola.github.io/club-prototype/'],['es'],['Prototipo de Club (Inicio)']],
                en: [['$file'],['web'],['img'],['https://jossysola.github.io/club-prototype/'],['en'],['Club Prototype (Mainpage)']]
            },
            companyprototype: {
                es: [['$file'],['web'],['img'],['link'],['es'],['Prototipo de Compañía (Inicio)']],
                en: [['$file'],['web'],['img'],['link'],['en'],['Company Prototype (Mainpage)']]
            },
            cheatsheet: {
                es: [['$file'],['web'],['img'],['https://jossysola.github.io/jossysola/marginandpadding.html'],['es'],['Acordión de estudio CSS']],
                en: [['$file'],['web'],['img'],['https://jossysola.github.io/jossysola/marginandpadding.html'],['es'],['CSS Cheatsheet']]
            },
        jsProjects: {
            es: [['Proyectos JavaScript'],[['Mensajes Aleatorios.js'],['web'],['mixedmsg']],[['Sistema de Archivos.js'],['web'],['fileStructure']]],
            en: [['JavaScript Projects'],[['Mixed Messages.js'],['web'],['mixedmsg']],[['Filesystem.js'],['web'],['fileStructure']]]
        },
            mixedmsg: {
                es: [['$file'],['web'],['img'],['https://github.com/JossySola/mixedmessages'],['es'],['Mensajes Aleatorios.js']],
                en: [['$file'],['web'],['img'],['https://github.com/JossySola/mixedmessages'],['en'],['Mixed Messages.js']]
            },
            fileStructure: {
                es: [['$file'],['web'],['img'],['https://github.com/JossySola/home/tree/main/resources/modules'],['es'],['Sistema de Archivos.js']],
                en: [['$file'],['web'],['img'],['https://github.com/JossySola/home/tree/main/resources/modules'],['en'],['Filesystem.js']]
            },
        backendProjects: {
            es: [],
            en: []
        },
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    art: {
        es: [['Galería de Arte'], [['Escultura'],['folder'],['escultura']], [['Dibujo'],['folder'],['dibujo']]],
        en: [['Art Gallery'], [['Sculpting'],['folder'],['escultura']], [['Drawing'],['folder'],['dibujo']]]
    },
        dibujo: {
            es: [['Estilo Retrato'], [['Retrato'],['folder'],['portrait']]],
            en: [['Portrait'], [['Portrait'],['folder'],['portrait']]]
        },
            portrait: {
                es: [['$file'],['gallery'],['portrait1.jpg','sketch1.jpg','sketch2.jpg','portrait2.jpg','portrait3.jpg','sketch3.jpg','portrait4.jpg'],['link'],['es'],['Estilo Retrato']],
                en: [['$file'],['gallery'],['portrait1.jpg','sketch1.jpg','sketch2.jpg','portrait2.jpg','portrait3.jpg','sketch3.jpg','portrait4.jpg'],['link'],['en'],['Portrait']]
            },
        escultura: {
            es: [['$file'],['gallery'],['sculpt1.jpg','sculpt2.jpg','sculpt3.jpg'],['link'],['es'],['Escultura']],
            en: [['$file'],['gallery'],['sculpt1.jpg','sculpt2.jpg','sculpt3.jpg'],['link'],['en'],['Sculpting']]
        },
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
};

const contentDataBase = {
    thisPage: {
        es: [['br'],['br'],['p','Éste proyecto lo he diseñado y desarrollado por completo desde cero.'],['br'],
            ['p','Desde los íconos los cuales hice en <strong>Inkscape</strong>, la estructura <strong>HTML</strong>, el diseño con <strong>CSS</strong>, hasta la interactividad con <strong>JavaScript Vanilla</strong>.'],['br'],
            ['p','¡Para saber más acerca de mi proyecto, te invito a visitar los siguientes enlaces!:'],['br'],
            ['a','#','> Proceso de Desarrollo'],['br'],
            ['a','https://github.com/JossySola/home','> Github Repository'],['br'],
            ['img','./resources/images/heart.svg']],
        en: [['br'],['br'],['p','I have finished this project from scratch.'],['br'],
            ['p','From the image icons made with <strong>Inkscape</strong>, the structure with <strong>HTML</strong>, the styling and responsiveness with <strong>CSS</strong>, to the interactivity with <strong>JavaScript Vanilla</strong>.'],['br'],
            ['p','If you want to know more about my project, I invite you to visit the next links!:'],['br'],
            ['a','#','> Project Development'],['br'],
            ['a','https://github.com/JossySola/home','> Github Repository'],['br'],
            ['img','./resources/images/heart.svg']]
    },
};

const jobPeriod = {
    skills: [],
    company: '',
    period: '',
    role: '',
    displayRole: function() {
        const roleGrid = document.createElement('div');
        roleGrid.setAttribute('class','rolegrid');

        const roleContent = document.createElement('span');
        roleContent.setAttribute('style','grid-area: role; color: #C7FFFC');
        roleContent.innerHTML = this.role;
        roleGrid.appendChild(roleContent);

        const periodContent = document.createElement('span');
        periodContent.setAttribute('style','grid-area: period; color: #ffffffc4; font-size:1rem');
        periodContent.innerHTML = this.period;
        roleGrid.appendChild(periodContent);

        const logoContent = document.createElement('img');
        logoContent.setAttribute('style','grid-area: logo; justify-self: center');
        logoContent.setAttribute('alt', this.company + ' logo');
        const logoSRC = './resources/images/' + this.company + '.png';
        logoContent.setAttribute('src', logoSRC);
        roleGrid.appendChild(logoContent);

        const skillsTable = document.createElement('ul')
        skillsTable.setAttribute('style','grid-area: skills; margin-bottom: 0.5rem');
        for(let h=0; h < this.skills.length; h++) {
            let skill = document.createElement('li');
            skill.innerHTML = '&#8226;' + this.skills[h];
            skillsTable.appendChild(skill);
        }
        roleGrid.appendChild(skillsTable);
        return roleGrid;
    }
};
export { fileTree, contentDataBase, jobPeriod };