//TrtConseil & fitnessDrive

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slides = document.getElementsByClassName("slides");

next.addEventListener("click", ()=>{
    after(slides);
});
prev.addEventListener("click", ()=>{
    before(slides);
});

//Panel Admin
let nextAdm = document.querySelector(".nextAdm");
let prevAdm = document.querySelector(".prevAdm");
let slidesAdm = document.getElementsByClassName("slidesAdm");

nextAdm.addEventListener("click", ()=>{
    after(slidesAdm);
});
prevAdm.addEventListener("click", ()=>{
    before(slidesAdm);
});

//Espace personnel 
let nextEspace = document.querySelector(".nextEspace");
let prevEspace = document.querySelector(".prevEspace");
let slidesEspace = document.getElementsByClassName("slidesEspace");

nextEspace.addEventListener("click", ()=>{
    after(slidesEspace);
});
prevEspace.addEventListener("click", ()=>{
    before(slidesEspace);
});

