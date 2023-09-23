const aboutBtn = document.querySelector('button') ;
const hideParagraph = document.querySelector('.p-hide');
const form = document.querySelector('form');


console.log(aboutBtn)
aboutBtn.addEventListener('click', function(){
    hideParagraph.classList.remove('p-hide')
    aboutBtn.classList.add('p-hide')
}) 

form.addEventListener('submit', (e) =>{
    e.preventDefault() 
    form.reset()
})