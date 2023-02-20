/*
        A NEW SECTION WILL BE ADDED VIA JS PARENT-CHILD RELATION
*/


// 1.  GETTING PARENT NODE
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer)

// 2. WHAT TO ADD
const newSection = document.createElement('section');
const newh1 = document.createElement('h1');
const newUl = document.createElement('ul');


// 3. DEFINING ELEMENTS
newh1.innerText = 'Our Food Collection';


const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
newUl.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Kabab';
newUl.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Pizza';
newUl.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Somusa';
newUl.appendChild(li4);

// 4. APPENDING ALL ELEMENTS
newSection.appendChild(newh1);
newSection.appendChild(newUl);
mainContainer.appendChild(newSection);



/*
    SET INNER HTML DIRECTLY
*/

const newDresses = document.createElement('section');
newDresses.innerHTML = `
<h1> Dress Collection </h1>
<ul>
    <li> Shirt</li>
    <li>Pant</li>
    <li>Panjabi</li>
    <li>Fotua</li>
</ul>
`
mainContainer.appendChild(newDresses);


