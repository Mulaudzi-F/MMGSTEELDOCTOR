import { boilers, pipes, gysers } from "./data.js";

const aboutBtn = document.querySelector('button') ;
const hideParagraph = document.querySelector('.p-hide');
const dialog = document.querySelector('dialog') 

const activeImg = document.querySelector('[data-list-active]')

const allItems = document.querySelector('.all-items')


const serviceSection = document.querySelector('.service--container')
const form = document.querySelector('form');
const main = document.querySelector('main') 

// 
const boilerMore = document.querySelector('.boiler--more')
const pipeMore = document.querySelector('.pipe-more')
const gyserMore = document.querySelector('.gyser-more')

const closePreview = document.querySelector('.close--preview');

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

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
     <img src="${image}.jpeg"/>
     <p>${description}</p>    
    `
   
    return element
} 


function clearAllItems() {
    // Loop through all child elements and remove them
    while (allItems.firstChild) {
      allItems.removeChild(allItems.firstChild);
    }
  }
  




//------fragment for boilers service---//
boilerMore.addEventListener('click', () =>{
    
const boilerFragment = document.createDocumentFragment();


for (const {image, description} of boilers) {
    const preview  = createPreview({image, description}) 

    boilerFragment.appendChild(preview) 
    
} 

allItems.appendChild(boilerFragment) 

dialog.show() 


main.classList.add('p-hide') 


}) 

//------fragment for Pipes service---//
pipeMore.addEventListener('click', () =>{ 
    
    const pipeFragment = document.createDocumentFragment();
  
    
    for (const {image, description} of pipes) {
        const preview  = createPreview({image, description}) 
    
        pipeFragment.appendChild(preview)
    } 
    
    allItems.appendChild(pipeFragment) 
    
    dialog.show()
    main.classList.add('p-hide') 
    
    
    }) 

    //------fragment for Gysers service---//
gyserMore.addEventListener('click', () =>{ 
   
    const gyserFragment = document.createDocumentFragment();
    
    for (const {image, description} of gysers) {
        const preview  = createPreview({image, description}) 
    
        gyserFragment.appendChild(preview)
    } 
    
    allItems.appendChild(gyserFragment) 
    // allItems.appendChild(closebtn)
    dialog.show()
    main.classList.add('p-hide') 
     
    allItems.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
   
 
    })
 

    closePreview.addEventListener('click', () =>{
        clearAllItems();
        console.log('hello ')
        dialog.close()
        main.classList.remove('p-hide')
    }) 

    // serviceSection.addEventListener('click', ()=>{ 
    //     console.log(serviceSection.closest('img'))
    //     activeImg.show()
    // })

    