
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true
eslint-env browser
eslint 'no-console':0*/

const selectElement= (Element) => document.querySelector(Element);

selectElement('.mobile-menu').addEventListener('click', ()=> {
    selectElement('header').classList.toggle('active');
})
