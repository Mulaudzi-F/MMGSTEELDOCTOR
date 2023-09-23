import { boilers } from "./data.js";

const aboutBtn = document.querySelector('button') ;
const hideParagraph = document.querySelector('.p-hide');
const dialog = document.querySelector('dialog')
const serviceSection = document.querySelector('.boiler--container')
const form = document.querySelector('form');
const main = document.querySelector('main')
const boilerMore = document.querySelector('.boiler--more')
console.log(serviceSection)
console.log(aboutBtn)
aboutBtn.addEventListener('click', function(){
    hideParagraph.classList.remove('p-hide')
    aboutBtn.classList.add('p-hide')
}) 

form.addEventListener('submit', (e) =>{
    e.preventDefault() 
    form.reset()
}) 

function createPreview({image, description}) {
    let element = document.createElement('div')
    element.classList = 'Boilers';
    element.innerHTML = /* html */ `
     <img src="./Boilers/${image}.jpeg"/>
     <p>${description}</p>    
    `

    return element
} 

//------fragment for boilers service---//
boilerMore.addEventListener('click', () =>{
const boilerFragment = document.createDocumentFragment();
const closebtn = document.createElement('button')
closebtn.textContent = "Close preview"
closebtn.className ="close--preview"

for (const {image, description} of boilers) {
    const preview  = createPreview({image, description}) 

    boilerFragment.appendChild(preview)
} 

dialog.appendChild(boilerFragment) 
dialog.appendChild(closebtn)
dialog.show()
main.classList.add('p-hide') 


})