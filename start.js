
const vez = document.querySelector(".vezinho");
const vez1 = document.querySelector(".vezinho1");
const vez2 = document.querySelector(".vezinho2");
const opened1 = document.querySelector(".aboutvopened");
const aboutv = document.querySelector(".aboutv");
const opened2 = document.querySelector(".aboutbopened");
const about = document.querySelector(".aboutb");
const sectionInt = document.querySelector(".sections1");
const section2p = document.querySelector(".sec2p");
vez.addEventListener("click", ()=>{
    aboutv.classList.toggle("active");
    vez.classList.toggle("active");
    vez1.classList.toggle("active");
    vez2.classList.toggle("active");
    opened1.classList.toggle("active");
    sectionInt.classList.toggle("active");
    section2p.classList.toggle("active");
    opened2.classList.remove("active");
    about.classList.remove("active");
    barra.classList.remove("active");
    barra1.classList.remove("active");
    barra2.classList.remove("active");
});
const barra = document.querySelector(".barra");
const barra1 = document.querySelector(".barra1");
const barra2 = document.querySelector(".barra2");
barra.addEventListener("click", ()=>{
    about.classList.toggle("active");
    barra.classList.toggle("active");
    barra1.classList.toggle("active");
    barra2.classList.toggle("active");
    opened2.classList.toggle("active");
    sectionInt.classList.toggle("active");
    opened1.classList.remove("active");
    aboutv.classList.remove("active");
    vez.classList.remove("active");
    vez1.classList.remove("active");
    vez2.classList.remove("active");
});


/* scoll */
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}
animeScroll();
if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })}; 
