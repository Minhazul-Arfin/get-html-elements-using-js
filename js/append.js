/* 
    TO APPAND A NEW HTML ELEMENTS VIA JS, FIRST WE NEED TO SELECT THE PARENT, AFTER THAT WE HAVE TO APPEND NEW ELEMENTS AS APPEND-CHILD PROPERTY
*/

// 1. get parents node
const itemUl = document.getElementById('items-ul');
// console.log(itemUl)

// 2. create a new element
const newli = document.createElement('li');
newli.innerText = 'This item is added via JS';

// 3. append as child element
itemUl.appendChild(newli);