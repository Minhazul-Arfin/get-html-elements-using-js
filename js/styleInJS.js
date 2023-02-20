const sections = document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightgray';
}

// CHANGING SPECIFIC SECTION COLOR BY IT'S ID
const textContainer = document.getElementById('text-container-id');
textContainer.style.backgroundColor = 'orange';


// NODE & CHILD RELATED
const fruitContainer = document.getElementById('fruit-container-id');
// console.log(fruitContainer);
// console.log(fruitContainer.firstChild)
fruitContainer.childNodes
fruitContainer.firstChild


// CREATING HTML ELEMENTS USING JS and dynamically appended
const fruitUl = document.querySelector('#fruit-container-id ul');
// console.log(fruitUl)

const li = document.createElement('li');
li.innerText = 'This li is generated by js';
// console.log(li)

fruitUl.append(li)